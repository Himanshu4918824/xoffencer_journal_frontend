import { Avatar, Button, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { userStyle } from "./EditroCss"
import { useState } from "react";
// import logo from '../../../assets//logo.png'
import cart from '../../../assets/cart.png'
import { currentDate, postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
import Checkbox from '@mui/material/Checkbox';
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function MemberBoard(props)
{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const [name,setName]=useState('');
    const [designation,setDesignation]=useState('');
    const [fatherName,setFatherName]=useState('');
    const [status,setStatus]=useState('');
    const [branch ,setBranch ]=useState('');
    const [education,setEducation]=useState('');
    const [experience,setExperience]=useState('');
    const [address,setAddress]=useState('')
    const [abstract,setAbstract]=useState('');
    const [email,setEmail]=useState('');
    const [contact,setContact]=useState('');
    const [dateBirth,setDateBirth]=useState({bytes:'',fileName:cart})
    const [photo,setPhoto]=useState({bytes:'',fileName:cart})
    const [marksheet,setMarksheet]=useState({bytes:'',fileName:cart})
    const [any,setany]=useState('')
   

    const [loadingButton,setLoadingButton]=useState(false)
    const [errorMessage,setErrorMessage]=useState({})

    const handleErrorMessage=(label,message)=>{
        var msg=errorMessage;
        msg[label]=message;
        setErrorMessage((prev) => ({ ...prev, ...msg }))

    }


    function resetData()
    {
        setFatherName('');
        setDesignation('');
        setName('');
        setBranch('');
        setStatus('');
        setEducation('');
        setExperience('');
        setAbstract('');
        setAddress('');
        setEmail('');
        setContact('');
        setDateBirth({bytes:"",fileName:cart})
        setPhoto({bytes:"",fileName:cart})
        setMarksheet({bytes:"",fileName:cart})
    }

    const handlePaperIcon=(e)=>{
        handleErrorMessage('datebirth',null)
        try{
        setDateBirth({bytes:e.target.files[0],fileName:URL.createObjectURL(e.target.files[0])})
        }
        catch (error) {
            console.log(error.message)  
        }
    
    }

    const handlePhoto=(e)=>{
        handleErrorMessage('photo',null)
        try{
        setPhoto({bytes:e.target.files[0],fileName:URL.createObjectURL(e.target.files[0])})
        }
        catch (error) {
            console.log(error.message)  
        }
    
    }

    const handleMarksheet=(e)=>{
       handleErrorMessage('marksheet',null)
       try{
        setMarksheet({bytes:e.target.files[0],fileName:URL.createObjectURL(e.target.files[0])})
       }
       catch (error) {
        console.log(error.message)  
    }
    
    }


    const handleSubmitData=async()=>{
        var error=validData();
        if(error===false){
     
        setLoadingButton(true)
        var formData=new FormData()
        formData.append('name',name);
        formData.append('designation',designation);
        formData.append('fathername',fatherName);
        formData.append('status',status);
        formData.append('branch',branch);
        formData.append('education',education);
        formData.append('experience',experience);
        formData.append('abstract',abstract);
        formData.append('address',address);
        formData.append('email',email);
        formData.append('contact',contact);
        formData.append('datebirth',dateBirth.bytes);
        formData.append('photo',photo.bytes);
        formData.append('marksheet',marksheet.bytes);
        formData.append('created_at', currentDate());

            var result = await postData('api/v1/form-for-MemberBoard',formData)
        if(result.status)
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
setLoadingButton(false)
resetData()

}
    }


const validData=()=>{
    var err=false;
    if(name.length===0)
        {
            handleErrorMessage('name','plz insert name...')
             err = true;
        }

        if(designation.length===0)
            {
                handleErrorMessage('designation','plz insert designation...')
                 err = true;
            }

            if(fatherName.length===0)
                {
                    handleErrorMessage('fatherName','plz insert Father / Husband Name...')
                     err = true;
                }

                if(status.length===0)
                    {
                        handleErrorMessage('status','plz insert status...')
                         err = true;
                    }

                        if(education.length===0)
                            {
                                handleErrorMessage('education','plz insert education...')
                                 err = true;
                            }

                            if(experience.length===0)
                                {
                                    handleErrorMessage('experience','plz insert Education Experience...')
                                     err = true;
                                }

                                    if(abstract.length===0)
                                        {
                                            handleErrorMessage('abstract','plz insert Abstract...')
                                             err = true;
                                        }

                                        if(address.length===0)
                                            {
                                                handleErrorMessage('address','plz insert Address...')
                                                 err = true;
                                            }

                                            if(email.length===0)
                                                {
                                                    handleErrorMessage('email','plz insert Email...')
                                                     err = true;
                                                }

                                                if(contact.length===0)
                                                    {
                                                        handleErrorMessage('contact','plz insert Contact...')
                                                         err = true;
                                                    }

                                                        if(dateBirth.bytes===0)
                                                            {
                                                                handleErrorMessage('dateBirth','plz Upload Date of Birth...')
                                                                 err = true;
                                                            }

                                                            if(photo.bytes===0)
                                                                {
                                                                    handleErrorMessage('photo','plz Upload  photo...')
                                                                     err = true;
                                                                }

                                                                if(marksheet.bytes===0)
                                                                    {
                                                                        handleErrorMessage('marksheet','plz Upload  marksheet...')
                                                                         err = true;
                                                                    }

                                                                    if(any.length===0)
                                                                        {
                                                                            handleErrorMessage('any','plz Click...')
                                                                             err = true;
                                                                        }

                                                                
return err;

}



    var classes=userStyle();
    return(<div>
        <div>
            <Header/>

        </div>

        <div style={{background: 'lightgrey',color:'black',width:'100%',height:250,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginBottom:40,textAlign:'center'}}> 

           <div style={{fontSize:'2.2rem',fontWeight:500,letterSpacing:1.2}}>MEMBERSHIP IN EDITORIAL BOARD</div>
           
       </div>
    
         <div className={classes.root}>
        <div className={classes.box}>
           <Grid container spacing={2}>

            <Grid item xs={matches?6:12}>
                <TextField onFocus={()=>handleErrorMessage('name',null)} error={errorMessage?.name} helperText={errorMessage?.name} onChange={(event)=>setName(event.target.value)} label=" Enter Name" value={name} fullWidth/>
            </Grid>

            <Grid item xs={matches?6:12}>
                <TextField onFocus={()=>handleErrorMessage('designation',null)} error={errorMessage?.designation} helperText={errorMessage?.designation} onChange={(event)=>setDesignation(event.target.value)} label="designation" value={designation} fullWidth/>
            </Grid>

            <Grid item xs={matches?6:12}>
                    <FormControl fullWidth>
                        <InputLabel>If Currently or Previously working</InputLabel>
                        <Select label='If Currently or Previously working'
                                value={status}
                                onChange={(event)=>setStatus(event.target.value)}
                                error={errorMessage?.status}
                                onFocus={()=>handleErrorMessage('status',null)}
                         >
                            <MenuItem value='Institude'>Institude</MenuItem>
                            <MenuItem value='School'>School</MenuItem>
                            <MenuItem value='Collage'>Collage</MenuItem>
                            <MenuItem value='University Name'>University Name</MenuItem>
                            <MenuItem value='Self-Employed'>Self-Employed</MenuItem>
                            

                        </Select>

                    </FormControl>
                    <FormHelperText style={{color:'red'}}>{errorMessage?.status}</FormHelperText>
                   </Grid>

            <Grid item xs={matches?6:12}>
                <TextField onFocus={()=>handleErrorMessage('fatherName',null)} error={errorMessage?.fatherName} helperText={errorMessage?.fatherName} onChange={(event)=>setFatherName(event.target.value)} label="Enter Father/Husband Name" value={fatherName} fullWidth/>
            </Grid>

            <Grid item xs={matches?6:12}>
                <TextField onFocus={()=>handleErrorMessage('education',null)} error={errorMessage?.education} helperText={errorMessage?.education} onChange={(event)=>setEducation(event.target.value)} label="Educational Qualification" value={education} fullWidth/>
            </Grid>

            <Grid item xs={matches?6:12}>
                <TextField onFocus={()=>handleErrorMessage('experience',null)} error={errorMessage?.experience} helperText={errorMessage?.experience} onChange={(event)=>setExperience(event.target.value)} label="Education Experience" value={experience} fullWidth/>
            </Grid>

            <Grid item xs={matches?6:12}>
                <TextField onChange={(event)=>setBranch(event.target.value)} label="Branch/Field (if any)" value={branch} fullWidth/>
            </Grid>

            <Grid item xs={matches?6:12}>
                <TextField onFocus={()=>handleErrorMessage('abstract',null)} error={errorMessage?.abstract} helperText={errorMessage?.abstract} onChange={(event)=>setAbstract(event.target.value)} label="Abstract Of The Paper" value={abstract} fullWidth/>
            </Grid>

            <Grid item xs={matches?6:12}>
                <TextField onFocus={()=>handleErrorMessage('email',null)} error={errorMessage?.email} helperText={errorMessage?.email} onChange={(event)=>setEmail(event.target.value)} label="Email Id" value={email} fullWidth/>
            </Grid>

            <Grid item xs={matches?6:12}>
                <TextField onFocus={()=>handleErrorMessage('contact',null)} error={errorMessage?.contact} helperText={errorMessage?.contact} onChange={(event)=>setContact(event.target.value)} label="Contact No" value={contact} fullWidth/>
            </Grid>

            <Grid item xs={12}>
                <TextField onFocus={()=>handleErrorMessage('address',null)} error={errorMessage?.address} helperText={errorMessage?.address} onChange={(event)=>setAddress(event.target.value)} label="Address"  value={address} fullWidth/>
            </Grid>

            <Grid item xs={7}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Button variant="contained" component="label">Upload your Date Of Birth  ( Doc., Docx Format)
                     <input onChange={handlePaperIcon} type="file" accept="images/*" multiple hidden />
                    </Button>
                    <div>{errorMessage?.dateBirth != null ? errorMessage?.dateBirth : <></>}</div>
               </div>
            </Grid>

            <Grid item xs={5} className={classes.centerStyle}>
                <Avatar src={dateBirth.fileName} variant="rounded"></Avatar>
            </Grid>

            <Grid item xs={7}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Button variant="contained" component="label">Photo
                    <input onChange={handlePhoto} type="file" accept="images/*" multiple hidden />
                  </Button>
                  <div>{errorMessage?.photo != null ? errorMessage?.photo : <></>}</div>
           </div>
            </Grid>

            <Grid item xs={5} className={classes.centerStyle}>
                <Avatar src={photo.fileName} variant="rounded"></Avatar>
            </Grid>

            <Grid item xs={7}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Button variant="contained" component="label">Upload Last Educational Qualification
                      <input onChange={handleMarksheet} type="file" accept="images/*" multiple hidden />
                    </Button>
                      <div>{errorMessage?.marksheet != null ? errorMessage?.marksheet : <></>}</div>
               </div>
            </Grid>

            <Grid item xs={5} className={classes.centerStyle}>
                <Avatar src={marksheet.fileName} variant="rounded"></Avatar>
            </Grid>

            <Grid item xs={12}>
                <div style={{margin:10,padding:10,border:'3px solid #ddd',marginTop:10,fontSize:16,fontWeight:400,letterSpacing:1.2}}>
                  I hereby declare that the information and document given by me are completely best to the my knowledge.
                  If anything found wrong I shall be completely responsible and publisher may discontinue my membership
                  and may take appropriate action. With this form I am giving my consent to the publisher to consider me
                  as a reviewer of the concerning subject papers/articles if required or suits for my profile.
                </div>

            </Grid>
            
            <Grid item xs={12}>
                <FormControl>

                <FormGroup>
                <FormControlLabel  onChange={(event)=>setany(event.target.value)} error={errorMessage?.any} onFocus={()=>handleErrorMessage('any',null)} control={<Checkbox/>} label="If you agree, please tick the check box and click on Submit Button" />
                </FormGroup>

                <FormHelperText>{errorMessage?.any}</FormHelperText>

                </FormControl>
                

            </Grid>

            


            <Grid item xs={12} className={classes.centerStyle} style={{marginTop:30}}>
            <LoadingButton
                            loading={loadingButton}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="contained"
                            onClick={handleSubmitData}
                        >
                            Submit
                        </LoadingButton>
            </Grid>


        </Grid>
        </div>
        </div>

        <div style={{marginTop:30}}>
                    <Footer/>
        </div>

    </div>)
}