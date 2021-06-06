import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListNoiBat } from "../../actions/products";
import { Link } from "react-router-dom";
import "./Sanphamnoibat.css";
import SanphamnoibatItem from "./SanphamnoibatItem";
import Carousel from "react-elastic-carousel";
function Sanphamnoibat(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListNoiBat());
  }, []);

  const listNoiBat = useSelector((state) => state.products.listNoiBat);
  const renderListnoiBat = () => {
    let xhtml = <h6>Loading...</h6>;
    if (listNoiBat.length > 0) {
      xhtml = listNoiBat.map((item) => (
        <SanphamnoibatItem
          className="productNoiBatCss"
          key={item.id}
          product={item}
        />
      ));
    }
    return xhtml;
  };

  return (
    <div className="wrapSPNB">
      <h1 className="sanphamnb">Sản phẩm nổi bật</h1>
      <Link className="xemthemSPNB" to="/products">
        Xem thêm
      </Link>
      <Carousel breakPoints={breakPoints}>{renderListnoiBat()}</Carousel>
    </div>
  );
}

export default Sanphamnoibat;
