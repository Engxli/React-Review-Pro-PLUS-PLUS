import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getPetById } from "../api/pets";
import PetCard from "../components/PetCard";

const Info = () => {
  const { petId } = useParams();

  const {
    data: pet,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pet", petId],
    queryFn: () => getPetById(petId),
  });

  if (isLoading) return <h1>Loading.. </h1>;

  return (
    <div>
      Info
      <PetCard pet={pet} />
    </div>
  );
};

export default Info;
