import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import OrderData from "./data/OrderData";
function App() {
  const [orderData, setOrderData] = useState({
    labels: OrderData.map((data) => data.status),
    datasets: [
      {
        label: "Todays Order Status",
        data: OrderData.map((data) => data.count),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <div className="container">
        <div className="w-33">
          <BarChart chartData={orderData} />
        </div>
        <div className="w-33">
          <LineChart chartData={orderData} />
        </div>
        <div className="w-33">
          <PieChart chartData={orderData} />
        </div>
      </div>
    </>
  );
}

export default App;
