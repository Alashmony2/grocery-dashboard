import StateCard from "../../components/StateCard/StateCard.jsx";
import SalesChart from "../../components/Charts/SalesChart.jsx";
import OrdersTable from "../../components/Orders/OrdersTable.jsx";
import dashboardData from "../../Data/DashboardData.js";



export default function Home() {
  return (
    <div className="p-6  min-h-screen ">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StateCard title="Total Products" value={dashboardData.totalProducts} color="bg-blue-600" type="products" />
        <StateCard title="Orders" value={dashboardData.orders} color="bg-green-600" type="orders" />
        <StateCard title="Customers" value={dashboardData.customers} color="bg-yellow-500" type="customers" />
        <StateCard title="Revenue" value={dashboardData.revenue} color="bg-purple-600" type="revenue" />
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
