import React from 'react';

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title = 'Are you sure?',
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 w-full max-w-xs sm:max-w-sm flex flex-col items-center">
        <div className="text-lg sm:text-xl font-semibold mb-2 text-center break-words">{title}</div>
        {description && <div className="text-gray-600 mb-6 text-center text-base sm:text-lg break-words">{description}</div>}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center">
          <button
            className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition-colors font-medium"
            onClick={onCancel}
            autoFocus
          >
            {cancelText}
          </button>
          <button
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}; 