import Icon from "../icon/Icon";
import "./watchlistCard.scss";

function WatchlistCard({records, onRemove }) {
  const rating = records.vote_average;
  const popularity = records.popularity;
  let overview = records.title;
  const MAX_CHARACTERS = 20;

  const truncaText = overview.length > MAX_CHARACTERS
  ? overview.substring(0, MAX_CHARACTERS) + '...'
  : overview;

  const handleRemoveId = () => {
    onRemove(records.id);
  };

  return (
      <div className="item">
        <div
          className="poster-img"
          style={{
            background: `url(https://www.themoviedb.org/t/p/w500_and_h282_face${records.backdrop_path}), rgba(0, 0, 0, 0.499)`,
            backgroundBlendMode: 'multiply',
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}>
          <h2 className="header">{truncaText}</h2>
        </div>

        <div className="card"> 

          <div className="stats">

            <div className="popularity">
              <h4><Icon name='fire-flame-curved' type='fas' color='#ED7A1D' /> {popularity.toFixed(1)}</h4>
            </div>

            <div className="rating">
              <h4><Icon name='star' type='fas' color='#ECCE07' /> {(rating.toFixed(1)/2)}/5</h4>
            </div>

            <div className="save">
              <button 
                className="bookmark-remove"
                onClick={handleRemoveId}>
                <Icon name="bookmark" type="fas" color="" />
              </button>
            </div>

          </div>
        </div>

      </div>
  )
}

export default WatchlistCard;