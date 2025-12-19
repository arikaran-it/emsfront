const BASE_URL = "http://localhost:8080/api";

// 🔐 Login API
export const login = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.text();
};

// 👥 Get all employees
export const getEmployees = async () => {
  const res = await fetch(`${BASE_URL}/employees`);
  return res.json();
};

// ➕ Add employee
export const addEmployee = async (employee) => {
  const res = await fetch(`${BASE_URL}/employees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return res.json();
};

// ✏️ Update employee
export const updateEmployee = async (id, employee) => {
  const res = await fetch(`${BASE_URL}/employees/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return res.json();
};

// ❌ Delete employee
export const deleteEmployee = async (id) => {
  return fetch(`${BASE_URL}/employees/${id}`, {
    method: "DELETE",
  });
};
