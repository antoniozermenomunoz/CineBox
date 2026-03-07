import { useState, useEffect, useMemo } from "react";
import { ConsultarPelicula } from "../Services/Peliculas";

export function UsePeliculas() {
  const [Ordenar, SetOrdenar] = useState(false);
  const [Peliculas, SetPeliculas] = useState([]);
  const resultados = Peliculas?.length > 0;

  useEffect(() => {
    BuscarPeliculas("Fast");
  }, []);

  const BuscarPeliculas = async (props) => {
    try {
      const data = await ConsultarPelicula(props);
      SetPeliculas(data ?? []);
    } catch (error) {
      console.error("Error al buscar películas:", error);
    }
  };

  const OrdenarPeliculas = useMemo(() => {
    return Ordenar
      ? [...Peliculas].sort((a, b) => a.title.localeCompare(b.title))
      : Peliculas;
  }, [Ordenar, Peliculas]);

  return {
    Ordenar,
    SetOrdenar,
    Peliculas: OrdenarPeliculas,
    resultados,
    BuscarPeliculas,
  };
}
