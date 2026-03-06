import { Card } from "./Components/Card";
import { Buscador } from "../../Components/Buscador";

export function Peliculas() {
  return (
    <div className="container pb-5">
      <Buscador />
      <div className="row g-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="col-6 col-md-4 col-lg-2 d-flex justify-content-center"
          >
            <Card name={`Película Proyectada ${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
