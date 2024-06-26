import { useState, useContext, createContext } from 'react';

const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password, cb) => {
    setUser({ name: 'User' });
    cb();
  };

  const signout = cb => {
    setUser(null);
    cb();
  };

  return {
    user,
    signin,
    signout
  };
}