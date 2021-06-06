import { Grid } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
function Footer(props) {
  return (
    <div className="footerCss">
      <div className="listLogo">
        <img
          src="https://static.wixstatic.com/media/894dd5_1c6d130c1d0e4852ab01a9010c00a314~mv2.jpg/v1/crop/x_238,y_0,w_964,h_964/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01/adidas-logo-black-background-wallpaper_j.webp"
          alt="loading"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0NobZrCstvqgvFa_92WAo8Ie4qnROInWqw&usqp=CAU"
          alt="loading"
        />
        <img src="https://wallpaperaccess.com/full/889590.jpg" alt="loading" />
        <img
          src="https://i.pinimg.com/736x/63/95/9e/63959efa8ff4116f3f8bfe41e9b8293a.jpg"
          alt="loading"
        />
        <img
          src="https://c4.wallpaperflare.com/wallpaper/430/875/745/basketball-michael-jordan-wallpaper-preview.jpg"
          alt="loading"
        />
      </div>
      <Grid
        style={{ marginTop: 20 }}
        className="listTitleContact"
        container
        justify="center"
      >
        <Grid className="gridItemFooter" sm={4} md={4} xs={4} item>
          <h3>Hệ thống cửa hàng</h3>
          <p>Địa chỉ: Ngõ 105 Doãn Kế Thiện</p>
          <p>Số điện thoại:012345678</p>
          <p>Email: hihi@gmail.com</p>
        </Grid>
        <Grid className="gridItemFooter" sm={4} md={4} xs={4} item>
          <h3>Giờ mở cửa</h3>
          <p>
            Từ 8:00 - 22:00 tất cả các ngày trong tuần (bao gồm cả các ngày lễ,
            ngày Tết).
          </p>
        </Grid>
        <Grid className="gridItemFooter" sm={4} md={4} xs={4} item>
          <h3>Liên hệ trực tuyến</h3>
          <FacebookIcon className="iconFb" />
          <InstagramIcon className="iconInsta" />
          <TwitterIcon className="iconTW" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
