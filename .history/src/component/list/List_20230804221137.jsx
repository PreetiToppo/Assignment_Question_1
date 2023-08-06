import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, currency, search, setDetails, setTimestamps }) => {
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
            const searchLower = search.toLowerCase();
            const orderIdLower = order["&id"].toLowerCase();
            return searchLower === "" || orderIdLower.includes(searchLower);
          })
          .map((row, index) => (
            <ListRow key={index} onClick={() => setCard(row)}>
              <ListRowCell>{row["&id"]}</ListRowCell>
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

  function setCard(row) {
    setDetails(row.executionDetails);
    setTimestamps(row.timestamps);
  }
};

export default List;
