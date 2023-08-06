import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ onPageChange, currentPage, pageSize, totalRecords }) => {
  const maxPage = Math.ceil(totalRecords / pageSize);

  const onNextClick = () => {
    if (currentPage < maxPage) onPageChange(currentPage + 1);
  };

  const onPreviousClick = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  return (
    <div style={styles.pagination}>
      <button
        style={styles.button}
        onClick={onPreviousClick}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div style={styles.currentPage}>{currentPage}</div>
      <button
        style={styles.button}
        onClick={onNextClick}
        disabled={currentPage === maxPage}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalRecords: PropTypes.number.isRequired,
};

const styles = {
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
  },
  button: {
    padding: "8px 16px",
    margin: "0 5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    outline: "none",
  },
  currentPage: {
    padding: "8px 16px",
    margin: "0 5px",
    fontWeight: "bold",
  },
};

export default Pagination;
