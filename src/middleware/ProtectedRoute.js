import { useAuth, useAuthorization } from "@/hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return null; // The useAuth hook will redirect to login
  }

  return children;
}

export const AdminProtectedRoute = ({children}) => {
  const { user } = useAuthorization();
  if (!user) {
    return null; // The useAuth hook will redirect to login
  }

  return children;
}
