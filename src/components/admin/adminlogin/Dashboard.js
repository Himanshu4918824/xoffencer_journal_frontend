

import { Divider, Grid, Paper, Link } from '@mui/material';

import Footer from '../../userinterface/homepage/Footer';
import Header from '../../userinterface/homepage/Header';
// import UploadJournalForm from './UploadJournalForm';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  },[])


  return (
    <div>

      <div>
        <Header />
      </div>

      <div>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          {matches ? <Grid item xs={2.5} style={{}}>

            <Paper elevation={4} style={{ height: '85vh', borderRadius: 5, margin: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div>
                <img src={`rajput.jpg`} alt="Logo" style={{ width: 100, height: 100, borderRadius: 50, marginTop: 10 }} />
              </div>

              <div style={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 1.2 }}>
                Varsha Rajput
              </div>

              <div style={{ fontSize: 12, letterSpacing: 1.2, marginBottom: 10 }}>
                editor@varsharesearchorganization.com
              </div>

              <Divider width='90%' />

               <div style={{marginTop:20,fontSize:18,fontWeight:600, cursor:'pointer'}}>
                <Link style={{textDecoration:'none',color:'black'}} href="/uploadjournalform" target="nw">Add Journal</Link>
              </div>

              <div style={{marginTop:20,fontSize:18,fontWeight:600, cursor:'pointer'}}>
                <Link style={{textDecoration:'none',color:'black'}} href="/delete" target="nw">Delete Journal</Link>
              </div>

              <div style={{marginTop:20,fontSize:18,fontWeight:600, cursor:'pointer'}}>
                <Link style={{textDecoration:'none',color:'black'}} href="/upcommingconferenceform" target="nw">Add Upcomming Conference</Link>
              </div>



            </Paper>

          </Grid> : null}

          <Grid item xs={matches ? 9.5 : 12}>
           <div style={{display: 'flex',marginTop: '10px'}}>
                    <iframe width="1200" height="1050" name="nw" frameborder="0"></iframe>
            </div>

          </Grid>

        </Grid>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}
