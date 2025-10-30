const Dashboard = () => {
  return (
    <section className="pt-24 pb-12 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-sm text-gray-500">Active users</h3>
            <p className="text-2xl font-semibold mt-2">1,245</p>
          </div>
          <div className="card">
            <h3 className="text-sm text-gray-500">Revenue</h3>
            <p className="text-2xl font-semibold mt-2">₹ 34,560</p>
          </div>
          <div className="card">
            <h3 className="text-sm text-gray-500">Uptime</h3>
            <p className="text-2xl font-semibold mt-2">99.99%</p>
          </div>
        </div>

        <div className="mt-6 card">
          <h3 className="font-semibold mb-2">Recent activity</h3>
          <p className="text-sm text-gray-600">No data — UI demo</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
