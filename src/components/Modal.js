import React from "react";

const Modal = ({ show, setShow }) => {
  if (!show) return "";
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="absolute z-0 bg-black opacity-75 w-full h-full"></div>
      <div className=" relative pt-[50px] border-b-2  z-10 w-[50%] h-[50%] bg-white border-2 border-black rounded-[37px]">
        <input placeholder="Name" />
        <button
          onClick={() => setShow(false)}
          className="bg-red-300 absolute top-5 right-5"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
