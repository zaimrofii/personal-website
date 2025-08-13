import Chart from "./components/chart";
import Header from "./components/header";
import StatsCards from "./components/statsCards";

export default function Page() {
  return (
    <div className="">
      <Header />
      <StatsCards />
      <Chart />
    </div>
  );
}
