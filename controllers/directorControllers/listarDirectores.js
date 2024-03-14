import Director from "../../models/Director.js";

const listarDirectores = async () => {
  const directores = await Director.find();
  return directores;
}

export default listarDirectores;