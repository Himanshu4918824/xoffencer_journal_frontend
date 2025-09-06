import { Paper} from "@mui/material";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";
import { useNavigate } from "react-router-dom";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function AllConference() {
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div>
        <div>
            <Header/>
        </div>
        
        <div style={{background: 'lightgrey',color:'black',width:'100%',height:250,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginBottom:40,textAlign:'center'}}>
            <div style={{ fontSize: '2.2rem', fontWeight: 500, letterSpacing: 1.2, textAlign: 'center' }}>All Conference</div>
        </div>

        <div style={{display:'flex',flexDirection:matches?'row':'column'}}>
           <Paper onClick={() => navigate("/conferencedetails")} elevation={3} style={{ width: matches?'30%' : '95%', height: matches?'50px' : 'auto', marginLeft: matches?'14%' : '2.5%', marginBottom: 40, borderRadius: 10, cursor: 'pointer' }}>
            <div style={{ fontSize:'1.5rem', fontWeight: 500, letterSpacing: 1.2, textAlign: 'center', paddingTop: 10 }}>Upcoming Conference</div>
           </Paper>

            <Paper onClick={() => navigate("")} elevation={3} style={{ width: matches?'30%' : '95%', height: matches?'50px' : 'auto', marginLeft: matches?'10%' : '2.5%', marginBottom: 40, borderRadius: 10 , cursor: 'pointer' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: 1.2, textAlign: 'center', paddingTop: 10 }}>Conducted Conference</div>
           </Paper>
        </div>

        <div>
          <Footer/>
        </div>
    
     
    </div>
  );
}