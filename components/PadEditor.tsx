"use client";

import { useState } from "react";
import { useDebouncedSave } from "@/hooks/useDebouncedSave";

type PadEditorProps = {
  slug: string;
  initialContent: string;
  legalHold?: boolean;
  creationBlocked?: boolean;
};

const AUTOSAVE_DELAY_MS = 90 * 1000;

export default function PadEditor({
  slug,
  initialContent,
  legalHold = false,
  creationBlocked = false,
}: PadEditorProps) {
  const [content, setContent] = useState(initialContent);

  const { saveStatus, saveErrorMessage, saveNow } = useDebouncedSave({
    slug,
    content,
    delay: AUTOSAVE_DELAY_MS,
  });

  const isLocked = legalHold || creationBlocked;

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        background: "#fafafa",
      }}
    >
      <header
        style={{
          minHeight: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          borderBottom: "1px solid #e5e5e5",
          gap: "12px",
          background: "#fff",
        }}
      >
        <div style={{ fontWeight: 700 }}>TempNotepad</div>

        <div
          style={{
            color: "#666",
            fontSize: "14px",
            flex: 1,
            textAlign: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {slug}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              color: legalHold
                ? "#b45309"
                : creationBlocked
                ? "#b91c1c"
                : saveStatus === "saving"
                ? "#a16207"
                : saveStatus === "saved"
                ? "#15803d"
                : saveStatus === "deleted"
                ? "#b45309"
                : saveStatus === "restored"
                ? "#2563eb"
                : saveStatus === "limit_reached"
                ? "#b91c1c"
                : saveStatus === "error"
                ? "#dc2626"
                : "#666",
              minWidth: "180px",
              textAlign: "right",
            }}
          >
            {legalHold && "Legal hold"}
            {!legalHold && creationBlocked && "New note limit reached"}
            {!isLocked && saveStatus === "saving" && "Saving..."}
            {!isLocked && saveStatus === "saved" && "Saved"}
            {!isLocked && saveStatus === "deleted" && "Deleted"}
            {!isLocked && saveStatus === "restored" && "Restored"}
            {!isLocked &&
              saveStatus === "limit_reached" &&
              "New note limit reached"}
            {!isLocked && saveStatus === "error" && "Error"}
            {!isLocked && saveStatus === "idle" && ""}
          </div>

          <button
            type="button"
            onClick={saveNow}
            disabled={isLocked || saveStatus === "limit_reached"}
            style={{
              border: "1px solid #d4d4d4",
              background:
                isLocked || saveStatus === "limit_reached" ? "#f5f5f5" : "#fff",
              color:
                isLocked || saveStatus === "limit_reached" ? "#999" : "#111",
              borderRadius: "8px",
              padding: "8px 12px",
              fontSize: "14px",
              cursor:
                isLocked || saveStatus === "limit_reached"
                  ? "not-allowed"
                  : "pointer",
              opacity: isLocked || saveStatus === "limit_reached" ? 0.75 : 1,
            }}
          >
            Save
          </button>
        </div>
      </header>

      {legalHold && (
        <div
          style={{
            margin: "16px 16px 0",
            padding: "14px 16px",
            border: "1px solid #fcd34d",
            background: "#fffbeb",
            color: "#92400e",
            borderRadius: "10px",
            fontSize: "14px",
            lineHeight: 1.6,
          }}
        >
          This pad is under legal hold and cannot be edited or deleted.
        </div>
      )}

      {!legalHold && creationBlocked && (
        <div
          style={{
            margin: "16px 16px 0",
            padding: "14px 16px",
            border: "1px solid #fecaca",
            background: "#fef2f2",
            color: "#991b1b",
            borderRadius: "10px",
            fontSize: "14px",
            lineHeight: 1.6,
          }}
        >
          You’ve reached today’s new note limit. You can still open and edit existing notes, but new notes will be available again tomorrow.
        </div>
      )}

      {!isLocked && saveStatus === "limit_reached" && (
        <div
          style={{
            margin: "16px 16px 0",
            padding: "14px 16px",
            border: "1px solid #fecaca",
            background: "#fef2f2",
            color: "#991b1b",
            borderRadius: "10px",
            fontSize: "14px",
            lineHeight: 1.6,
          }}
        >
          {saveErrorMessage ||
            "Daily new pad creation limit reached for this IP. You can still edit existing pads, but you cannot create more new pads today."}
        </div>
      )}

      {!isLocked && saveStatus === "error" && saveErrorMessage && (
        <div
          style={{
            margin: "16px 16px 0",
            padding: "14px 16px",
            border: "1px solid #fecaca",
            background: "#fef2f2",
            color: "#991b1b",
            borderRadius: "10px",
            fontSize: "14px",
            lineHeight: 1.6,
          }}
        >
          {saveErrorMessage}
        </div>
      )}

      <textarea
        value={content}
        onChange={isLocked ? undefined : (e) => setContent(e.target.value)}
        placeholder={
          creationBlocked
            ? "You’ve reached today’s new note limit."
            : "Start typing..."
        }
        spellCheck={false}
        readOnly={isLocked}
        style={{
          flex: 1,
          width: "100%",
          border: "none",
          outline: "none",
          resize: "none",
          padding: "20px",
          fontSize: "16px",
          lineHeight: 1.6,
          fontFamily: "monospace",
          background: isLocked ? "#fcfcfc" : "#fff",
          color: "#111",
        }}
      />
    </main>
  );
}