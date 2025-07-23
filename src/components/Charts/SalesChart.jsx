import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import weeklySales from "../../Data/chartData.js";
export default function SalesChart() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md col-span-2">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Sales Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={weeklySales}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
