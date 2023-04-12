function Card({record, id}) {
  return (
    <div className="box">
      <img
        src={`https://www.themoviedb.org/t/p/w500_and_h282_face${record.backdrop_path}`}
        alt="Poster"
      />
      <h4 className="header">{record.title}</h4>
      <p className="overview">{record.overview}</p>
    </div>
  )
}

export default Card;