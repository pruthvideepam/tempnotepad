"use client";

import { useState } from "react";
import { useDebouncedSave } from "@/hooks/useDebouncedSave";

type PadEditorProps = {
  slug: string;
  initialContent: string;
  legalHold?: boolean;
};

const AUTOSAVE_DELAY_MS = 90 * 1000;

export default function PadEditor({
  slug,
  initialContent,
  legalHold = false,
}: PadEditorProps) {
  const [content, setContent] = useState(initialContent);

  const { saveStatus, saveNow } = useDebouncedSave({
    slug,
    content,
    delay: AUTOSAVE_DELAY_MS,
  });

  const isLocked = legalHold;

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
              color: isLocked
                ? "#b45309"
                : saveStatus === "saving"
                ? "#a16207"
                : saveStatus === "saved"
                ? "#15803d"
                : saveStatus === "deleted"
                ? "#b45309"
                : saveStatus === "restored"
                ? "#2563eb"
                : saveStatus === "error"
                ? "#dc2626"
                : "#666",
              minWidth: "120px",
              textAlign: "right",
            }}
          >
            {isLocked && "Legal hold"}
            {!isLocked && saveStatus === "saving" && "Saving..."}
            {!isLocked && saveStatus === "saved" && "Saved"}
            {!isLocked && saveStatus === "deleted" && "Deleted"}
            {!isLocked && saveStatus === "restored" && "Restored"}
            {!isLocked && saveStatus === "error" && "Error"}
            {!isLocked && saveStatus === "idle" && ""}
          </div>

          <button
            type="button"
            onClick={saveNow}
            disabled={isLocked}
            style={{
              border: "1px solid #d4d4d4",
              background: isLocked ? "#f5f5f5" : "#fff",
              color: isLocked ? "#999" : "#111",
              borderRadius: "8px",
              padding: "8px 12px",
              fontSize: "14px",
              cursor: isLocked ? "not-allowed" : "pointer",
              opacity: isLocked ? 0.75 : 1,
            }}
          >
            Save
          </button>
        </div>
      </header>

      {isLocked && (
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

      <textarea
        value={content}
        onChange={isLocked ? undefined : (e) => setContent(e.target.value)}
        placeholder="Start typing..."
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