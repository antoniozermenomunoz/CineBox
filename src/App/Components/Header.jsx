export function Header() {
  return (
    <nav className="navbar navbar-dark py-4">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <figure className="mb-0">
            <img
              src="https://images.seeklogo.com/logo-png/29/2/movie-time-cinema-logo-png_seeklogo-297768.png"
              alt="logo"
              className="logo-img"
              style={{ width: "50px" }}
            />
          </figure>
          <h1
            className="h3 fw-bold mb-0 text-uppercase tracking-wider"
            style={{ color: "var(--PrimerColor)" }}
          >
            Cine<span className="text-white">Box</span>
          </h1>
        </div>
        <nav className="d-none d-md-block small fw-bold">
          ESTRENOS • SALAS • DULCERÍA
        </nav>
      </div>
    </nav>
  );
}
