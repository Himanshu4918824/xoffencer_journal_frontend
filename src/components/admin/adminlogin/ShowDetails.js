import { Button } from "@mui/material";
import Header from "../../userinterface/homepage/Header";
import Footer from "../../userinterface/homepage/Footer";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function ShowDetails() {
  return (
    <div>
        <div>
            <Header/>
        </div>


        <div style={{marginTop: 40,fontSize: 24,fontWeight: 'bold',letterSpacing:0.5,width:'70%',height: '100%',textAlign:'center',marginLeft:'12%'}}>Promoting Judicial Acceptance of Electronic Evidence Through Structured Legal Reform</div>

        <div style={{marginTop:20,fontWeight: 400,fontSize:' 1.2rem',marginLeft:'7%',letterSpacing:0.3,marginRight:'7%'}}>
           <b>Author(S):</b> Navneet Kumar Bharti, Dr. Neeru Gupta
        </div>

        <div style={{marginTop:7,fontWeight: 400,fontSize:' 1.2rem',marginLeft:'7%',letterSpacing:0.3,marginRight:'7%'}}>
           <b>Publication #:</b> 2508021
        </div>

        <div style={{marginTop:7,fontWeight: 400,fontSize:' 1.2rem',marginLeft:'7%',letterSpacing:0.3,marginRight:'7%'}}>
           <b>Date of Publication:</b> 26.08.2025
        </div>

        <div style={{marginTop:7,fontWeight: 400,fontSize:' 1.2rem',marginLeft:'7%',letterSpacing:0.3,marginRight:'7%'}}>
           <b>Country:</b> India
        </div>

        <div style={{marginTop:7,fontWeight: 400,fontSize:' 1.2rem',marginLeft:'7%',letterSpacing:0.3,marginRight:'7%'}}>
           <b>Pages:</b> 1-7
        </div>

        <div style={{marginTop:7,fontWeight: 400,fontSize:' 1.2rem',marginLeft:'7%',letterSpacing:0.3,marginRight:'7%'}}>
           <b>Published In:</b> Volume 11 Issue 4 August-2025:
        </div>

        <div style={{marginTop:8,fontWeight: 400,fontSize:' 1.2rem',marginLeft:'7%',letterSpacing:0.3,marginRight:'7%'}}>
            <div style={{fontWeight: 600,marginBottom: 5}}>Abstract</div>
            <div style={{fontSize:16}}>Modern court processes cannot function without electronic evidence due to the growing dependence on digital technology. But procedural conservatism, judges' lack of technical knowledge, and the lack of consistent standards still make it difficult for Indian courts to accept such evidence, which means important evidence gets ignored and justice isn't served. If we want electronic evidence to be more trustworthy and admissible in court, this paper says we need a legal reform framework that strikes a compromise between formal protections and practical flexibility. Modifications to Section 65B of the Indian Evidence Act, investment in digital evidence examination units and other technological infrastructure, interdisciplinary collaboration among legal, technical, and policy experts, and judicial capacity building through targeted training are the five pillars that make up the proposed model. The goal of this reform paradigm is to make the judicial system more open, accountable, and efficient by fixing underlying problems. In order to guarantee that everyone has equal access to justice in our increasingly digital world, it is crucial to promote the acceptance of electronic evidence by the judiciary. This is not just a technological need, but also a democratic imperative. To strengthen the rule of law and safeguard the rights of victims who depend on electronic data for legal recourse, the report stresses the critical necessity of integrated reforms that provide courts with the knowledge and skills to handle the intricacies of digital evidence.</div>
        </div>

        <div style={{marginTop:20,fontWeight: 400,fontSize:' 1.2rem',marginLeft:'7%',letterSpacing:0.3,marginRight:'7%'}}>
            <span style={{fontWeight: 600,marginBottom: 5}}>Keywords:</span> <span style={{fontSize:17}}>Electronic Evidence, Indian Evidence Act, Judicial Reform, Digital Forensics, Legal Admissibility.</span>
        </div>



        <div style={{textAlign: "center", marginTop: 40,marginBottom:20}}>
         <Button variant="contained" color="primary">Download/View Paper PDF</Button>
        </div>

        <div style={{marginTop:50,fontWeight: 400,fontSize:18,marginLeft:'7%',letterSpacing:0.3,marginRight:'7%'}}>
            Share this Article

            <div style={{marginTop:5,cursor:'pointer',fontSize:20}}>
              <WhatsAppIcon style={{color:'#25D366',fontSize:30}}/>
              <FacebookIcon style={{color:'#1877F2',marginLeft:5,fontSize:30}}/>
              <TwitterIcon style={{color:'#1DA1F2',marginLeft:5,fontSize:30}}/>
              <LinkedInIcon style={{color:'#0077B5',marginLeft:5,fontSize:30}}/>
              <TelegramIcon style={{color:'#0088cc',marginLeft:5,fontSize:30}}/>

            </div>

        </div>

        <div style={{marginTop:10}}>
         <Footer/>
        </div>

    </div>
  );
}
