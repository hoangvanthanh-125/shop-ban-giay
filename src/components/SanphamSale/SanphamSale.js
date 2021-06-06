import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListSale } from "../../actions/products";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import SanphamnoibatItem from "../Sanphamnoibat/SanphamnoibatItem";
function SanphamSale(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListSale());
  }, []);

  const listSale = useSelector((state) => state.products.listSale);

  const renderlistSale = () => {
    let xhtml = <h6>Loading...</h6>;
    if (listSale.length > 0) {
      xhtml = listSale.map((item, index) => (
        <SanphamnoibatItem key={index} product={item} />
      ));
    }
    return xhtml;
  };

  return (
    <div className="wrapSPNB">
      <h1 className="sanphamnb">Đang khuyến mãi</h1>
      <Link className="xemthemSPNB" to="/products">
        Xem thêm
      </Link>
      <Carousel breakPoints={breakPoints}>{renderlistSale()}</Carousel>
    </div>
  );
}

export default SanphamSale;
