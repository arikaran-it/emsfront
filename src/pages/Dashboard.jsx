import { useNavigate, useLocation, Outlet } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">EMS</h1>

        <nav className="space-y-5 text-lg">
          
          {/* Dashboard */}
          <div
            onClick={() => navigate("/dashboard")}
            className={`cursor-pointer px-3 py-2 rounded
              ${
                location.pathname === "/dashboard"
                  ? "bg-blue-700 text-white"
                  : "hover:text-yellow-300"
              }
            `}
          >
            Dashboard
          </div>

          {/* Employee List */}
          <div
            onClick={() => navigate("/dashboard/employees")}
            className={`cursor-pointer px-3 py-2 rounded
              ${
                location.pathname === "/dashboard/employees"
                  ? "bg-blue-700 text-white"
                  : "hover:text-yellow-300"
              }
            `}
          >
            Employee List
          </div>

          {/* Dummy tabs */}
          <div 
            onClick={() => navigate("/dashboard/departments")}
            className={`cursor-pointer px-3 py-2 rounded
              ${
                location.pathname === "/dashboard/departments"
                  ? "bg-blue-700 text-white"
                  : "hover:text-yellow-300"
              }
            `}>
            Departments
          </div>

          <div 
            onClick={() => navigate("/dashboard/reports")}
            className={`cursor-pointer px-3 py-2 rounded
              ${
                location.pathname === "/dashboard/reports"
                  ? "bg-blue-700 text-white"
                  : "hover:text-yellow-300"
              }
            `}>
            Reports
          </div>

          <div 
            onClick={() => navigate("/dashboard/settings")}
            className={`cursor-pointer px-3 py-2 rounded
              ${
                location.pathname === "/dashboard/settings"
                  ? "bg-blue-700 text-white"
                  : "hover:text-yellow-300"
              }
            `}>
            Settings
          </div>

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Dashboard
            </h2>
            <p className="text-gray-500">
              Welcome back, Admin 👋
            </p>
          </div>

          <button 
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            navigate("/");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>

        {/* ✅ Child pages render HERE */}
        <Outlet />

      </main>
    </div>
  );
}

export default Dashboard;