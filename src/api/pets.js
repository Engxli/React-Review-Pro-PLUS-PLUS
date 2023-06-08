import instance from ".";

const getPets = async () => {
  const res = await instance.get("/pets");
  return res.data;
};

const getPetById = async (id) => {
  const res = await instance.get(`/pets/${id}`);
  return res.data;
};

const deletePet = async (id) => {
  const res = await instance.delete(`/pets/${id}`);
  return res.data;
};

export { getPets, getPetById, deletePet };
