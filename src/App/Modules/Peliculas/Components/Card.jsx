import "./Card.css";

export function Card({ name }) {
  return (
    <div className="movie-card p-0 shadow-lg" style={{ width: "200px" }}>
      <figure className="mb-0 position-relative">
        <img
          src="https://images.seeklogo.com/logo-png/29/2/movie-time-cinema-logo-png_seeklogo-297768.png"
          alt={name}
          className="img-fluid"
        />
        <div className="position-absolute top-0 end-0 m-2 badge bg-warning text-dark">
          ★ 8.5
        </div>
      </figure>
      <div className="contain p-3">
        <h5 className="h6 fw-bold mb-1 text-truncate">{name}</h5>
        <p className="small mb-0 ">Acción • 2h 15m</p>
      </div>
    </div>
  );
}
