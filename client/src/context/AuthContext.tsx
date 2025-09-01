import { onAuthStateChanged, User } from "firebase/auth";

import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from "react";
import { auth } from "../config/firebase";

// Interface for context
interface AuthContextType {
  currentUser: User | null;
  isLoading: boolean
}

// Auth context creation
export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isLoading: true
});

export const useUserContext = () => {
  const context = useContext(AuthContext);
  return context;
};

// Auth provider component
export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
    });
    
    setLoading(false)
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: user , isLoading: loading}}>
      {children}
    </AuthContext.Provider>
  );
}
