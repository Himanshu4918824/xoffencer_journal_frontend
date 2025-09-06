import { Avatar, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, FormHelperText } from "@mui/material";
import Header from "../homepage/Header";
import { userStyle } from '../journal/JournalFormCss'
import Footer from "../homepage/Footer";
import { useState } from "react";
import cart from '../../../assets/cart.png'
import Swal from "sweetalert2";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ApplyForm() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));


    const [selectedConference, setSelectedConference] = useState("");
    const [date,setDate]=useState('');
    const [mode,setMode]=useState('');
    const [title,setTitle]=useState('');
    const [name,setName]=useState('');  
    const [subject,setSubject]=useState('');
    const [authorName,setAuthorName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [addressProofType,setAddressProofType]=useState('');
    const [uploadAddressProof,setUploadAddressProof]=useState({bytes:'',fileName:cart});
    const [uploadArticle,setUploadArticle]=useState({bytes:'',fileName:cart});
    const [couponCode,setCouponCode]=useState('');

    const [errorMessage,setErrorMessage]=useState({});


    const validData=()=>{
        var err=false;
        if(selectedConference===0)
        {
            handleErrorMessage("selectedConference","Please Select Conference");
            err=true;
        }
        if(date.length===0)
        {
            handleErrorMessage("date","Please Enter Date of Conference");
            err=true;
        }
        if(mode.length===0)
        {
            handleErrorMessage("mode","Please Enter Mode");
            err=true;
        }
        if(title.length===0)
        {
            handleErrorMessage("title","Please Enter Title of Paper");
            err=true;
        }
        if(name.length===0)
        {
            handleErrorMessage("name","Please Enter Your Name");
            err=true;
        }
        if(subject.length===0)
        {
            handleErrorMessage("subject","Please Enter Subject");
            err=true;
        }
        if(authorName.length===0)
        {
            handleErrorMessage("authorName","Please Enter Author Name");
            err=true;
        }
        if(email.length===0)
        {
            handleErrorMessage("email","Please Enter Your Email");
            err=true;
        }
        if(phone.length===0)
        {
            handleErrorMessage("phone","Please Enter Phone Number");
            err=true;
        }
        if(addressProofType.length===0)
        {
            handleErrorMessage("addressProofType","Please Select Address Proof Type");
            err=true;
        }
        if(uploadAddressProof.bytes.length===0)
        {
            handleErrorMessage("uploadAddressProof","Please Upload Address Proof");
            err=true;
        }
        if(uploadArticle.bytes.length===0)
        {
            handleErrorMessage("uploadArticle","Please Upload Article");
            err=true;
        }

        return err;

    }


    const handleErrorMessage=(label,message)=>{
        var msg=errorMessage;
        msg[label]=message;
        setErrorMessage((prev) => ({ ...prev, ...msg }))

    }

    const handleProof=(event)=>{
        setUploadAddressProof({bytes:event.target.files[0],fileName:URL.createObjectURL(event.target.files[0])})
    }

    const handleArticle=(event)=>{
        setUploadArticle({bytes:event.target.files[0],fileName:URL.createObjectURL(event.target.files[0])})
    }


    const handleSubmitData=async()=>{

        var err=validData();
        if(err === false){

        var formData=new FormData();
        formData.append("selectedConference",selectedConference);
        formData.append("date",date);
        formData.append("mode",mode);
        formData.append("title",title);
        formData.append("name",name);
        formData.append("subject",subject);
        formData.append("authorName",authorName);
        formData.append("email",email);
        formData.append("phone",phone);
        formData.append("addressProofType",addressProofType);
        formData.append("uploadAddressProof",uploadAddressProof.bytes);
        formData.append("uploadArticle",uploadArticle.bytes);
        formData.append("couponCode",couponCode);

        var response=await fetch("/",{ method:'POST',body:formData });

           if(response.status)
                {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Submitt Successfully",
                        showConfirmButton: false,
                        timer: 2000
                      });       
                }
                else
                {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Your work has been not saved",
                       showConfirmButton: false,
                       timer: 2000
          });
        
  }
}
    }

    var classes=userStyle();
    return (
        <div>
           <div>
            <Header/>
            </div>

            <div style={{background: "lightgrey", color: "black", width: "100%", height: 250, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: 40, textAlign: "center"}}>
             <div style={{fontSize:"2.2rem", fontWeight: 500, letterSpacing: 1.2, textAlign: "center" }}>APPLY FOR CONFERENCE</div>
            </div>

            <div className={classes.root}>
                <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item  xs={matches ? 6 : 12}>
                        <FormControl fullWidth>
                            <InputLabel>Select-Conference</InputLabel>

                            <Select label="Select-Conference"
                                 value={selectedConference}
                                 onChange={(e) => setSelectedConference(e.target.value)}
                                 error={errorMessage?.selectedConference}
                                 onFocus={() => handleErrorMessage("selectedConference", null)}
                            >
                                <MenuItem>Select-Conference</MenuItem>
                                <MenuItem>Exploring Innovative Research Methodologies in a Variety of Multidisciplinary Fields and Their Prospective Future Impact</MenuItem>
                                <MenuItem>Integration of Artificial Intelligence in Advancement of Science and Engineering</MenuItem>
                            </Select>
                        </FormControl>

                       <FormHelperText style={{color:'red'}}>{errorMessage?.selectedConference}</FormHelperText>
                    </Grid>

                    <Grid item  xs={matches ? 6 : 12}>
                        <TextField onFocus={() => handleErrorMessage("date", null)} error={errorMessage?.date} helperText={errorMessage?.date} value={date} onChange={(e) => setDate(e.target.value)} label="Date of Conference" fullWidth />
                    </Grid>

                    <Grid item  xs={matches ? 6 : 12}>
                        <TextField onFocus={() => handleErrorMessage("mode", null)} error={errorMessage?.mode} helperText={errorMessage?.mode} value={mode} onChange={(e) => setMode(e.target.value)} label="Online/Offline" fullWidth />
                    </Grid>

                    <Grid item  xs={matches ? 6 : 12}>
                        <TextField onFocus={() => handleErrorMessage("title", null)} error={errorMessage?.title} helperText={errorMessage?.title} value={title} onChange={(e) => setTitle(e.target.value)} label="Title Of Paper" fullWidth />
                    </Grid>

                    <Grid item xs={matches ? 6 : 12}>
                        <TextField onFocus={() => handleErrorMessage("name", null)} error={errorMessage?.name} helperText={errorMessage?.name} value={name} onChange={(e) => setName(e.target.value)} label="Enter Your Name" fullWidth />
                    </Grid>

                     <Grid item xs={matches ? 6 : 12}>
                        <TextField onFocus={() => handleErrorMessage("subject", null)} error={errorMessage?.subject} helperText={errorMessage?.subject} value={subject} onChange={(e) => setSubject(e.target.value)} label="Subject" fullWidth />
                    </Grid>

                     <Grid  xs={matches ? 6 : 12} item>
                        <TextField onFocus={() => handleErrorMessage("authorName", null)} error={errorMessage?.authorName} helperText={errorMessage?.authorName} value={authorName} onChange={(e) => setAuthorName(e.target.value)} label="Author Name" fullWidth />
                    </Grid>

                     <Grid item  xs={matches ? 6 : 12}>
                        <TextField onFocus={() => handleErrorMessage("email", null)} error={errorMessage?.email} helperText={errorMessage?.email} value={email} onChange={(e) => setEmail(e.target.value)} label="Enter Your Email" fullWidth />
                    </Grid>

                     <Grid item  xs={matches ? 6 : 12}>
                        <TextField onFocus={() => handleErrorMessage("phone", null)} error={errorMessage?.phone} helperText={errorMessage?.phone} value={phone} onChange={(e) => setPhone(e.target.value)} label="Enter Phone Number" fullWidth />
                    </Grid>

                      <Grid item  xs={matches ? 6 : 12}>
                        <FormControl fullWidth>
                            <InputLabel>Address Proof Type</InputLabel>
                            <Select label="Address Proof Type"
                                 value={addressProofType}
                                 onChange={(e) => setAddressProofType(e.target.value)}
                                 error={errorMessage?.addressProofType}
                                 onFocus={() => handleErrorMessage("addressProofType", null)}

                            >
                                <MenuItem>Select-Address Proof Type</MenuItem>
                                <MenuItem>Aadhar Card</MenuItem>
                                <MenuItem>Passport</MenuItem>
                                <MenuItem>Voter ID</MenuItem>
                            </Select>
                        </FormControl>

                            <FormHelperText style={{color:'red'}}>{errorMessage?.addressProofType}</FormHelperText>
                    </Grid>

                    <Grid item xs={6}>
                         <div style={{ display: 'flex', flexDirection: 'column' }}>
                           <Button variant="contained" component="label" fullWidth> Upload Address Proof
                              <input onClick={handleProof} type="file" hidden multiple accept="images/*" />
                           </Button>
                              <div>{errorMessage?.uploadAddressProof != null ? errorMessage?.uploadAddressProof : <></>}</div>

                        </div>
                    </Grid>

                     <Grid item xs={6} className={classes.centerStyle}>
                        <Avatar src={uploadAddressProof.fileName} variant="rounded" />
                    </Grid>

                     <Grid item xs={6}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Button variant="contained" component="label" fullWidth> Please attach your article / Research paper or presentation
                            <input onClick={handleArticle} type="file" hidden multiple />
                        </Button>
                        <div>{errorMessage?.uploadArticle != null ? errorMessage?.uploadArticle : <></>}</div>
                        </div>
                    </Grid>

                     <Grid item xs={6} className={classes.centerStyle}>
                        <Avatar src={uploadArticle.fileName} variant="rounded" />
                    </Grid>

                    <div style={{fontSize:20, fontWeight:500, marginTop:20,width:"100%", textAlign:"center",margin:10}}>
                       Note : In each word file, name of participant along with the subject is mandatory to be mentioned just below the title of the paper. 
                    </div>

                    <Grid item  xs={12}>
                        <label style={{color:"red"}}>Note:For Discount on Conference Enter Coupon Code or Contact on: +91-8878331639</label>
                        <TextField onFocus={() => handleErrorMessage("couponCode", null)} error={errorMessage?.couponCode} helperText={errorMessage?.couponCode} value={couponCode} onChange={(e) => setCouponCode(e.target.value)} label="Enter Coupon Code" fullWidth />
                    </Grid>

                     <Grid item xs={12}>
                <div style={{fontWeight:400,fontSize:16,letterSpacing:1.2,marginTop:10}}>
               <span style={{fontWeight:'bold',fontSize:18}}>Declaration :</span>  I hereby declare that the above information is correct to the best knowledge and for any issue , I will be responsible .The content of my article /paper /presentation is my own work and for any copyright patent or other author work issue / dispute . I will be fully responsible and there will be no accountability of the organizer or publisher.
                </div>
            </Grid>

            <Grid item xs={12} className={classes.centerStyle}>
                <Button onClick={handleSubmitData} variant="contained" >Submit And Pay</Button>
            </Grid>

     </Grid>
                </div>
            </div>

            <div>
                <Footer/>
            </div>


        </div>
    );
}
