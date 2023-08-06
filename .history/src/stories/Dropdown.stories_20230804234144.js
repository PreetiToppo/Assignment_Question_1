import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "../component/dropdown/Dropdown"; // Update the path to the Dropdown component

// Mock options for the Dropdown
const options = ["GBP", "USD", "JPY", "EUR", "AUD"];

// Create a Storybook story for the Dropdown component
storiesOf("Dropdown", module)
  .add("Default", () => (
    <Dropdown
      options={options}
      onChange={(e) => console.log("Selected:", e.target.value)}
      selectedItem={options[0]}
    />
  ));
