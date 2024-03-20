import Media from "../../models/Media.js";

const listarMedia = async () => {
  const media = await Media.find().populate([
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

export default listarMedia;