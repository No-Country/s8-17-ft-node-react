"use client";

import { checkSession } from "@/utils/checkSession";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, fallback }) => {
  const router = useRouter();

  // Verifica si el usuario está autenticado aquí
  const isAuthenticated = checkSession();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? <>{children}</> : <>{fallback}</>;
};

export default ProtectedRoute;
