import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setMinMaxPrice } from "../../actions/filterPrice";
import { ToastFunc } from "../../common/ToasFunc";
import "./FilterCpn.css";

function FilterCpn(props) {
  const [min, setMin] = useState("");
  const [max, setmax] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.name === "min") {
      setMin(e.target.value);
    } else setmax(e.target.value);
  };
  const handleClickFilter = (e) => {
    if (!min || !max) {
      ToastFunc(new Error("Vui lòng nhập đầy đủ thông tin"));
    } else if (
      !Number.isInteger(parseInt(min)) ||
      !Number.isInteger(parseInt(max))
    ) {
      ToastFunc(new Error("Vui lòng nhập đúng định dạng"));
    } else if (min && max) {
      dispatch(setMinMaxPrice(parseInt(min), parseInt(max)));
    }
  };
  const handleChangeHuyLoc = () => {
    dispatch(setMinMaxPrice("", ""));
  };
  return (
    <div className="filter">
      <div className="inputMinMax">
        <div>
          <label htmlFor="minPrice">Từ</label>
          <input
            value={min}
            onChange={handleChange}
            className="min-max"
            placeholder="min"
            name="min"
            type="text"
          />
          <label>Đến</label>
          <input
            value={max}
            onChange={handleChange}
            className="min-max"
            placeholder="max"
            name="max"
            type="text"
          />
        </div>
        <div className="wrapButtonFilter">
          <button onClick={() => handleClickFilter()} className="button-filter">
            Lọc
          </button>
          <button
            className="button-filter button-filter-2"
            onClick={() => handleChangeHuyLoc()}
          >
            Bỏ Lọc
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterCpn;
