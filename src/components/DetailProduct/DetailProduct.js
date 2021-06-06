import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import cn from "classnames";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import SwipeableViews from "react-swipeable-views";
import { CustomPrice } from "../../common/Customprice";
import { ToastFunc } from "../../common/ToasFunc";
import Comments from "../Comments/Comments";
import SanPhamTuongTu from "../SanPhamTuongTu/SanPhamTuongTu";
import * as cartActions from "./../../actions/cart";
import * as productActions from "./../../actions/products";
import Loading from "./../../common/loading/Loading";
import TabPanel from "./../../common/TabPanel/TabPenal";
import useStyles from "./style";
function DetailProduct(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(productActions.fetchProduct(id));
    return () => {
      dispatch(productActions.fetchProductSuccess(null));
    };
  }, [id]);
  var currenProduct = useSelector((state) => state.products.currentProduct);

  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const listSize = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  const listColor = ["red", "black", "white", "blue", "yellow", "green"];
  const [open, setOpen] = React.useState(false);
  var mainImg = null,
    listImg = [],
    name = null,
    description = null,
    price = null,
    sale = null,
    priceSale;

  if (currenProduct) {
    mainImg = currenProduct.data().mainImg;
    listImg = currenProduct.data().listImg;
    // console.log(listImg);
    name = currenProduct.data().name;
    description = currenProduct.data().description;
    price = currenProduct.data().price;
    sale = parseInt(currenProduct.data().sale);
    priceSale = Math.trunc(price - (price * sale) / 100);
  }

  var [mainImage, setMainImage] = useState(mainImg);
  var newListImg = listImg?.concat([mainImg]);
  const randomKey = () => {
    var a = Math.random() * 10000000000;
    return a;
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeImg = (img) => {
    setMainImage(img);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const clickCheckOut = () => {
    if (firebase.auth().currentUser) {
      if (!size && !color) {
        ToastFunc(new Error("Vui lòng chọn màu và size"));
      } else if (!size) {
        ToastFunc(new Error("Vui lòng chọn size"));
      } else if (!color) {
        ToastFunc(new Error("Vui lòng chọn màu"));
      } else {
        const newProduct = {
          ...currenProduct.data(),
          id: currenProduct.id,
        };
        dispatch(
          cartActions.FBsetListCheckOut([
            {
              cartItem: newProduct,
              quantity: 1,
              color: color,
              size: size,
            },
          ])
        );
        history.push("/thanh-toan");
      }
    } else {
      history.push("/login");
    }
  };

  const renderListImage = () => {
    let xhtml = null;
    if (listImg?.length > 0) {
      xhtml = listImg.map((img) => {
        if (img !== null)
          return (
            <img
              key={randomKey()}
              onClick={() => handleChangeImg(img)}
              className={cn(classes.imageIcon, {
                [classes.active]: img === mainImage,
              })}
              src={img}
              alt="noImage"
            />
          );
      });
    }
    return xhtml;
  };
  const addToCart = () => {
    if (firebase.auth().currentUser) {
      if (!size && !color) {
        ToastFunc(new Error("Vui lòng chọn màu và size"));
      } else if (!size) {
        ToastFunc(new Error("Vui lòng chọn size"));
      } else if (!color) {
        ToastFunc(new Error("Vui lòng chọn màu"));
      } else {
        dispatch(
          cartActions.addCart({
            cartItem: currenProduct,
            quantity: 1,
            size,
            color,
          })
        );
      }
    } else {
      history.push("/login");
    }
  };

  const renderListSize = () => {
    let xhtml = null;
    xhtml = listSize.map((item) => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ));
    return xhtml;
  };
  const renderListColor = () => {
    let xhtml = null;
    xhtml = listColor.map((item) => (
      <div
        onClick={() => {
          setColor(item);
        }}
        className={`${classes.itemColor} ${
          color === item ? classes.activeColor : classes.noActive
        }`}
        style={{ background: item }}
        key={item}
      ></div>
    ));
    return xhtml;
  };

  const handleChange1 = (event) => {
    setSize(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const setCurrentImage = (number) => {
    const index = newListImg.findIndex((item) => item === mainImage);
    if (index + 1 < newListImg.length || index - 1 >= 0) {
      setMainImage(newListImg[index + number]);
    }
  };

  return currenProduct ? (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.wrapper}
    >
      <Grid item md={6} xs={12} sm={12} className={classes.allImage}>
        <div className={classes.wrapMainImage}>
          <IconButton
            onClick={() => setCurrentImage(1)}
            className={classes.IconButton}
          >
            <NavigateNextIcon />
          </IconButton>
          <IconButton
            onClick={() => setCurrentImage(-1)}
            className={classes.IconButtonleft}
          >
            <ArrowBackIosIcon style={{ fontSize: "14px" }} />
          </IconButton>
          <img
            id="mainImgId"
            className={`${classes.mainImg}`}
            src={mainImage ? mainImage : mainImg}
            alt="Loading"
          />
        </div>

        <div style={{ marginTop: 6 }} className={classes.listImg}>
          {renderListImage()}
        </div>
      </Grid>
      <Grid item sm={12} md={6} xs={12} className={classes.action}>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <Typography component={"span"} variant="h2">
              {name}
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
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
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Button
              onClick={() => clickCheckOut()}
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Mua ngay
            </Button>
            <Button
              onClick={() => addToCart()}
              className={classes.button}
              variant="outlined"
              color="secondary"
            >
              Thêm vào giỏ hàng
            </Button>
          </Grid>
          <Grid item sm={12} xs={12} md={12}>
            <div className={classes.intro}>
              <div className={classes.wrapSelectColor}>
                <h5 style={{ marginBottom: 10 }}>Chọn màu sắc</h5>
                <div className={classes.wrapColor}>{renderListColor()}</div>
              </div>
              <h5>Chọn size</h5>
              <FormControl
                style={{ minWidth: 120 }}
                className={classes.formControl}
              >
                <InputLabel id="demo-controlled-open-select-label">
                  Size
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={size}
                  onChange={handleChange1}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {renderListSize()}
                </Select>
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Mô tả" />
          <Tab label="Cách chọn size giày" />
        </Tabs>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Typography component={"span"} variant="h6">
              {description}
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Typography component={"span"} variant="body1">
              Để chọn size giày phù hợp với chân của mình, bạn có thể làm theo
              cách sau:
            </Typography>
            <Typography component={"span"} variant="body1">
              <strong> Bước 1</strong>: Đo chiều dài bàn chân theo huớng dẫn ở
              hình dưới:
              <img
                className={classes.imgsize}
                src="https://shopgiayreplica.com/wp-content/uploads/2018/07/cach-chon-size-giay-nike-adidas-1.jpg"
                alt="Loading..."
              />
            </Typography>
            <Typography component={"div"} variant="body1">
              <strong>Bước 2</strong>: Sau khi đo được chiều dài bàn chân, bạn
              có thể đối chiếu với bảng size giày dưới để chọn được size giày
              phù hợp cho mình. Ví dụ chiều dài bàn chân là 26.5cm thì size giày
              nam Adidas phù hợp là 42.
            </Typography>

            <img
              className={classes.imgsize}
              src="https://shopgiayreplica.com/wp-content/uploads/2018/07/cach-chon-size-giay-nike-adidas-3.jpg"
              alt="Loading..."
            />
            <img
              className={classes.imgsize}
              src="https://shopgiayreplica.com/wp-content/uploads/2018/07/cach-chon-size-giay-nike-adidas-2.jpg"
              alt="Loading..."
            />
          </TabPanel>
        </SwipeableViews>
      </Grid>
      <Grid item sm={12} md={12} xs={12}>
        <Comments />
      </Grid>
      <Grid>
        <SanPhamTuongTu type={currenProduct?.data().type} />
      </Grid>
    </Grid>
  ) : (
    <Loading />
  );
}

export default DetailProduct;
