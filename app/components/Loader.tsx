"use client";

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <PuffLoader color="#5A5D9D" size={100} />
    </div>
  );
};

export default Loader;
