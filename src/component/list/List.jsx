import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import styles from "./List.module.css";

const List = ({ rows, onClick, currency, searchText }) => {
  const filteredRows = rows.filter((row) =>
    row["&id"].toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {filteredRows.map((row, i) => (
          <ListRow key={i}>
            <ListRowCell onClick={row.onClick}>{row["&id"]}</ListRowCell>
            <ListRowCell onClick={row.onClick}>
              {row.executionDetails.buySellIndicator}
            </ListRowCell>
            <ListRowCell onClick={row.onClick}>
              {row.executionDetails.orderStatus}
            </ListRowCell>
            <ListRowCell onClick={row.onClick}>
              {row.orderSubmitted}
            </ListRowCell>
            <ListRowCell onClick={row.onClick}>
              {currency === "GBP"
                ? row.bestExecutionData.orderVolume.GBP
                : currency === "JPY"
                ? row.bestExecutionData.orderVolume.JPY
                : currency === "EUR"
                ? row.bestExecutionData.orderVolume.EUR
                : row.bestExecutionData.orderVolume.USD}
            </ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
