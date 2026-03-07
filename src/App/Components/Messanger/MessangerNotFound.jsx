export function MessangerNotFound() {
  return (
    <div className="container mt-5">
      <div
        className="text-center py-5 rounded-4"
        style={{
          background: "rgba(255, 255, 255, 0.02)",
          border: "1px dashed rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="mb-4" style={{ fontSize: "4rem", opacity: "0.6" }}>
          🎬
        </div>

        <h2 className="fw-bold mb-3" style={{ color: "var(--PrimerColor)" }}>
          ¡CORTE! NO SE ENCONTRARON ESCENAS
        </h2>

        <p
          className="mx-auto"
          style={{ maxWidth: "450px", color: "var(--TextoOscuro)" }}
        >
          Parece que la película que buscas no está en nuestra cartelera.
          Intenta con palabras clave más generales o revisa la ortografía.
        </p>
      </div>
    </div>
  );
}
