"use client";
import { useContext, useEffect, useState } from "react";
import Buttons from "@/components/buttons";
import Head from "@/components/head";
import Mainer from "@/components/mainbread";
import MainPage from "@/components/mainpage";
import { Button } from "@/components/ui/button";
import { FaAngleUp } from "react-icons/fa6";
import logo from "../../public/loading.webp";
import Context from "./ContextAPI";
function Page() {
  const context = useContext(Context);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      await context.fetchall();
      setloading(false);
    }
    fetchData();
  }, []);
  return (
    <Context.Provider value={context}>
      {loading === true ? (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <img src={logo.src} alt="" className="h-48 w-48"/>
          <h1 className="font-bold">Loading...</h1>
        </div>
      ) : (
        <>
          <Head />
          <Buttons />
          <Mainer />
          <MainPage />
          <div className="md:hidden fixed bottom-2 w-full px-2">
            <Button className="bg-white border rounded-lg w-full h-12 flex justify-between">
              <div className="flex items-center">
                <div className="text-[#1F2937] font-semibold text-left">
                  Shortlisted Properties:
                </div>
                <div className="bg-[#100A55] h-6 w-6 flex justify-center items-center rounded-lg text-white">
                  {context.shortlist.length}
                </div>
              </div>
              <FaAngleUp />
            </Button>
            <div></div>
          </div>
        </>
      )}
    </Context.Provider>
  );
}

export default Page;
