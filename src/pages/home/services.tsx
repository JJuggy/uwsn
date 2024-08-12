import { makeTextGreen } from "./header-section";

const Services = () => {
  return (
    <section
      style={{
        height: 800,
      }}
      className="bg-white flex-col flex items-center justify-center text-center "
    >
      <p className="text-gray-500 font-medium text-xl">What we do</p>
      <h2 className="font-semibold text-5xl my-12">
        Our Services at {makeTextGreen("Energy")}Predict
      </h2>
      <div className="flex gap-6">
        <ServiceCard
          header="Energy Consumption"
          description={
            "Energy consumption in HVAC (heating, ventilation, and air conditioning) systems refers to the amount of energy required to heat, cool, and ventilate a building or space."
          }
        />
        <ServiceCard
          header="ML Prediction"
          description={
            "Energy consumption in large auditoriums can be significant due to the need for heating, cooling, lighting, and ventilation to maintain comfortable conditions for occupants.  Using machine learning (ML) to predict energy consumption in HVAC systems involves training algorithms on historical energy usage data and other relevant variables to develop models"
          }
        />
      </div>
    </section>
  );
};

const ServiceCard = ({ header, description }: any) => {
  return (
    <div className="flex flex-col text-left p-4  justify-center h-[400px] w-[400px] rounded-lg shadow-md">
      <p className="text-black font-bold text-2xl text-left">{header}</p>
      <p className=" text-left text-gray-400 my-3">{description}</p>
      <div className="border flex items-center justify-center text-green-500 font-semibold border-1 px-4 py-2 mt-auto  border-green-500 rounded-md">
        <p>Check Sample Data</p>
      </div>
    </div>
  );
};


export default Services;