import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setvalueSort } from "../../../actions/filterPrice";
import useStyle from "./style";
import "./../../../container/ProductsContainer/prdctn.css";
function Sort(props) {
  const dispatch = useDispatch();
  const classes = useStyle();
  var [active, setActive] = useState(0);
  const onChangeSortValue = (e) => {
    setActive(e.target.value);
    dispatch(setvalueSort(e.target.value));
  };
  return (
    <div className="sortContianer">
      <select
        value={active}
        className={classes.select}
        onChange={onChangeSortValue}
      >
        <option className={classes.option} disabled value={0}>
          Sắp xếp theo
        </option>
        <option
          className={`${active == 1 ? classes.active : ""} ${classes.option}`}
          value={1}
        >
          Giá tăng dần{" "}
        </option>
        <option
          className={`${active == 2 ? classes.active : ""} ${classes.option}`}
          value={2}
        >
          Giá giảm dần
        </option>
      </select>
    </div>
  );
}

export default Sort;
