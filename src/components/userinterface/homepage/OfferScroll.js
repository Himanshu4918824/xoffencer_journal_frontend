import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function OfferScroll()
 {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

    var scrollRef=useRef();

    var data=['https://ohiostate.pressbooks.pub/app/uploads/sites/10/2017/11/ts-formats-copy-1024x767.png',

               'https://media.istockphoto.com/id/149217316/photo/science-publication.jpg?s=2048x2048&w=is&k=20&c=xar-aPy_n2WBluCAEVjjDhwcw95t38JmAWi26WiawBo=',
               
               'https://media.istockphoto.com/id/917929082/photo/businessman-hands-searching-unfinished-documents-stacks-of-paper-files-on-office-desk-for.jpg?s=2048x2048&w=is&k=20&c=YOd4qgYfVmGWmfsKZmM1AhMPIf4p3WAqllTgB_k_X-A=',

               'https://media.istockphoto.com/id/1445963231/photo/examining-the-financial-and-stock-market-data.jpg?s=2048x2048&w=is&k=20&c=fC_f2g3Q57PYCOl3_CWc_qO6Rcqk-E2r0DgJK_mWZ_I=',
               
               'https://open-access.network/fileadmin/_processed_/0/f/xcsm_10-Gruende-OA_Brinken_transparent-eng_415b270959.png.pagespeed.ic.ch7O9IDKzV.png',
               
               'https://media.istockphoto.com/id/490176010/photo/business-research.jpg?s=2048x2048&w=is&k=20&c=twcrmSrDmITdOzIdA8SrEYrp4SDFYpX3TRevmaqeUeM=',

               'https://images.freeimages.com/variants/GT8NiSsLVJzj1dXoKDG74zbo/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d?fmt=webp&h=350'
,
               '4.jpg'] 

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: matches?3:1,
    slidesToScroll: 1,
    autoplay:true
  };

  const showImages=()=>{
    return data.map((item,i)=>{
        return(<div style={{display:'flex',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
            <img alt="" src={item} style={{width:'90%',height:250,borderRadius:15}}/>
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