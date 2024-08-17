import { useEffect } from "react";
import { useNavigate } from "react-router";
import useLocalStorage from "../hook/useLocalStorage";

export default function WelcomeProvider({ children }) {
  const { exist } = useLocalStorage("exist_user");
  const navigate = useNavigate();
  useEffect(() => {
    if (!exist) {
      navigate("/welcome");
    }
  }, [exist]);
  return <>{children}</>;
}
