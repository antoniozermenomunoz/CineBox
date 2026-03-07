import "./Card.css";

export function Card({ title, year, poster }) {
  return (
    <div className="movie-card p-0 shadow-lg" style={{ width: "200px" }}>
      <figure className="mb-0 position-relative">
        <img src={poster} alt={title} className="img-fluid" />
        <div className="position-absolute top-0 end-0 m-2 badge bg-warning text-dark">
          ★ 10
        </div>
      </figure>
      <div className="contain p-3">
        <h5 className="h6 fw-bold mb-1 text-truncate">{title}</h5>
        <p className="small mb-0 ">{year}</p>
      </div>
    </div>
  );
}
