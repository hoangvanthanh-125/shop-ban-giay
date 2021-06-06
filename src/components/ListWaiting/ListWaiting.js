import React from "react";
import { useSelector } from "react-redux";
import Emptycart from "../../common/EmptyCart/Emptycart";
import CartItem from "../Cart/CartItem/CartItem";
import useStyle from "./style";
const keyRandom = () => {
  return Math.random() * 100000000;
};

function ListWaiting(props) {
  const classes = useStyle();
  const listWaiting = useSelector((state) => state.cart.listWaiting);
  const renderListCheckOut = () => {
    let xhtml;
    if (listWaiting.length > 0) {
      xhtml = listWaiting.map((item) => {
        return (
          <CartItem
            waiting={true}
            key={`${item.cartItem.id}-${keyRandom()}`}
            cartProduct={item}
          />
        );
      });
    }
    return xhtml;
  };
  return listWaiting.length > 0 ? (
    <div className={classes.wrapdonhangdanggiao}>
      <h4 className={classes.title}>Đơn hàng đang giao</h4>
      <div className={classes.danggiao}>{renderListCheckOut()}</div>
    </div>
  ) : (
    <Emptycart />
  );
}

export default ListWaiting;
