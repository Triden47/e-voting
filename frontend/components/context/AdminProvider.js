import { useState, createContext } from "react";

export const AdminContext = createContext(null);

const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(false);

  return (
    <AdminContext.Provider
      value={{
        admin,
        setAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
export default AdminProvider;
