import "./Buscador.css";

export function Buscador() {
  return (
    <div className="container">
      <div
        className="d-flex align-items-end gap-3 mb-5 p-4 rounded-4"
        style={{ background: "rgba(255,255,255,0.05)" }}
      >
        <div className="flex-grow-1">
          <label
            className="small fw-bold mb-1"
            style={{ color: "var(--SegundoColor)" }}
          >
            DESCUBRE TU PRÓXIMA HISTORIA
          </label>
          <input
            type="text"
            className="minimal-input"
            placeholder="Películas, directores..."
          />
        </div>
        <button className="btn-minimal" title="Filtros">
          ⚙️
        </button>
        <button type="submit" className="btn-minimal fw-bold">
          🔍
        </button>
      </div>
    </div>
  );
}
