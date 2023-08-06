import Dropdown from "../component/dropdown/Dropdown"; 
import React from "react";
import { storiesOf } from "@storybook/react";

export default {
    title: "Dropdown",
    Comment: Dropdown,
};

const options = ["GBP", "USD", "JPY", "EUR", "AUD"];

storiesOf("Dropdown", module)
  .add("Default", () => (
    <Dropdown
      options={options}
      onChange={(e) => console.log("Selected:", e.target.value)}
      selectedItem={options[0]}
    />
  ));

