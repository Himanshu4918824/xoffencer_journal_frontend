import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function OfferScroll()
 {
  var scrollRef=useRef();

   var data=['3.png','5.jpg','7.webp','6.jpeg','3.webp','1.webp','2.webp','4.jpg'] 

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true
  };

  const showImages=()=>{
    return data.map((item,i)=>{
        return(<div>
            <img src={item} style={{width:'90%',height:250,borderRadius:15}}/>
        </div>)
    })

}

const handleNext=()=>{
  scrollRef.current.slickNext()
}

const handlePrev=()=>{
  scrollRef.current.slickPrev()
}


return(<div style={{position:'relative'}}>

  <div onClick={handlePrev} style={{cursor:'pointer',position:'absolute',zIndex:2,top:'44%',left:'0.8%',background:'#000',width:20,height:20,borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>

    <KeyboardArrowLeftIcon style={{color:'#fff'}}/>
    </div> 

        <Slider ref={scrollRef} {...settings}>

        {showImages()}

        </Slider>

       <div onClick={handleNext} style={{cursor:'pointer',position:'absolute',zIndex:2,top:'44%',right:'4%',background:'#000',width:20,height:20,borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>

          <KeyboardArrowRightIcon style={{color:'#fff'}}/>
        </div>
     

  </div>)
}