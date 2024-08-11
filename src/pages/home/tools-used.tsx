import React from "react";

function ToolsUsed() {
  return (
    <section
      style={{
        height: 800,
      }}
      className="bg-black flex-col flex items-center justify-center text-center "
    >
      <p className="text-white text-4xl mb-6 font-bold">
        Tools used in this project{" "}
      </p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <img src="/images/javascript.jpeg" alt="Next.js logo" />
        <img src="/images/python.jpeg" alt="Next.js logo" />
        <img src="/images/stack.png" alt="Next.js logo" />
        <img src="/images/tensorflow.jpeg" alt="Next.js logo" />
        <img src="/images/html-3.png" alt="Next.js logo" />
        <img src="/images/html-5.png" alt="Next.js logo" />
      </div>
    </section>
  );
}

export default ToolsUsed;
