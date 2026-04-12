import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";
import { toast } from "react-toastify";
import { selectAuth } from "../store/slices/auth_slice";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector(selectAuth);
  const location = useLocation();

  if (!isAuthenticated) {
    toast.warning("Você precisa fazer login.", { toastId: "auth-warning" });
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};
