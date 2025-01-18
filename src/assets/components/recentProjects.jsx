/* eslint-disable react/prop-types */
const RecentOrders = ({ isOpen }) => {
  const orders = [
    {
      id: "#92627",
      status: "Paid",
      date: "09/07/2025",
      customer: "Tara Fletcher",
      amount: "$279.00",
      statusColor: "text-green-500",
    },
    {
      id: "#92509",
      status: "Pending",
      date: "26/06/2025",
      customer: "Joyce Freeman",
      amount: "$831.00",
      statusColor: "text-orange-500",
    },
    {
      id: "#91631",
      status: "Paid",
      date: "18/06/2025",
      customer: "Brittany Hale",
      amount: "$142.00",
      statusColor: "text-green-500",
    },
    {
      id: "#90963",
      status: "Paid",
      date: "11/06/2025",
      customer: "Luke Cook",
      amount: "$232.00",
      statusColor: "green",
    },
    {
      id: "#89332",
      status: "Pending",
      date: "02/06/2025",
      customer: "Eileen Horton",
      amount: "$597.00",
      statusColor: "orange",
    },
    {
      id: "#89107",
      status: "Failed",
      date: "16/04/2025",
      customer: "Frederick Adams",
      amount: "$72.00",
      statusColor: "red",
    },
    {
      id: "#89021",
      status: "Paid",
      date: "13/04/2025",
      customer: "Lee Wheeler",
      amount: "$110.00",
      statusColor: "green",
    },
  ];

  return (
    <div
      className={`relative top-48 p-6 bg-gray-900 text-white rounded-lg mx-24 ${
        isOpen ? "w-[65rem]" : "w-[84rem]"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl">Recent Orders</h2>
        <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
          View Orders
        </button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-400 uppercase text-sm">
            <th className="py-2">Order</th>
            <th className="py-2">Status</th>
            <th className="py-2">Due</th>
            <th className="py-2">Customer</th>
            <th className="py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className={`border-t border-gray-700 hover:bg-slate-800 `}
            >
              <td className="py-3 px-2">{order.id}</td>
              <td className="py-3 px-2 flex items-center space-x-2">
                <span
                  style={{
                    color:
                      order.status === "Failed"
                        ? "red"
                        : order.status === "Pending"
                        ? "orange"
                        : "green",
                    fontWeight: 600,
                  }}
                >
                  {order.status}
                </span>
              </td>
              <td className="py-3 px-2">{order.date}</td>
              <td className="py-3 px-2">{order.customer}</td>
              <td className="py-3 px-2">{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
