function Settings() {
  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-xl">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <p className="text-gray-500 mb-6">
        Application settings (dummy only)
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Admin Name
          </label>
          <input
            type="text"
            value="Admin"
            disabled
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            value="admin@ems.com"
            disabled
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>

        <button className="bg-blue-700 text-white px-4 py-2 rounded cursor-not-allowed">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Settings;
