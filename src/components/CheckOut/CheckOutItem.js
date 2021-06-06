import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { CustomPrice } from "../../common/Customprice";
import useStyles from "./styleItem";
function CheckOutItem(props) {
  const { cartProduct } = props;
  const { quantity, cartItem, color, size } = cartProduct;
  const classes = useStyles();
  const totalMoney = (a, b) => {
    a = parseInt(a);
    b = parseInt(b);
    return a * b;
  };

  return (
    <TableRow classes={classes.row}>
      <TableCell className={classes.nameproduct}>
        <div className={classes.wrapAllNameSizeColor}>
          <div className={classes.wrapNameImg}>
            {cartItem?.name}
            <img className={classes.img} src={cartItem?.mainImg} alt="no" />
          </div>
          <div className={classes.colorSize}>
            <span className={classes.mau}>{color}</span>
            <div
              style={{ background: color }}
              className={classes.tuongTrungMau}
            ></div>
            <span className={classes.mau}>Size : {size}</span>
          </div>
        </div>
      </TableCell>
      <TableCell>{CustomPrice(cartItem?.realPrice)}</TableCell>
      <TableCell align="left">
        <div className={classes.columnprice}>{quantity}</div>
      </TableCell>
      <TableCell>
        {CustomPrice(totalMoney(quantity, cartItem?.realPrice))}
      </TableCell>
    </TableRow>
  );
}

export default CheckOutItem;
