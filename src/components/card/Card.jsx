import Icon from "../icon/Icon";
import "./card.scss";

function Card({record, language}) {
  const rating = record.vote_average;
  const popularity = record.popularity;
  let overview = record.overview;
  const MAX_CHARACTERS = 120;

  const truncaText = overview.length > MAX_CHARACTERS
  ? overview.substring(0, MAX_CHARACTERS) + '...'
  : overview;

  return (
    <div className="box">
      <img
        src={`https://www.themoviedb.org/t/p/w500_and_h282_face${record.backdrop_path}`}
        alt="Poster"
      />
      <div className="card">
        <h2 className="header">{record.title}</h2>
        <p className="overview">{truncaText} </p>
        <div className="stats">
          <div className="popularity">
            <h3 className="label">Popularity</h3>
            <h4><Icon name='fire-flame-curved' type='fas' color='#ED7A1D' /> {popularity.toFixed(1)}</h4>
          </div>
          <div className="rating">
            <h3 className="label">Rating</h3>
            <h4><Icon name='star-half-stroke' type='fas' color='#ECCE07' /> {rating.toFixed(1)}/10</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;