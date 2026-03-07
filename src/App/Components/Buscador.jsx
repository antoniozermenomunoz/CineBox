import { useState } from "react";

import "./Buscador.css";

export function Buscador({ BuscarPeliculas, Ordenar, SetOrdenar }) {
  const [Valor, SetValor] = useState("");

  const ManejarBusqueda = (event) => {
    const NuevaBusqueda = event.target.value;
    SetValor(NuevaBusqueda);
  };

  const ManejarOrden = () => {
    SetOrdenar(!Ordenar);
  };

  const SubmitBuscar = (event) => {
    event.preventDefault();
    BuscarPeliculas(Valor);
  };

  return (
    <div className="container mt-2">
      <div
        className="p-4 rounded-4 shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
        }}
      >
        <form onSubmit={SubmitBuscar} className="w-100">
          <label
            className="small fw-bold mb-1 d-block text-uppercase"
            style={{
              color: "var(--SegundoColor)",
              letterSpacing: "2px",
              fontSize: "0.7rem",
            }}
          >
            Descubre tu próxima historia
          </label>

          <div className="d-flex align-items-center gap-3">
            {/* Input de Búsqueda */}
            <div className="position-relative flex-grow-1">
              <input
                type="text"
                className="minimal-input w-100 pe-2"
                placeholder="Escribe el nombre de una película..."
                value={Valor}
                onChange={ManejarBusqueda}
                style={{ fontSize: "1.1rem" }}
              />
            </div>

            {/* Controles de Acción (Orden y Búsqueda) */}
            <div
              className="d-flex align-items-center gap-3 border-start ps-3"
              style={{ borderColor: "rgba(255,255,255,0.1) !important" }}
            >
              {/* Checkbox estilizado como Switch */}
              <div className="form-check form-switch m-0 d-flex align-items-center gap-2">
                <input
                  className="form-check-input custom-switch"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onChange={ManejarOrden}
                  checked={Ordenar}
                  style={{ cursor: "pointer" }}
                />
                <label
                  className="small text-nowrap d-none d-md-block"
                  htmlFor="flexSwitchCheckDefault"
                  style={{
                    color: Ordenar
                      ? "var(--PrimerColor)"
                      : "var(--TextoOscuro)",
                    fontSize: "0.75rem",
                  }}
                >
                  {Ordenar ? "ORDENADO A-Z" : "ORDENAR"}
                </label>
              </div>

              {/* Botón Lupa */}
              <button
                type="submit"
                className="btn-minimal p-0"
                style={{ border: "none", background: "none" }}
              >
                <span
                  style={{
                    fontSize: "1.2rem",
                    filter: "drop-shadow(0 0 5px var(--PrimerColor))",
                  }}
                >
                  🔍
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
