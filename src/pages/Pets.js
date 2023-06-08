import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import PetList from "../components/PetList";
import Modal from "../components/Modal";

const Pets = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <SearchBar />
      <button onClick={() => setShow(true)}>Add Pet</button>
      <PetList />

      <Modal show={show} setShow={setShow} />
    </div>
  );
};

export default Pets;
