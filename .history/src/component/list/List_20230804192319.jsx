import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, currency, search }) => {
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows
          .filter((order) => {
            return search.toUpperCase() === ""
              ? order
              : order["&key"].toUpperCase().includes(search);
          })
          .map((row, index) => (
            <ListRow key={index}>
              <ListRowCell>{row.results["&id"]}</ListRowCell>
              <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
              <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
              <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
              <ListRowCell>
                {row.bestExecutionData.orderVolume[currency]}
              </ListRowCell>
            </ListRow>
          ))}
      </tbody>
    </table>
  );
};

export default List;
