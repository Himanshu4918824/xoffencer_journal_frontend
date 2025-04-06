import Header from "./Header";
import MessageIcon from '@mui/icons-material/Message';
import CallIcon from '@mui/icons-material/Call';
import { Button, Divider, Grid, TextField } from "@mui/material";
import Footer from "./Footer";
import { useState } from "react";
import { postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Contact()
{
     const theme = useTheme();
     const matches = useMediaQuery(theme.breakpoints.up('md'));

    var [name,setName]=useState('');
    var [email,setEmail]=useState('');
    var [phone,setPhone]=useState('');
    var [message,setMessage]=useState('');

    const handleSubmitData=async()=>{
        //alert(1)
        var body={name:name,email:email,phone:phone,message:message}
        var result= await postData('',body)

        if(result.status)
        {
             Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Category Submit Successfully",
                                showConfirmButton: false,
                                timer: 2000
                            });
            
        }
        else
        {
             Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Category error Successfully",
                                showConfirmButton: false,
                                timer: 2000
                            });
        }
    }



    return(<div>
        <div>
            <Header/>
        </div>

         <div style={{background: 'lightgrey',color:'black',width:'100%',height:250,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginBottom:40,textAlign:'center'}}> 

           <div style={{fontSize:'2.2rem',fontWeight:500,letterSpacing:1.2}}>CONTACT US</div>
           
         </div>

         <div style={{textAlign:'center',marginTop:40}}>
           <div style={{fontSize:20,fontWeight:500}}>Addresses:</div> 
           <div style={{fontSize:16,letterSpacing:0.5,marginTop:3,marginLeft:25}}><b>Head office:-</b>PMAY Building ,E-52,Flate no- 403,Sagartal Road</div>
           <div style={{}}>Gwalior MP-474008</div>
           <div style={{fontSize:16,letterSpacing:0.5,marginTop:5}}><b>Admin office:-</b>39, Kishanbhag, Bahodapur</div>
           <div style={{}}>Gwalior MP-474012</div>
          
         </div>

         



<div style={{display:'flex',justifyContent:'space-around',flexDirection:matches?'row':'column',marginTop:40,marginBottom:20,textAlign:'center'}}>

<div>
    <MessageIcon style={{width:80,height:80,marginLeft:0}}/>
    <div>editor@varsharesearchoriganization.com</div>
</div>

<div>
   <CallIcon style={{width:80,height:80,marginLeft:10}}/>
   <div>+919827646334</div>
</div>

</div>

<Divider/>

<div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:40,marginBottom:40}}>
  <div style={{width:500,height:'auto', background:"#f7f1e3",padding:10,margin:10}}>
       <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField onChange={(event)=>setName(event.target.value)} value={name} placeholder="Enter Your Name" fullWidth/>
            </Grid>

            <Grid item xs={12}>
                <TextField onChange={(event)=>setEmail(event.target.value)} value={email} placeholder="Enter Your Email" fullWidth/>
            </Grid>

            <Grid item xs={12}>
                <TextField onChange={(event)=>setPhone(event.target.value)} value={phone} placeholder="Enter Your Phone Number" fullWidth/>
            </Grid>

            <Grid item xs={12}>
                <TextField onChange={(event)=>setMessage(event.target.value)} value={message} placeholder="Enter Your Message" fullWidth/>
            </Grid>

            <Grid item xs={12} style={{display:'flex',justifyContent:'center'}}>
               <Button onClick={handleSubmitData} variant="contained">Submit</Button>
            </Grid>
        </Grid>
    </div>

</div>

<Divider/>

<div style={{marginTop:20}}>
    <Footer/>
</div>
    </div>)
}