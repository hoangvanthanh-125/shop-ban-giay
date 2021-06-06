import AutorenewIcon from "@material-ui/icons/Autorenew";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import PaymentIcon from "@material-ui/icons/Payment";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import CarouselCpn from "../CarouselCpn/CarouselCpn";
import Sanphamnoibat from "../Sanphamnoibat/Sanphamnoibat";
import SanphamSale from "../SanphamSale/SanphamSale";
import "./Home.css";

function Home(props) {
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="imageBgr">
        <CarouselCpn />
      </div>
      <div className="DichvuShop">
        <div className="buttonDichVuShop" disabled>
          <LocalShippingIcon /> <span>Miễn phí vận chuyển</span>
        </div>
        <div className="buttonDichVuShop" disabled>
          <PaymentIcon />
          <span>Thanh toán bảo đảm</span>
        </div>
        <div className="buttonDichVuShop" disabled>
          <AutorenewIcon /> <span>Đổi trả miễn phí</span>
        </div>
        <div className="buttonDichVuShop" disabled>
          <WatchLaterIcon />
          <span>Hỗ trợ 24/7</span>
        </div>
      </div>
      <div className="allThuonghieu">
        <h1 style={{ margin: "auto", marginTop: 20 }}>Các thương hiệu</h1>
        <div className="listAnhThuonghieu">
          <img
            onClick={() => history.push("/hanggiay/Adidas")}
            className="imgthuonghieu"
            src="https://static.wixstatic.com/media/894dd5_1c6d130c1d0e4852ab01a9010c00a314~mv2.jpg/v1/crop/x_238,y_0,w_964,h_964/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01/adidas-logo-black-background-wallpaper_j.webp"
            alt="loading"
          />
          <img
            onClick={() => history.push("/hanggiay/Nike")}
            className="imgthuonghieu"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0NobZrCstvqgvFa_92WAo8Ie4qnROInWqw&usqp=CAU"
            alt="loading"
          />
          <img
            onClick={() => history.push("/hanggiay/Vans")}
            className="imgthuonghieu"
            src="https://wallpaperaccess.com/full/889590.jpg"
            alt="loading"
          />
          <img
            onClick={() => history.push("/hanggiay/Balenciaga")}
            className="imgthuonghieu"
            src="https://i.pinimg.com/736x/63/95/9e/63959efa8ff4116f3f8bfe41e9b8293a.jpg"
            alt="loading"
          />
          <img
            onClick={() => history.push("/hanggiay/Jordan")}
            className="imgthuonghieu"
            src="https://c4.wallpaperflare.com/wallpaper/430/875/745/basketball-michael-jordan-wallpaper-preview.jpg"
            alt="loading"
          />
          <img
            className="imgthuonghieu"
            src="https://www.elleman.vn/wp-content/uploads/2018/08/08/logo-thuong-hieu-puma-elle-man-1.jpg"
            alt="loading"
          />
        </div>
      </div>
      <Sanphamnoibat />
      <SanphamSale />
    </div>
  );
}

export default Home;
