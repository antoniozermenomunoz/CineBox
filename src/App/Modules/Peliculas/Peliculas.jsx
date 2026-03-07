import { Card } from "./Components/Card";
import { Buscador } from "../../Components/Buscador";
import { UsePeliculas } from "./Hooks/UsePeliculas";
import { MessangerNotFound } from "../../Components/Messanger/MessangerNotFound";

export function Peliculas() {
  const {
    Peliculas,
    resultados,
    Ordenar,
    SetOrdenar,
    BuscarPeliculas,
    OrdenarPeliculas,
  } = UsePeliculas();

  return (
    <div className="container pb-5">
      <Buscador
        BuscarPeliculas={BuscarPeliculas}
        Ordenar={Ordenar}
        SetOrdenar={SetOrdenar}
      />
      <div className="row g-4">
        {resultados ? (
          Peliculas.map((pelicula) => (
            <div
              key={pelicula.id}
              className="col-6 col-md-4 col-lg-2 d-flex justify-content-center"
            >
              <Card
                title={pelicula.title}
                year={pelicula.year}
                poster={pelicula.image}
              />
            </div>
          ))
        ) : (
          <MessangerNotFound />
        )}
      </div>
    </div>
  );
}
