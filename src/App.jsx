import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EmployeeList from "./pages/EmployeeList";
import DashboardHome from "./pages/DashboardHome";
import Departments from "./pages/Departments";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    
      <Route path="/dashboard" element={<Dashboard />}>
      <Route index element={<DashboardHome />} /> 
      <Route path="employees" element={<EmployeeList />} />
      <Route path="departments" element={<Departments />} />
      <Route path="reports" element={<Reports />} />
      <Route path="settings" element={<Settings />} />
      
      </Route>
    </Routes>
  );
}

export default App;
