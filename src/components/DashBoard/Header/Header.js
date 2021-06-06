import { Avatar, List, ListItem, ListItemText } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { FBfetchCart } from "../../../actions/cart";
import { setTextSearch } from "../../../actions/search";
import { AsyncUser } from "../../../common/AsyncUser";
import thanhlogo from "./../../../acsset/image/thanhlogo.jpg";
import * as uiActions from "./../../../actions/ui";
import { USER_ROUTE } from "./../../../constant/router";
import "./Header.css";
import useStyles from "./style";
export default function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const listCart = useSelector((state) => state.cart.listCart);
  const [searchText, setSearchText] = useState("");
  const onChangeSearchtext = (e) => {
    setSearchText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText && searchText.trim().length > 0) {
      const promise = new Promise((resolve, reject) => {
        dispatch(setTextSearch(searchText));
        resolve();
      });
      promise.then(() => {
        history.push("/search");
      });
    }
  };
  var numberTotal = 99;
  if (typeof listCart !== "undefined") {
    numberTotal = listCart.reduce((total, item) => {
      return (total += parseInt(item.quantity));
    }, 0);
  }
  useEffect(() => {
    AsyncUser().then(() => {
      dispatch(FBfetchCart());
    });
  }, []);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const LogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        history.push("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const showCartLol = () => {
    if (!firebase.auth().currentUser) {
      history.push("/login");
    }
  };
  const clickToInfo = () => {
    if (firebase.auth().currentUser) {
      history.push("/info");
    } else history.push("/login");
  };
  function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact,
    });

    return (
      <div className={match ? classes.active : classes.hover}>
        <Link className={classes.link} to={to}>
          <ListItem button>
            <ListItemText className={classes.textLink} primary={label} />
          </ListItem>
        </Link>
      </div>
    );
  }

  const renderOption = () => {
    var xhtml = null;
    xhtml = (
      <List className={classes.list} component="ul">
        {USER_ROUTE.map((item, index) => {
          if (index < 4)
            return (
              <OldSchoolMenuLink
                key={item.path}
                activeOnlyWhenExact={item.exact}
                to={item.path}
                label={item.name}
              />
            );
        })}
      </List>
    );
    return xhtml;
  };

  const handleShowSideBar = () => {
    dispatch(uiActions.showSidebar());
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {!firebase.auth().currentUser && (
        <Link className={classes.link} to="/login">
          <MenuItem onClick={handleMenuClose}>Login</MenuItem>
        </Link>
      )}
      {firebase.auth().currentUser && (
        <MenuItem onClick={() => LogOut()}>LognOut</MenuItem>
      )}
      <Link onClick={() => clickToInfo()} className={classes.link}>
        <MenuItem style={{ color: "black" }}>Hồ sơ</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        variant="outlined"
        color="inherit"
        position="sticky"
        className={classes.appbar}
      >
        <Toolbar>
          <IconButton
            onClick={() => handleShowSideBar()}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Avatar
              style={{ cursor: "pointer" }}
              onClick={() => {
                history.push("/");
              }}
              className={classes.small}
              src={thanhlogo}
            />
          </Typography>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              history.push("/");
            }}
            className="nameshop"
          >
            Thành-Shop
          </div>
          <div className={classes.search}>
            <form onSubmit={onSubmit}>
              <input
                placeholder="Search"
                value={searchText}
                onChange={onChangeSearchtext}
                className="inputSearch"
                type="text"
              />
              <button className="buttonSearch" type="submit">
                <SearchIcon className="iconSeacrvh" />
              </button>
            </form>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {renderOption()}

            <IconButton
              onClick={() => showCartLol()}
              aria-label="show 4 new mails"
              color="default"
            >
              <Link to="/cart">
                <Badge badgeContent={numberTotal} color="secondary">
                  <div className="iconButtonCartIcon">
                    <ShoppingCartIcon className="cartIconHeader" />
                  </div>
                </Badge>
              </Link>
            </IconButton>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Link to="/cart">
                <Badge badgeContent={numberTotal} color="secondary">
                  <div className="iconButtonCartIcon">
                    <ShoppingCartIcon className="cartIconHeader" />
                  </div>
                </Badge>
              </Link>
            </IconButton>

            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              className={classes.moreIcon}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
