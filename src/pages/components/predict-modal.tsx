import React from "react";

function PredictModal({ show, onClose, children, header }: any) {
  return (
    <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-4">
        <div className="flex justify-between">
          {header}
          <button
            onClick={onClose}
            className="text-2xl font-bold text-gray-700 hover:text-red-500"
          >
            &times;
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default PredictModal;
