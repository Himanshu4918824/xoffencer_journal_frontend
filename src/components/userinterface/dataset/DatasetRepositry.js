import { Divider } from "@mui/material";
import Footer from "../homepage/Footer";
import Header from "../homepage/Header";

export default function DatasetRepositry()
{
    //background:'#576574'
    return(<div>
        <div>
            <Header/>
        </div>
        
        <div style={{background: 'lightgrey',color:'black',width:'100%',height:250,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginBottom:40}}> 

           <div style={{fontSize:'2.2rem',fontWeight:500,letterSpacing:1.2,textAlign:'center'}}>DATASET RESPOSITRY</div>
           
       </div>

       <Divider style={{marginTop:40}}/>

       <div style={{marginTop:80}}>
        <Footer/>
       </div>
            
    </div>)
}

        