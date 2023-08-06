import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import { useState } from "react";

import styles from "./List.module.css";

const List = ({ rows, currency, search, onItemClick }) => {
  const [selectedRowId, setSelectedRowId] = useState(null);

  const handleRowClick = (rowId) => {
    setSelectedRowId(rowId);
    const selectedRow = rows.find((row) => row["&id"] === rowId);
    onItemClick(selectedRow);
  };

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
            <ListRow
              key={index}
              onClick={() => handleRowClick(row["&id"])}
              isSelected={selectedRowId === row["&id"]}
            >
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
};

export default List;
