import { Paper } from "@mui/material";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";

export default function NationalJournal()
{
    var data=[2022,2023,2024,2025,2026,2027]

    const showData=()=>{
        return data.map((item,i)=>{
            return(<div style={{margin:12,padding:10,marginLeft:80}}>
                <Paper elevation={9} style={{width:350,height:60,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{fontSize:22,fontWeight:600,color:'#576574'}}>{item}</div>   
                </Paper>
            </div>)
        })
    }


    return(<div>
       <div>
        <Header/>
       </div>

       <div style={{background: 'lightgrey',color:'black',width:'100%',height:250,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}> 

           <div style={{fontSize:'2.5rem',fontWeight:500,letterSpacing:1.2}}>NATIONAL JOURNAL</div>
            <div style={{fontSize:'1.1rem',fontWeight:400}}>Airo National Research Journal ISSN 2321-3914</div>
       </div>

       <div style={{display:'flex',flexWrap:'wrap',marginTop:30}}>
        {showData()}
       </div>

       <div>
        <Footer/>
       </div>

    </div>)
}