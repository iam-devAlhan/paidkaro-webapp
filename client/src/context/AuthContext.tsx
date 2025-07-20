import {
  onAuthStateChanged,
  User,
} from "firebase/auth";
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
}

// Auth context creation
export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
});

// Hook to access context
export const useUserContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.warn("useUserContext must be used within an AuthContextProvider");
  }
  return context;
};

// Auth provider component
export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
    });
    

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: user }}>
      {children}
    </AuthContext.Provider>
  );
}
