"use client";

import clsx from "clsx";

type DialogProps = {
  isVisible?: boolean;
  title: string;
  content: React.ReactNode;
  onConfirm?: () => void;
  onCancel: () => void;
  disabled: boolean;
};

export function Dialog({
  isVisible = false,
  title,
  content,
  onCancel,
  onConfirm,
  disabled = false,
}: DialogProps) {
  if (!isVisible) return null;

  function handleCancel() {
    if (disabled) return;

    onCancel();
  }

  return (
    <div
      onClick={handleCancel}
      className={clsx(
        "fixed",
        "inset-0",
        "bg-black/25",
        "backdrop-blur-xs",
        "flex",
        "items-center",
        "justify-center",
        "z-50"
      )}
    >
      <div
        role="dialog"
        aria-modal={true}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-descritption"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl p-6 max-w-xl mx-6 flex flex-col gap-4 shadow-xl"
      >
        <h3 id="dialog-title" className="text-xl font-bold">
          {title}
        </h3>
        <div id="dialog-description">{content}</div>
        <div className="flex items-center justify-around">
          <button
            autoFocus
            onClick={handleCancel}
            disabled={disabled}
            className="bg-slate-200 text-slate-950 hover:bg-slate-300 transition flex items-center justify-center py-2 px-4 cursor-pointer rounded-lg disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-progress"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            disabled={disabled}
            className="bg-blue-500 text-white hover:bg-blue-600 transition flex items-center justify-center py-2 px-4 cursor-pointer rounded-lg disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-progress"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
