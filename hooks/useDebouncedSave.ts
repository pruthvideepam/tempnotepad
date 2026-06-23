"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type SaveStatus =
  | "idle"
  | "saving"
  | "saved"
  | "deleted"
  | "restored"
  | "error";

type UseDebouncedSaveParams = {
  slug: string;
  content: string;
  delay?: number;
};

export function useDebouncedSave({
  slug,
  content,
  delay = 90000,
}: UseDebouncedSaveParams) {
  const [status, setStatus] = useState<SaveStatus>("idle");
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
    }, 1200);
  };

  const saveNow = useCallback(async () => {
    const requestSeq = ++requestSeqRef.current;

    try {
      setStatus("saving");

      const res = await fetch(`/api/pads/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Save failed:", res.status, text);
        throw new Error(`Failed to save: ${res.status}`);
      }

      const data = await res.json();

      if (requestSeq !== requestSeqRef.current) {
        return;
      }

      if (data?.skipped) {
        setStatus("idle");
        return;
      }

      if (data?.deleted) {
        setStatus("deleted");
        scheduleIdleReset();
        return;
      }

      if (data?.restored) {
        setStatus("restored");
        scheduleIdleReset();
        return;
      }

      setStatus("saved");
      scheduleIdleReset();
    } catch (error) {
      if (requestSeq !== requestSeqRef.current) {
        return;
      }

      console.error("Auto-save failed:", error);
      setStatus("error");
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
    saveNow,
  };
}