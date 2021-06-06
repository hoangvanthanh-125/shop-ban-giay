import React from "react";
import { Link } from "react-router-dom";
import "./OptionHeader.css";
const option = [
  {
    name: "Nike",
  },
  {
    name: "Adidas",
  },
  {
    name: "Jordan",
  },
  {
    name: "Vans",
  },
  {
    name: "Balenciaga",
  },
];
const renderOption = () => {
  let xhtml = null;
  if (option.length > 0) {
    xhtml = option.map((item) => {
      return (
        <Link
          className="linkOptionHeader"
          key={item.name}
          to={`/hanggiay/${item.name}`}
        >
          <span>{item.name}</span>
        </Link>
      );
    });
    return xhtml;
  }
};
function OptionHeader(props) {
  return <div className="optionHeader">{renderOption()}</div>;
}

export default OptionHeader;
