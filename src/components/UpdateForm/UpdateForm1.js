import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import UpdateForm from "./UpdateForm";

export default function UpdateForm1() {
  const location = useLocation();
  const memories = useSelector((store) => store.memorie);
  return (
    <>
      {memories.length === 0 ? (
        <>
          <h1>Loading....</h1>
        </>
      ) : (
        <>
          <UpdateForm
            uMemorie={
              memories.filter(
                (m) => m._id === location.search.slice(1)
              )[0]
            }
          />
        </>
      )}
    </>
  );
}
