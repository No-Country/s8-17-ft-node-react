"use client";

import { checkSession } from "@/utils/checkSession";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();

  // Verifica si el usuario está autenticado aquí
  const isAuthenticated = checkSession();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
