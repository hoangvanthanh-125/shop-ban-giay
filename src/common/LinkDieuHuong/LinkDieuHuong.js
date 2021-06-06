import React from 'react';
import {Link} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import './LinkDieuHuong.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function LinkDieuHuong(props) {
  const {color} = props;
  return (
    <div  className='linkDHWrap'>
           <div  className='LinkDieuHuong'>
             <HomeIcon style={{color:color}} className='linkDieuHuongIcon'/>
             <Link style={{color:color}}   className = 'linklinkDH'to='/'>Trang chủ</Link>
           </div>
            <ArrowForwardIosIcon style={{color:color}} className='iconngancach' />
           <div className='LinkDieuHuong'>
             <AppsIcon style={{color:color}} className='linkDieuHuongIcon'/>
             <Link style={{color:color}} className = 'linklinkDH' to='/products'>Sản phẩm</Link>
           </div>
     </div>
  );
}

export default LinkDieuHuong;