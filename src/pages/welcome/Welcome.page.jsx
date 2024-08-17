import { LogoIcon } from "../../assets/icons";
import { Button } from "@material-tailwind/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hook/useLocalStorage";

export default function WelcomePage() {
  const navigate = useNavigate();
  const { exist: data, setData } = useLocalStorage("exist_user");
  if (data) {
    return <Navigate to={"/"} />;
  }
  return (
    <section className=" w-full h-screen bg-d-bg grid place-items-center ">
      <div className=" container">
        {" "}
        <div className=" max-w-[400px] mx-auto">
          <div className=" relative w-fit mx-auto">
            <div className="  w-[230px] h-[230px] bg-d-accent rounded-full grid place-items-center blur-[50px] shrink-0"></div>
            <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div className=" w-[200px] h-[200px] grid place-items-center bg-[#00000010] rounded-full">
                <div className=" w-[120px] h-[120px] grid place-items-center bg-[#0000001e] rounded-full">
                  <img
                    src={LogoIcon}
                    alt="logo icon"
                    className=" block w-[70px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-[60px]">
            <h2 className=" text-center text-d-text text-3xl sm:text-[40px]">
              Code Mal Wallet
            </h2>
            <Button
              onClick={() => {
                setData(true);
                navigate("/");
              }}
              className=" capitalize bg-d-accent p-3 rounded-md text-d-text text-[16px] sm:text-lg w-full font-normal mt-[32px]"
            >
              Get Started
            </Button>
            <p className=" text-[#eae9fca9] text-sm mt-4 text-center">
              By tapping “Get Started”you agree and consent to our{" "}
              <Link to={"/"} className=" text-d-accent">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to={"/"} className=" text-d-accent">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
