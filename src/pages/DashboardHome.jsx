function DashboardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-sm text-gray-500 uppercase tracking-wide">
          Total Employees
        </h3>
        <p className="text-4xl font-bold text-blue-700 mt-2">
          120
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-sm text-gray-500 uppercase tracking-wide">
          Departments
        </h3>
        <p className="text-4xl font-bold text-green-600 mt-2">
          8
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-sm text-gray-500 uppercase tracking-wide">
          Active Users
        </h3>
        <p className="text-4xl font-bold text-purple-600 mt-2">
          96
        </p>
      </div>

    </div>
  );
}

export default DashboardHome;
