import Dropdown from "../component/dropdown/Dropdown"; 
import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";

export default {
    title: "Dropdown",
    Comment: Dropdown,
};

const options = ["GBP", "USD", "JPY", "EUR", "AUD"];

storiesOf("Dropdown", module)
  .addDecorator(withKnobs) // Add the withKnobs decorator
  .addParameters({ component: Dropdown }) // Define the component for controls
  .add("Default", () => (
    <Dropdown
      options={options}
      onChange={(e) => console.log("Selected:", e.target.value)}
      selectedItem={select("Selected Item", options, options[0])} // Define a control for selectedItem prop
    />
  ));
