import Icon from "../icon/Icon";
import "./card.scss";

function Card({record, onSave, saved }) {
  const rating = record.vote_average;
  const popularity = record.popularity;
  let overview = record.title;
  const MAX_CHARACTERS = 15;

  const truncaText = overview.length > MAX_CHARACTERS
  ? overview.substring(0, MAX_CHARACTERS) + '...'
  : overview;

  const handleSaveId = () => {
    onSave(record.id);
  };



  return (
    <div className="box">
      <div
        className="poster-img"
        style={{
          background: `url(https://www.themoviedb.org/t/p/w500_and_h282_face${record.backdrop_path}), rgba(0, 0, 0, 0.499)`,
          backgroundBlendMode: 'multiply',
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
        src={`https://www.themoviedb.org/t/p/w500_and_h282_face${record.backdrop_path}`}
        alt="Poster"
      />
      <div className="card">
        <h2 className="header">{truncaText}</h2>
        <p>id: {record.id}</p>
        <div className="stats">
          <div className="popularity">
            <h4><Icon name='fire-flame-curved' type='fas' color='#ED7A1D' /> {popularity.toFixed(1)}</h4>
          </div>
          <div className="rating">
            <h4><Icon name='star' type='fas' color='#ECCE07' /> {(rating.toFixed(1)/2)}/5</h4>
          </div>
          <div className="save">
          <button  
            className={`bookmark-button ${saved.includes(record.id) ? "active" : ""}`}
            onClick={handleSaveId}>
            <Icon name="bookmark" type="fas" color="" />
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;