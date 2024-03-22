import * as React from "react";
import AnimalTypePieChart from "../components/AnimalTypePieChart";
import GenderPieChart from "../components/GenderPieChart";
import BarChartNeighborhood from "../components/BarChartNeighborhood";
import DogBreedTreeMap from "../components/DogBreedTreeMap";
import BarChartVSMP from "../components/BarChartVSMP";
import ScatterPlotComponentCat from "../components/ScatterPlotCat";
import ScatterPlotComponentDog from "../components/ScatterPlotDog";

const Dashboard = () => {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <div className="w-full p-2 flex flex-wrap">
        <div className="rounded-lg bg-card w-full p-4">
          <BarChartVSMP />
        </div>
        <div className="rounded-lg bg-card w-full p-4">
          <BarChartNeighborhood />
        </div>
        <div className="rounded-lg bg-card w-full p-4">
          <DogBreedTreeMap />
        </div>
        <div className="rounded-lg bg-card w-1/2 p-4">
          <AnimalTypePieChart />
        </div>
        <div className="rounded-lg bg-card w-1/2 p-4">
          <GenderPieChart />
        </div>
        <div className="rounded-lg bg-card w-full p-4">
          <ScatterPlotComponentCat />
        </div>
        <div className="rounded-lg bg-card w-full p-4">
          <ScatterPlotComponentDog />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
