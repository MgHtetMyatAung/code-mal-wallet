import { Button } from "@material-tailwind/react";
import useLocalStorage from "../../hook/useLocalStorage";
import { Navigate, useNavigate } from "react-router-dom";

export default function HomePage() {
  const { exist: data, clearData } = useLocalStorage("exist_user");
  const navigate = useNavigate();

  if (data === false) {
    return <Navigate to={"/welcome"} />;
  }

  return (
    <div>
      <div>Home page </div>
      <Button
        onClick={() => {
          clearData();
          navigate("/welcome");
        }}
      >
        logout
      </Button>
    </div>
  );
}
