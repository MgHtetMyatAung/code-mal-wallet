import { useEffect } from "react";
import useLocalStorage from "../../hook/useLocalStorage";
import { useNavigate } from "react-router";
import { apiHooks } from "../../redux/createApis";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const { exist } = useLocalStorage("exist_user");
  const { data, isLoading } = apiHooks.useGetListDataQuery({
    access_key: "c4e3c07fb9e5c0e1f81ff1b07d2cc7c4",
  });

  console.log(data?.crypto);
  const results = transformData(data?.crypto);

  useEffect(() => {
    if (!exist) {
      navigate("/welcome");
    }
  }, [exist]);

  return (
    <main>
      <section className=" container mx-auto py-10">
        {" "}
        {isLoading ? (
          <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {Array(80)
              .fill("")
              .map((data, id) => (
                <div
                  key={id}
                  className=" flex items-center gap-5 p-3 rounded-md bg-white shadow-md border"
                >
                  <h1 className=" font-semibold w-8 h-8 rounded-full bg-gray-200"></h1>
                  <p>
                    <span className=" font-medium h-6 bg-gray-200 w-[90px] block"></span>
                  </p>
                </div>
              ))}
          </div>
        ) : (
          <div className=" grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
            {results.map((data) => (
              <ModalBox data={data} key={data.unit} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

const transformData = (data) => {
  return data
    ? Object.entries(data).map(([unit, extra]) => ({
        unit,
        ...extra,
      }))
    : [];
};

export function ModalBox({ data }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div
        key={data.name}
        className=" flex items-center gap-5 p-3 rounded-md bg-white shadow-md border cursor-pointer"
        onClick={handleOpen}
      >
        <img src={data.icon_url} alt="" className=" w-8 h-8 rounded-full" />
        <h1 className=" font-semibold w-[80px]">{data.unit}</h1>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
