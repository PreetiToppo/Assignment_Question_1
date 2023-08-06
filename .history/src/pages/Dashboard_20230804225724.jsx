import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  const mergedData = mockData.results.map((order, index) => {
    const timestampsData = timestamps.results[index]?.timestamps;
    if (timestampsData) {
      return { ...order, timestamps: timestampsData };
    }
    return order;
  });

  const handleClick = (order) => {
    setSelectedOrder(order);
    setSelectedOrderDetails({
      buySellIndicator: order.executionDetails.buySellIndicator,
      orderStatus: order.executionDetails.orderStatus,
      orderType: order.executionDetails.orderType,
    });

    setSelectedOrderTimeStamps({
      orderReceived: order.timestamps.orderReceived,
      orderStatusUpdated: order.timestamps.orderStatusUpdated,
      orderSubmitted: order.timestamps.orderSubmitted,
    });
  };

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle
          primaryTitle="Orders"
          secondaryTitle={`${mockData.results.length}
          orders`}
        />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={[
              "GBP",
              "USD",
              "JPY",
              "EUR",
              "AUD",
              "BGN",
              "BRL",
              "CAD",
              "CHF",
              "CNY",
              "DKK",
              "HKD",
              "HRK",
              "HUF",
              "IDR",
              "ILS",
              "KRW",
              "MXN",
              "MYR",
              "NOL",
              "NZD",
              "PHP",
              "PLN",
              "RON",
              "SEK",
              "SGD",
              "THB",
              "TRY",
              "ZAR",
            ]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          {selectedOrder && (
            <>
              <Card
                cardData={selectedOrderDetails}
                title="Selected Order Details"
              />
              <Card
                cardData={selectedOrderTimeStamps}
                title="Selected Order Timestamps"
              />
            </>
          )}
        </div>
        <List
          rows={mergedData}
          currency={currency}
          search={searchText}
          onItemClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Dashboard;
