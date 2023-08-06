import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";
import Pagination from "../component/pagination/Pagination";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";
const Dashboard = () => {
  const resultsLength = mockData.results.length;
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  const handleListItemClick = (orderId) => {
    const selectedOrder = mockData.results.find(
      (item) => item["&id"] === orderId
    );
    const selectedTimestamps = timestamps.results.find(
      (item) => item["&id"] === orderId
    );
    // console.log(selectedOrder, selectedTimestamps);
    setSelectedOrderDetails(selectedOrder.executionDetails);
    setSelectedOrderTimeStamps(selectedTimestamps.timestamps);
  };

  const mergeDataWithTimestamps = () => {
    return mockData.results.map((item) => {
      const matchingTimestamp = timestamps.results.find(
        (timestamp) => timestamp["&id"] === item["&id"]
      );

      if (matchingTimestamp) {
        return {
          ...item,
          orderSubmitted: matchingTimestamp.timestamps.orderSubmitted,
        };
      } else {
        return item;
      }
    });
  };

  //Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // You can adjust the page size according to your preference.

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Merge data with timestamps
  const mergedData = mergeDataWithTimestamps();
  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle
          primaryTitle="Orders"
          secondaryTitle={`${resultsLength} orders`}
        />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
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
        <List
          rows={mergedData
            .map((item, index) => ({
              ...item,
              onClick: () => handleListItemClick(item["&id"]),
            }))
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)}
          currency={currency}
          searchText={searchText}
        />

        {/* Add the Pagination component here */}
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          pageSize={pageSize}
          totalRecords={mockData.results.length}
        />
      </div>
    </div>
  );
};

export default Dashboard;
