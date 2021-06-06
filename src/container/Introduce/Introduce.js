import React, { useEffect } from 'react';
import './intro.css'
function Introduce(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <div className ='wrapIntro'>
    <h1>GIỚI THIỆU</h1>
    <hr />
    <p>
    Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.
    </p>
    <ul>
      <li>
      Bạn là ai
      </li>
      <li>
      Giá trị kinh doanh của bạn là gì
      </li>
      <li>
      Địa chỉ cửa hàng
      </li>
      <li>
      Bạn đã kinh doanh trong ngành hàng này bao lâu rồi
      </li>
      <li>
      Bạn kinh doanh ngành hàng online được bao lâu
      </li>
      <li>
      Đội ngũ của bạn gồm những ai
      </li>
    </ul>
    </div>
  );
}

export default Introduce;
// import React, {Component} from 'react';
// import L from 'leaflet';
// import { Map, TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
// import leafGreen from './assets/leaf-green.png';
// import leafRed from './assets/leaf-red.png';
// import leafOrange from './assets/leaf-orange.png';
// import leafShadow from './assets/leaf-shadow.png';



// class Introduce extends Component {
  
//   state = {
//     greenIcon: {
//       lat: 35.787449,
//       lng: -78.6438197,
//     },
//     redIcon: {
//       lat: 35.774416,
//       lng: -78.633271,
//     },
//     orangeIcon: {
//       lat: 35.772790,
//       lng: -78.652305,
//     },
//     zoom: 13
//   }


//   grenIcon = L.icon({
//     iconUrl: 'leafGreen',
//     shadowUrl: 'https://raw.githubusercontent.com/ruvictor/leaflet-reactjs/master/src/assets/leaf-orange.png',
//     iconSize:     [38, 95], // size of the icon
//     shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor:  [-3, -76]
//   });

//   redIcon = L.icon({
//     iconUrl: 'https://raw.githubusercontent.com/ruvictor/leaflet-reactjs/master/src/assets/leaf-orange.png',
//     shadowUrl: 'https://raw.githubusercontent.com/ruvictor/leaflet-reactjs/master/src/assets/leaf-orange.png',
//     iconSize:     [38, 95], // size of the icon
//     shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor:  [-3, -86]
//   });

//   orangeIcon = L.icon({
//     iconUrl: 'https://raw.githubusercontent.com/ruvictor/leaflet-reactjs/master/src/assets/leaf-orange.png',
//     shadowUrl: 'https://raw.githubusercontent.com/ruvictor/leaflet-reactjs/master/src/assets/leaf-orange.png',
//     iconSize:     [38, 95], // size of the icon
//     shadowSize:   [50, 64], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor:  [-3, -86]
//   });

//   render(){
//     const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
//     const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
//     const positionOrangeIcon = [this.state.orangeIcon.lat, this.state.orangeIcon.lng];
//     return (
//       <MapContainer className="map" center={positionGreenIcon} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={positionGreenIcon} icon={this.grenIcon}>
//           <Popup>
//           I am a green leaf
//           </Popup>
//         </Marker>
//         <Marker position={positionRedIcon} icon={this.redIcon}>
//           <Popup>
//           I am a red leaf
//           </Popup>
//         </Marker>
//         <Marker position={positionOrangeIcon} icon={this.orangeIcon}>
//           <Popup>
//           I am an orange leaf
//           </Popup>
//         </Marker>
//       </MapContainer>
//     );
//   }
// }

// export default Introduce;