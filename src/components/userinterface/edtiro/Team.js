import React from 'react';
import Footer from "../homepage/Footer";
import Header from "../homepage/Header";
import dev from '../../../assets/dev.jpg';
import devand from '../../../assets/devand.jpg';
import atul from '../../../assets/atul.jpg';
import shambu from '../../../assets/shambu.jpg';
import dee from '../../../assets/dee.jpg';
import sand from '../../../assets/sand.jpg';
import ram from '../../../assets/ram.jpg';
import vineeta from '../../../assets/vineeta.jpeg';
import maya from '../../../assets/maya.jpg';
import { Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Team() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md')); // Check if screen width is medium or larger

  const data = [
    { sno: 1, name: 'Dr. Dev Brat Mishra', edu:'Senior Assistant Professor, M.Sc., Ph.D., FZSI., FHAS., FSLSc., FGESA., FBPS., FABRF., FIAES., FIASR., FCRSD., PGDBM., CES.,CCY.', dept:'Deptt.Of Zoology', add:'Tilak Dhari Post Graduate Collage, Janupur.', pic: dev, email: 'editor.devbrat@varsharesearchorganization.com' },
    { sno: 2, name: 'Dr. Atul Kumar Tiwari', edu:' Head of Department- Zoology', dept:'Dr. B.S.Porte Govt.College Pendra Chhattisgarh-495119', pic: atul, email: 'editor.atul@varsharesearchorganization.com' },
   // { sno: 3, name: 'Dr. Rajesh Kumar Jha, Associate Professor in MBA, Dr.D.Y.Patil Institute of Management and Enterprenure Development. ,Pune', pic: Rajesh, email: '' },
   { sno: 3, name: 'Dr.Sandhya Pandey', edu:'Assistant Professor, M.Sc., Ph.D., FCRSD, Deptt.Of Zoology', dept:'PPN Post Graduate Collage, Kanpur', pic: sand, email: 'editor.drsandhya@varsharesearchorganization.com' },
   // { sno: 4, name: 'Dr.Manoj Kumar Vats', edu:'Head of Deptt. Sociology', dept:'R.S.K. D. Post Graduate Collage, Janupur 222002 ', pic: manoj, email: 'editor.manojvats@varsharesearchorganization.com' },
    { sno: 4, name: 'Dr Deephand Dhankher',edu:'Assistant Professor of Seamanship', dept:'Tolani Maritime Institute, Pune, India' , pic: dee, email: 'editor.drdeepand@varsharesearchorganization.com' },
    { sno: 5, name: 'Dr. Shambhu Nivrutti Waghule', edu:'HOD, And Advanced Accounting, IT, M.Com, Ph.D.', dept:'Dr.B.A.M. University, Aurangabad', pic: shambu, email: 'editor.drshambhu@varsharesearchorganization.com' },
    { sno: 6, name: 'Dr. Devender Kumar Gupta', edu:'President of Aggarwal Collage', dept:'', pic: devand, email: 'editor.drdevender@varsharesearchorganization.com' },

    { sno: 7, name: 'Dr. Vineeta Dixit', edu:'HOD, Department of Botany', dept:'SSJSN College Garhwa 822114 ,Jharkhand', pic: vineeta, email: 'editor.drvineeta@varsharesearchorganization.com' },
    { sno: 8, name: 'Professor Ram Kinkar Pandey', edu:'Principal,Government Lahiri Post Graduate College', add:'Chirmiri District – Manendragarh – Chirmiri – Bharatpur Chhattisgarh', pic: ram, email: 'editor.ramkinker@varsharesearchorganization.com' },
    { sno: 9, name: 'Maya Mishra', edu:'Assistant Professor B.Ed. Department', add:' Government Teacher Education College, Rewa', pic: maya, email: 'editor.mayamishra@varsharesearchorganization.com' },
  ];

  const showImage = () => {
    return data.map((item, i) => (
      <Grid container spacing={2} style={{ border: '2px solid #ececec', marginBottom: 20, padding: 10, borderRadius: 10}}>
        <Grid item xs={12} md={1} style={{ textAlign: 'center', marginTop: matches ? 10 : 0 }}>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            {item.sno}.
          </Typography>
        </Grid>

        <Grid item xs={12} md={5} style={{ marginTop: matches ? 10 : 0 }}>
          <Typography variant="body1" style={{ fontWeight: 'bold', color: '#333' }}>
            <p style={{fontSize:20}}>{item.name}</p>
            <p style={{fontSize:17.5,fontWeight:550}}>{item.edu}</p>
            <p style={{fontSize:16}}>{item.dept}</p>
            <p style={{fontSize:16}}>{item.add}</p>
          </Typography>
        </Grid>

        <Grid item xs={12} md={4} style={{ textAlign: matches ? 'left' : 'center', marginTop: matches ? 10 : 20 }}>
          <Typography variant="body2" style={{ color: '#555', wordWrap: 'break-word', textAlign: matches ? 'left' : 'center'}} >
            {item.email}
          </Typography>
        </Grid>

        <Grid item xs={12} md={2} style={{ textAlign: 'center' }}>
          <img alt=""  src={item.pic} style={{width: matches ? 150 : 100, height: matches ? 150 : 100, borderRadius: '50%', objectFit: 'cover' }}/>
        </Grid>
      </Grid>
    ));
  };

  return (
    <div>
      <Header />

     
      <div style={{ background: 'lightgrey', color: 'black', width: '100%', height: 250, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center',}} >
        <Typography variant="h3" style={{ fontWeight: 500, letterSpacing: 1.2 }}>
          EDITORIAL BOARD
        </Typography>
      </div>

      
      <div style={{ margin: 20, padding: 20 }}>
        <Typography variant="h5" style={{ fontWeight: 500, color: '#8395a7', marginBottom: 5 }}>
          Editor in Chief
        </Typography>
        <Typography variant="body1" style={{ marginBottom: 10 }}>
          <p style={{fontSize:20,fontWeight:'bold'}}>Varsha Rajput</p> <p style={{fontSize:18,fontWeight:540}}>Architect B.Arc., B.Tech.(Civil Engineering) [MPCT Gwalior ] Chief Executive Officer</p>
          <p style={{wordWrap: 'break-word',marginTop:5}}>editor@varsharesearchorganization.com</p>
        </Typography>

        <Typography variant="h5" style={{ fontWeight: 500, color: '#8395a7',  marginTop: 20, marginBottom:20 }}>
          Editorial Board
        </Typography>
        <div>{showImage()}</div>

        <Typography variant="h5" style={{ fontWeight: 500, color: '#8395a7', marginBottom: 5, marginTop: 20 }}>
          Reviewer
        </Typography>
        <ol style={{ marginLeft: 30}}>
          <li style={{ marginBottom: 5 }}>Nisha Mishra, MA., (Sociology)B.Ed., FCRSD., Head Mistress ,PS Hakaripur, Jaunpur .U.P.</li>
          <li style={{ marginBottom: 5 }}>DR Poonam Gaur, Associate Professor, School of Education ,Lingaya&#39;S Vidhyapeeth, Faridabad, NCR</li>
          <li style={{ marginBottom: 5 }}>Dr Ranajit Kumar Prajapati , teacher in commerce ,Govt.middle school mohababazar kota raipur, Chhattisgarh</li>
          <li style={{ marginBottom: 5 }}>Dr. Neeru Gupta , Assistant professor ,Deppt. Of law, IIMT College, greater Noida</li>
          <li style={{ marginBottom: 5 }}>Dr. Mahmood Khan, Assistant professor SCERT, Delhi</li>
          <li style={{ marginBottom: 5 }}>Dr.Ajay Kumar Chaubey ,HOD Zoology Govt.college Ghodadongri Betul,M.P</li>
          <li style={{ marginBottom: 5 }}>VIDYADHARA D, Assistant Professor, Department of Physics, Sharnbasva University, Kalaburagi</li>
          <li style={{ marginBottom: 5 }}>Dr. Varun Kumar, Lab Assistant, MDU Rohtak, Haryana</li>
          <li style={{ marginBottom: 5 }}>Dr Archna Singh, Assistant Professor, Faculty of law, university of lucknow</li>
        </ol>
      </div>

      <Footer />
    </div>
  );
}