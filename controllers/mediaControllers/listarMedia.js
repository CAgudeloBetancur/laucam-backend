import Media from "../../models/Media.js";

const listarMedia = async (filter) => {
  let medias;
  if(Object.keys(filter).length === 0) {
    medias = await Media.find().populate([
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
  } else {
    if(!(Object.keys(filter).length > 1)) {
      medias = await Media.countDocuments(filter)
    } else {
      return {
        error: "No puedes enviar más de una propiedad para filtrar"
      }
    }
  }



  return medias;
}

export default listarMedia;