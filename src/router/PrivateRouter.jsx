import { useQuery } from "react-query";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import Loader from "@components/General/Loader";
import { useLocation } from "react-router-dom";

export default function PrivateRouter({ Component }) {
  const { Auth } = useContext(AuthContext);
  const { isLoading } = useQuery("auth", () => Auth);
  const location = useLocation();
  const currentURL = location.pathname;
  const allowedRoutes = ["/", "/Register", "/register"];

  // Loading Auth
  if (isLoading) {
    return <Loader />;
  }

  // Si el usuario está autenticado, permitir el acceso al Dashboard
  if (Auth) {
    return <Component />;
  }

  // Si el usuario no está autenticado, redirigir a la página de inicio
  return <Navigate to="/" />;
}
