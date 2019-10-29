//======================================================================//
import React from "react";
//======================================================================//
const PhotoGrid = ({ place }) => (
  <div style={{position:"relative", left:'20%'}}>
    <img
      alt="sihgts"
      style={{ width: "300px", height: "400px", padding: "10px",  opacity: '0.7'
    }}
      src={place.photosUrl}
    />
    <div style={{borderRadius:"50%",textAlign:"center",width:"90px",height:"60px",bottom:'40px',left:"120px",position:'absolute',backgroundColor:'white',color:'black'}}>
      <br/> <strong style={{disply:"inline-block"}}>{place.name}</strong>
      </div>
  </div>
);

export default PhotoGrid;
