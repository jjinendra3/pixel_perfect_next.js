"use client";
import React, { useState } from "react";
import Context from "./ContextAPI";
import axios from "axios";
import { toast } from "react-toastify";
const BACKEND = process.env.NEXT_PUBLIC_BACKEND;
interface PropStateProps {
  children: React.ReactNode;
}
const PropState: React.FC<PropStateProps> = ({ children }) => {
  const [properties, setproperties] = useState([]);
  const [shortlist, setshortlist] = useState<any>([]);
  const fetchall = async () => {
    const ids = toast.loading("Fetching all properties");
    try {
      const { data } = await axios.get(`/api/getall`);
      if (data.success === 0) {
        throw data.error;
      }
      setproperties(data.properties);
      toast.update(ids, {
        render: "Fetched all properties",
        type: "success",
        autoClose: 1000,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      toast.update(ids, {
        render: "Error fetching properties",
        type: "error",
        autoClose: 1000,
        isLoading: false,
      });
    }
  };
  const shortlisting = (item: any) => {
    setshortlist([...shortlist, item]);
  };
  const filter = async (verified: boolean, images: boolean) => {
    const ids = toast.loading("Filtering properties");
    try {
      const { data } = await axios.post(`/api/filter`, {
        verified,
        images,
      });
      if (data.success === 0) {
        throw data.error;
      }
      setproperties(data.properties);
      toast.update(ids, {
        render: "Filtered properties",
        type: "success",
        autoClose: 1000,
        isLoading: false,
      });
    } catch (error) {
      toast.update(ids, {
        render: "Error filtering properties",
        type: "error",
        autoClose: 1000,
        isLoading: false,
      });
      return { success: 0, error: error };
    }
  };
  return (
    <Context.Provider
      value={{
        properties,
        fetchall,
        shortlisting,
        shortlist,
        filter,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default PropState;
