'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const router = useRouter();
  // const[token, setToken] = useState()
  const loggedInUser = typeof window !== 'undefined' ? localStorage.getItem("token") : "";

  useEffect(() => {
    if (!loggedInUser) {
      router.push("/login");
    }
  }, [loggedInUser, router]);

  return { user:loggedInUser };
}

export function useAuthorization() {
  const router = useRouter();
  const loggedInUser = typeof window !== 'undefined' ? localStorage.getItem("token") : "";

  // This user role will come from token
  const loggedInUserRole = typeof window !== 'undefined' ? localStorage.getItem("role"): "";

  useEffect(() => {
    if (!loggedInUser) {
      router.push("/login");
    }
    if (loggedInUserRole !== "admin") {
      router.push("/login");
    }
  }, [loggedInUserRole, router]);

  return { user:loggedInUser };
}
