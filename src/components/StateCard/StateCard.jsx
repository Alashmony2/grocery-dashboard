import { HiUsers, HiShoppingBag, HiCurrencyDollar, HiClipboardList } from "react-icons/hi";

const iconMap = {
  products: <HiShoppingBag size={28} />,
  orders: <HiClipboardList size={28} />,
  customers: <HiUsers size={28} />,
  revenue: <HiCurrencyDollar size={28} />,
};

export default function StateCard({ title, value, type, color }) {
  return (
    <div className={`p-4 rounded-xl text-white shadow-md flex items-center gap-4 ${color}`}>
      <div className="text-white bg-white/20  p-3 rounded-full">
        {iconMap[type]}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
