export default function OrdersTable() {
  const orders = [
    {
      id: 1,
      customer: "Ahmed Samy",
      product: "Tomato",
      status: "Delivered",
      price: "EGP 30",
      date: "2025-07-21",
    },
    {
      id: 2,
      customer: "Sara Hossam",
      product: "Potato",
      status: "Shipped",
      price: "EGP 45",
      date: "2025-07-20",
    },
    {
      id: 3,
      customer: "Mona Ali",
      product: "Milk",
      status: "Pending",
      price: "EGP 25",
      date: "2025-07-18",
    },
  ];

  const statusColors = {
    Delivered: "bg-green-100 text-green-800",
    Shipped: "bg-yellow-100 text-yellow-800",
    Pending: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Latest Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-200">
          <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">Customer</th>
              <th scope="col" className="px-6 py-3">Product</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b dark:border-gray-700">
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.product}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">{order.price}</td>
                <td className="px-6 py-4">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
