import { useEffect, useState } from "react";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/api";
import EmployeeForm from "../components/EmployeeForm";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const loadEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleAddClick = () => {
    setSelectedEmployee(null);
    setShowForm(true);
  };

  const handleEditClick = (emp) => {
    setSelectedEmployee(emp);
    setShowForm(true);
  };

  const handleSubmit = async (data) => {
    if (data.id) {
      await updateEmployee(data.id, data);
    } else {
      await addEmployee({ ...data, salary: 0 });
    }
    setShowForm(false);
    loadEmployees();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this employee?")) return;
    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Employee Management
            </h2>
            <p className="text-gray-500">
              Manage your organization employees
            </p>
          </div>

          <button
            onClick={handleAddClick}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 font-semibold"
          >
            + Add Employee
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 text-center">S.No</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center p-6 text-gray-500">
                    No employees found
                  </td>
                </tr>
              ) : (
                employees.map((emp, index) => (
                  <tr
                    key={emp.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="p-3 text-center font-medium">
                      {index + 1}
                    </td>
                    <td className="p-3">{emp.name}</td>
                    <td className="p-3">{emp.email}</td>
                    <td className="p-3">{emp.role}</td>
                    <td className="p-3">{emp.department}</td>
                    <td className="p-3">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleEditClick(emp)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(emp.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showForm && (
        <EmployeeForm
          employee={selectedEmployee}
          onClose={() => setShowForm(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default EmployeeList;
