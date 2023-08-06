import { useState, useEffect } from "react";

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
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  const merged = () => {
    const mergedData = mockData.results.map((order, index) => {
      const timestampsData = timestamps.results[index]?.timestamps;
      if (timestampsData) {
        return { ...order, timestamps: timestampsData };
      }
      return order;
    });
    return { ...mockData, results: mergedData };
  };

  const data = merged();

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle="5 orders" />
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
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={data.results} currency={currency} search={searchText} />
      </div>
    </div>
  );
};

export default Dashboard;
