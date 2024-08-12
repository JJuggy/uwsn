import { useState } from "react";
import PredictModal from "../components/predict-modal";
import DragDrop from "../components/drag-drop";
import { useRouter } from "next/router";

export const makeTextGreen = (text: string) => {
  return <span className="text-green-500 font-semibold">{text}</span>;
};
const HeaderSection = () => {
  const [showPredictModal, setShowPredictModal] = useState(false);
  const router = useRouter();
  return (
    <section
      style={{
        backgroundImage: "url('/images/background.jpeg')",
        height: 800,
        backgroundSize: "cover",
        position: "relative", // Ensure the section is positioned relatively
      }}
      className="p-8"
    >
      {showPredictModal && (
        <PredictModal
          header={
            <div>
              <h1 className="font-bold text-xl">
                Upload Datasheets for prediction
              </h1>
              <p className="text-gray-500">
                Upload data for accurate prediction
              </p>
            </div>
          }
          show={showPredictModal}
          onClose={() => setShowPredictModal(false)}
        >
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center p-4">
              <DragDrop />
            </div>
            <label htmlFor="">Title</label>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-md"
            />
            <div className=" flex">
              <button className="bg-white border border-gray-200 text-black p-2 rounded-md mt-4">
                Cancel
              </button>
              <button
                onClick={() => router.push("/results")}
                className="bg-green-500 ml-12 text-white p-2 rounded-md mt-4"
              >
                Predict Energy Consumption
              </button>
            </div>
          </div>
        </PredictModal>
      )}
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black with 50% opacity
          zIndex: 1, // Set the overlay below the content
        }}
      />

      {/* Main Content */}
      <div
        style={{
          zIndex: 2, // Set the content above the overlay
        }}
        className="flex  items-center justify-between"
      >
        {/* Logo and Title */}
        <div className="flex ">
          <img className="z-50" src="/images/logo.png" alt="logo" />
        </div>

        {/* Buttons */}
        <div className="ml-auto z-50 flex items-center">
          <div className="border font-semibold px-4 py-2 border-green-500 rounded-md">
            <p className="text-green-500">Results</p>
          </div>
          <div className="px-4 cursor-pointer  py-2 bg-green-500 ml-3 rounded-md">
            <p
              onClick={() => {
                setShowPredictModal(true);
              }}
              className="text-black font-semibold"
            >
              Predict
            </p>
          </div>
        </div>
      </div>

      {/* Hero Text */}
      <div className="flex z-50 items-center flex-col text-center w-full mt-12 justify-center relative z-2">
        <p className="text-white  font-semibold text-6xl mb-4">
          Predicting Energy Consumption With {makeTextGreen("EnergyPredict")} ML
          Algorithm
        </p>

        <p className="text-white mb-4 font-light">
          Energy consumption in large auditoriums can be significant due to the
          need for heating, cooling, lighting, and ventilation to maintain
          comfortable conditions for occupants. Using machine learning (ML) to
          predict energy consumption in HVAC systems involves training
          algorithms on historical energy usa
        </p>

        <div className="p-4 w-[300px] cursor-pointer mt-4 bg-green-500 rounded-md">
          <p
            onClick={() => {
              setShowPredictModal(true);
            }}
            className="text-black text-xl font-semibold"
          >
            Predict
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
