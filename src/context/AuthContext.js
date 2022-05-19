import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [userLogin, setUserLogin] = useState(false);

  //   useEffect(() => {
  //     const getToken = localStorage.getItem("token");
  //      if(token){
  //          setUserLogin(true)
  //      }

  //   },[token])

  return (
    <AuthContext.Provider value={{ user, setUser, userLogin, setUserLogin }}>
      {children}
      {/* {console.log(token)} */}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
