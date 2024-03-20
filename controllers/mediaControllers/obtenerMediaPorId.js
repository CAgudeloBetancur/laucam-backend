import Media from "../../models/Media.js";

const obtenerMediaPorId = async (id) => {
  const media = await Media.findById(id).populate([
    {
        path: "generoPrincipal", 
      select: "nombre estado descripcion"
    },
    {
      path: "directorPrincipal",
      select: "nombre estado"
    },
    {
      path: "productora",
      select: "nombre estado slogan descripcion"
    }, 
    {
      path: "tipo",
      select: "nombre descripcion"
    }       
  ]);
  return media;
}

export default obtenerMediaPorId;