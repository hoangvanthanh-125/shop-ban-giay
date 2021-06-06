import { Card, CardActions, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./style";
import "./Sanphamnoibat.css";
import { CustomPrice } from "../../common/Customprice";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
function SanphamnoibatItem(props) {
  const keyRandom = () => {
    return Math.random() * 100000000;
  };
  const { product } = props;
  var { mainImg, name, price, sale, starTb } = product?.data();
  starTb = Math.round(starTb);
  const { id } = product;
  const classes = useStyles();
  price = parseInt(price);
  const priceSale = Math.trunc(price - (price * sale) / 100);
  let listStar = [];
  if (starTb > 0) {
    for (let i = 0; i < starTb; i++) {
      listStar.push(
        <StarIcon
          className="starQuantityCss"
          key={keyRandom()}
          style={{ color: "#fed330" }}
        />
      );
    }
    for (let i = starTb; i < 5; i++) {
      listStar.push(
        <StarBorderIcon
          className="starQuantityCss"
          key={keyRandom()}
          style={{ color: "#fed330" }}
        />
      );
    }
  }

  return (
    <Link className={classes.link} to={`/product/${id}/${name}`}>
      <Card variant="outlined" className="CardsanphamNoiBatCss">
        <div
          style={{ backgroundImage: `url(${mainImg})` }}
          className={classes.background}
        ></div>
        {sale > 0 && <div className={classes.sale}>-{sale}%</div>}
        {starTb > 0 ? (
          <div className="starTbCSS">{listStar}</div>
        ) : (
          <span className="chuacodanhgia">Chưa có đánh giá nào</span>
        )}
        <CardActions className={classes.CardActions}>
          <Typography
            className={classes.nameproduct}
            align="center"
            variant="body1"
          >
            {name}
          </Typography>

          <Typography color="inherit" align="center" variant="subtitle1">
            <span
              className={`${sale > 0 ? classes.salePrice : "ds"} ${
                classes.priceCl
              }`}
            >
              {CustomPrice(price)} <span className={classes.donvi}>đ</span>
            </span>{" "}
            {sale > 0 && (
              <span className={classes.price}>
                {CustomPrice(priceSale)}{" "}
                <span className={classes.donvi}>đ</span>{" "}
              </span>
            )}
          </Typography>
        </CardActions>
      </Card>
    </Link>
  );
}

export default SanphamnoibatItem;
