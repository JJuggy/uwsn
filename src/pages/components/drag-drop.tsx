import React, { useState } from "react";

function DragDrop() {
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <label className="w-64 group flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide border border-green-500 cursor-pointer hover:bg-green-500 hover:text-white text-green-500 ease-linear transition-all duration-150">
      <svg
        className="w-8 h-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M16.88 4.55a.995.995 0 0 0-.71-.29c-.27 0-.52.1-.71.29l-3.46 3.47V2a1 1 0 1 0-2 0v5.99L7.12 4.55A1.003 1.003 0 0 0 5.7 6.26l4.18 4.18c.19.19.44.29.71.29s.52-.1.71-.29l4.18-4.18a1.003 1.003 0 0 0 0-1.41z" />
        <path d="M10 14a2 2 0 0 0-1.5.67L4.93 11.1a.995.995 0 0 0-.71-.29.995.995 0 0 0-.71.29L.71 14.9a1.003 1.003 0 0 0 1.41 1.41l2.81-2.81 3.67 3.67a2.001 2.001 0 0 0 2.83 0l3.67-3.67 2.81 2.81a1.003 1.003 0 0 0 1.41-1.41l-3.67-3.67A2.001 2.001 0 0 0 10 14z" />
      </svg>
      <span className="mt-2 text-base text-green-600 group-hover:text-white leading-normal">
        {selectedFile ? selectedFile.name : "Click to upload"}
      </span>
      {selectedFile && (
        <div className="mt-4 text-gray-700">
          Selected file: {selectedFile.name}
        </div>
      )}
      <input type="file" className="hidden" onChange={handleFileChange} />
    </label>
  );
}

export default DragDrop;
