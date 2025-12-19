function Departments() {
  const departments = [
    { id: 1, name: "IT", head: "Ari Karan" },
    { id: 2, name: "HR", head: "Karuna" },
    { id: 3, name: "Finance", head: "Praba" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Departments</h2>
      <p className="text-gray-500 mb-6">
        Manage company departments (dummy data)
      </p>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-left">Head</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((d) => (
            <tr key={d.id} className="border-t">
              <td className="p-3">{d.id}</td>
              <td className="p-3">{d.name}</td>
              <td className="p-3">{d.head}</td>
              <td className="p-3 text-center">
                <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Departments;
