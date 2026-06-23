"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type SaveStatus =
  | "idle"
  | "saving"
  | "saved"
  | "deleted"
  | "restored"
  | "limit_reached"
  | "error";

type UseDebouncedSaveParams = {
  slug: string;
  content: string;
  delay?: number;
};

type SaveError = {
  status: number;
  code?: string;
  message: string;
};

export function useDebouncedSave({
  slug,
  content,
  delay = 90000,
}: UseDebouncedSaveParams) {
  const [status, setStatus] = useState<SaveStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isFirstRender = useRef(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const requestSeqRef = useRef(0);

  const clearResetTimer = () => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  };

  const scheduleIdleReset = () => {
    clearResetTimer();
    resetTimerRef.current = setTimeout(() => {
      setStatus("idle");
      setErrorMessage(null);
    }, 1200);
  };

  const saveNow = useCallback(async () => {
    const requestSeq = ++requestSeqRef.current;

    try {
      setStatus("saving");
      setErrorMessage(null);

      const res = await fetch(`/api/pads/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      const rawText = await res.text();
      let data: unknown = null;

      try {
        data = rawText ? JSON.parse(rawText) : null;
      } catch {
        data = null;
      }

      if (!res.ok) {
        const errorPayload =
          data && typeof data === "object" ? (data as Record<string, unknown>) : {};

        const code =
          typeof errorPayload.code === "string" ? errorPayload.code : undefined;

        const message =
          typeof errorPayload.error === "string"
            ? errorPayload.error
            : `Failed to save: ${res.status}`;

        const saveError: SaveError = {
          status: res.status,
          code,
          message,
        };

        throw saveError;
      }

      if (requestSeq !== requestSeqRef.current) {
        return;
      }

      const payload =
        data && typeof data === "object" ? (data as Record<string, unknown>) : {};

      if (payload?.skipped) {
        setStatus("idle");
        setErrorMessage(null);
        return;
      }

      if (payload?.deleted) {
        setStatus("deleted");
        setErrorMessage(null);
        scheduleIdleReset();
        return;
      }

      if (payload?.restored) {
        setStatus("restored");
        setErrorMessage(null);
        scheduleIdleReset();
        return;
      }

      setStatus("saved");
      setErrorMessage(null);
      scheduleIdleReset();
    } catch (error) {
      if (requestSeq !== requestSeqRef.current) {
        return;
      }

      const maybeError = error as Partial<SaveError>;

      if (
        maybeError?.status === 429 &&
        maybeError?.code === "DAILY_PAD_CREATION_LIMIT_REACHED"
      ) {
        setStatus("limit_reached");
        setErrorMessage(
          maybeError.message ||
            "Daily new pad creation limit reached for this IP."
        );
        return;
      }

      console.error("Auto-save failed:", error);
      setStatus("error");
      setErrorMessage(
        maybeError?.message || "Something went wrong while saving."
      );
    }
  }, [slug, content]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      saveNow();
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [content, delay, saveNow]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  return {
    saveStatus: status,
    saveErrorMessage: errorMessage,
    saveNow,
  };
}