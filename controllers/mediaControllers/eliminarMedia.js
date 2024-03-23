import Media from "../../models/Media.js";

const eliminarMedia = async (id) => {
  let mediaEliminada = await Media.findByIdAndDelete(id);
  return (mediaEliminada !== null) ? {deleted: true} : {deleted: false};
}

export default eliminarMedia;