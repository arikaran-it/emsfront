function Reports() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Reports</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Monthly Hires</h3>
          <p className="text-3xl font-bold text-blue-700 mt-2">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Employees Left</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">3</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Active Employees</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">96</p>
        </div>
      </div>

      <p className="text-gray-500 mt-6">
        * This is a dummy reports dashboard.
      </p>
    </div>
  );
}

export default Reports;
