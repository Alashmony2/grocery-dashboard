import StateCard from "../../components/StateCard/StateCard.jsx";
import SalesChart from "../../components/Charts/SalesChart.jsx";
import OrdersTable from "../../components/Orders/OrdersTable.jsx";


export default function Home() {
  return (
    <div className="p-6  min-h-screen ">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StateCard title="Total Products" value="125" color="bg-blue-600" type="products" />
        <StateCard title="Orders" value="80" color="bg-green-600" type="orders" />
        <StateCard title="Customers" value="45" color="bg-yellow-500" type="customers" />
        <StateCard title="Revenue" value="EGP 25,000" color="bg-purple-600" type="revenue" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2.5">
        <SalesChart />
      </div>

      <div className="grid grid-cols-1 mt-6">
        <OrdersTable />
      </div>
    </div>
  );
}
