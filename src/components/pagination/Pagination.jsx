import Icon from "../icon/Icon";
import "./pagination.scss";

function Pagination({
  currentPage, 
  totalPages, 
  handlePreviousPage, 
  handleNextPage, 
}) {
  return (
    <div className="pagination">
      <button 
        className="previous-button"
        onClick={handlePreviousPage}>
          <Icon name="angles-left" type="fas" color="white" />
      </button>
      <div className="pages-overview">
        <p className="page ">{currentPage}/{totalPages}</p>
      </div>
      <button 
        className="next-button"
        onClick={handleNextPage}>
          <Icon name="angles-right" type="fas" color="white" />
      </button>
    </div>
  )
}

export default Pagination;