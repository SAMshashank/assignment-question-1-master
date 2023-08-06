import React from "react";
import { storiesOf } from "@storybook/react";
import Pagination from "../component/pagination/Pagination";

// Define a function to handle page change in your actual app.
const handlePageChange = (pageNumber) => {
  console.log("Page changed to:", pageNumber);
};

// Define a Template with args to be used for the 'With Controls' story
const Template = (args) => <Pagination {...args} />;

storiesOf("Pagination", module)
  .add("Default", () => (
    <Pagination
      currentPage={1}
      pageSize={10}
      totalRecords={100}
      onPageChange={handlePageChange}
    />
  ))
  .add("With Controls", Template.bind({})) // Use the Template
  .add("Last Page", () => (
    <Pagination
      currentPage={10}
      pageSize={10}
      totalRecords={100}
      onPageChange={handlePageChange}
    />
  ));

// Add controls for the 'With Controls' story
export const WithControls = Template.bind({});
WithControls.args = {
  currentPage: 1,
  pageSize: 10,
  totalRecords: 100,
  onPageChange: handlePageChange,
};
