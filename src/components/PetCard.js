import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { deletePet } from "../api/pets";

const PetCard = ({ pet }) => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteThePet,
    isLoading,
    error,
  } = useMutation({
    mutationFn: () => deletePet(pet.id),
    onSuccess: () => {
      queryClient.invalidateQueries(["pets"]);
    },
  });

  const handleDelete = () => {
    deleteThePet();
  };
  if (isLoading) return <h1>Loading..</h1>;

  return (
    <div className="w-[300px] h-[400px] bg-red-300 rounded-[12px] overflow-hidden">
      <div className="w-full h-[70%] bg-green-300">
        <img src={pet.image} className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-[15%] bg-gray-300 flex justify-center items-center text-[20px] font-bold">
        {pet.name}
      </div>
      <div className="w-full h-[15%] bg-sky-300 flex justify-evenly items-center">
        <Link to={`/pets/${pet.id}`}>
          <button className="border border-white bg-green-300 rounded-md font-bold px-4 py-2 hover:bg-green-700 hover:text-white">
            View
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className="border border-white bg-red-300 rounded-md font-bold px-4 py-2 hover:bg-red-700 hover:text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PetCard;
