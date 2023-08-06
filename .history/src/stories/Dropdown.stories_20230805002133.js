import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import Dropdown from "../component/dropdown/Dropdown"; 

const options = ["GBP", "USD", "JPY", "EUR", "AUD"];


storiesOf("Dropdown", module)
  .addDecorator(withKnobs) 
  .add("Default", () => (
    <Dropdown
      options={options}
      onChange={(e) => console.log("Selected:", e.target.value)}
      selectedItem={select("Selected Item", options, options[0])} 
    />
  ));
