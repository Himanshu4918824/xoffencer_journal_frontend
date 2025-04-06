import { Avatar, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, FormHelperText } from "@mui/material"
import { userStyle } from "./JournalFormCss"
import { useState } from "react";
// import logo from '../../../assets//logo.png'
import cart from '../../../assets/cart.png'
import {  postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";
import { LoadingButton } from "@mui/lab";
import SaveIcon from '@mui/icons-material/Save';
// import { Tune } from "@mui/icons-material";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";

//import Radio from '@mui/material/Radio';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function JournalForm(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const [journal, setJournal] = useState('');
    const [author, setAuthor] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [branch, setBranch] = useState('');
    const [education, setEducation] = useState('');
    const [secondAuthor, setSecondAuthor] = useState('');
    const [paper, setPaper] = useState('');
    const [address, setAddress] = useState('')
    const [abstract, setAbstract] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [paperIcon, setPaperIcon] = useState({ bytes: '', fileName: cart })
    const [photo, setPhoto] = useState({ bytes: '', fileName: cart })
    const [marksheet, setMarksheet] = useState({ bytes: '', fileName: cart })
    const [anynumber, setAnyNumber] = useState('')

    //const [value,setValue]=useState('')

    const [loadingButton, setLoadingButton] = useState(false)
    const [errorMessage, setErrorMessage] = useState({})

    const handleErrorMessage = (label, message) => {
        var msg = errorMessage;
        msg[label] = message;
        setErrorMessage((prev) => ({ ...prev, ...msg }))

    }


    function resetData() {
        setJournal('');
        setAuthor('');
        setName('');
        setBranch('');
        setSubject('');
        setEducation('');
        setSecondAuthor('')
        setPaper('');
        setAbstract('');
        setAddress('');
        setEmail('');
        setContact('');
        setPaperIcon({ bytes: "", fileName: cart })
        setPhoto({ bytes: "", fileName: cart })
        setMarksheet({ bytes: "", fileName: cart })
        setAnyNumber('')
    }



    const handlePaperIcon = (e) => {
        handleErrorMessage('paperIcon', null)
        try{
        setPaperIcon({ bytes: e.target.files[0], fileName: URL.createObjectURL(e.target.files[0]) })
        }
        catch (error) {
            console.log(error.message)  
        }

    }

    const handlePhoto = (e) => {
        handleErrorMessage('photo', null)
        try {
         setPhoto({ bytes: e.target.files[0], fileName: URL.createObjectURL(e.target.files[0]) })
    }
    catch (error) {
        console.log(error.message)  
    }
}

    const handleMarksheet = (e) => {
        handleErrorMessage('marksheet', null)
        try{
        setMarksheet({ bytes: e.target.files[0], fileName: URL.createObjectURL(e.target.files[0]) })
        }
        catch (error) {
            console.log(error.message)  
        }

    }


    const handleSubmitData = async () => {
        var error = validData();
        if (error === false) {

            setLoadingButton(true)
            var formData = new FormData()
            formData.append('journal', journal);
            formData.append('author', author);
            formData.append('name', name);
            formData.append('subject', subject);
            formData.append('branch', branch);
            formData.append('education', education);
            formData.append('secondauthor', secondAuthor);
            formData.append('paper', paper);
            formData.append('abstract', abstract);
            formData.append('address', address);
            formData.append('email', email);
            formData.append('contact', contact);
            formData.append('paperIcon', paperIcon.bytes);
            formData.append('photo', photo.bytes);
            formData.append('marksheet', marksheet.bytes);
            // formData.append('created_at',currentDate());


            var result = await postData('api/v1/form-for-publication', formData)
           //console.log("xxxx",result)
            if (result.status) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Submitt Successfully",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
            else {
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


    const validData = () => {
        var err = false;
        if (journal.length === 0) {
            handleErrorMessage('journal', 'plz insert journal...')
            err = true;
        }

        if (author.length === 0) {
            handleErrorMessage('author', 'plz insert Author...')
            err = true;
        }

        if (name.length === 0) {
            handleErrorMessage('name', 'plz insert Father / Husband Name...')
            err = true;
        }

        if (subject.length === 0) {
            handleErrorMessage('subject', 'plz insert Subject...')
            err = true;
        }

        if (education.length === 0) {
            handleErrorMessage('education', 'plz insert education...')
            err = true;
        }


        if (paper.length === 0) {
            handleErrorMessage('paper', 'plz insert Paper...')
            err = true;
        }

        if (abstract.length === 0) {
            handleErrorMessage('abstract', 'plz insert Abstract...')
            err = true;
        }

        if (address.length === 0) {
            handleErrorMessage('address', 'plz insert Address...')
            err = true;
        }

        if (email.length === 0) {
            handleErrorMessage('email', 'plz insert Email...')
            err = true;
        }

        if (contact.length === 0) {
            handleErrorMessage('contact', 'plz insert Contact...')
            err = true;
        }


        if (paperIcon.bytes === 0) {
            handleErrorMessage('paperIcon', 'plz Upload paper/Article...')
            err = true;
        }

        if (photo.bytes === 0) {
            handleErrorMessage('photo', 'plz Upload  photo...')
            err = true;
        }

        if (marksheet.bytes === 0) {
            handleErrorMessage('marksheet', 'plz Upload  marksheet...')
            err = true;
        }


        return err;

    }



    var classes = userStyle();
    return (<div>
        <div>
            <Header />

        </div>

        <div style={{ background: 'lightgrey', color: 'black', width: '100%', height: 250, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 40 }}>

            <div style={{ fontSize: '2.2rem', fontWeight: 500, letterSpacing: 1.2, textAlign: 'center' }}>FORM FOR JOURNAL PUBLICATION</div>

        </div>

        <div className={classes.root}>
            <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item xs={matches ? 6 : 12}>
                        <FormControl fullWidth>
                            <InputLabel>journal</InputLabel>
                            <Select label='journal'
                                value={journal}
                                onChange={(event) => setJournal(event.target.value)}
                                error={errorMessage?.journal}
                                onFocus={() => handleErrorMessage('journal', null)}
                            >
                                <MenuItem value='National Journal'>National Journal</MenuItem>
                                {/*<MenuItem value='International Journal'>International Journal</MenuItem>*/}

                            </Select>

                        </FormControl>
                        <FormHelperText style={{color:'red'}}>{errorMessage?.journal}</FormHelperText>
                    </Grid>

                    <Grid item xs={matches ? 6 : 12}>
                        <TextField onFocus={() => handleErrorMessage('author', null)} error={errorMessage?.author} helperText={errorMessage?.author} onChange={(event) => setAuthor(event.target.value)} label="Name Of Author" value={author} fullWidth />
                    </Grid>

                    <Grid item xs={matches ? 6 : 12}>
                        <TextField onFocus={() => handleErrorMessage('name', null)} error={errorMessage?.name} helperText={errorMessage?.name} onChange={(event) => setName(event.target.value)} label="Name Of father/Husband" value={name} fullWidth />
                    </Grid>

                    <Grid item xs={matches ? 6 : 12}>
                        <TextField onFocus={() => handleErrorMessage('subject', null)} error={errorMessage?.subject} helperText={errorMessage?.subject} onChange={(event) => setSubject(event.target.value)} label="Subject* (e.g.: Sociology, Engineering, English)" value={subject} fullWidth />
                    </Grid>

                    <Grid item xs={matches ? 6 : 12}>
                        <TextField onChange={(event) => setBranch(event.target.value)} label="Branch / field (If any)" value={branch} fullWidth />
                    </Grid>

                    <Grid item xs={matches ? 6 : 12}>
                        <TextField onFocus={() => handleErrorMessage('education', null)} error={errorMessage?.education} helperText={errorMessage?.education} onChange={(event) => setEducation(event.target.value)} label="Educational Qualification" value={education} fullWidth />
                    </Grid>

                    <Grid item xs={matches ? 6 : 12}>
                        <TextField onChange={(event) => setSecondAuthor(event.target.value)} label="Second Author/Guide Name ( if any )" value={secondAuthor} fullWidth />
                    </Grid>

                    <Grid item xs={matches ? 6 : 12}>
                        <TextField onFocus={() => handleErrorMessage('paper', null)} error={errorMessage?.paper} helperText={errorMessage?.paper} onChange={(event) => setPaper(event.target.value)} label="Title of the paper/Article" value={paper} fullWidth />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField onFocus={() => handleErrorMessage('abstract', null)} error={errorMessage?.abstract} helperText={errorMessage?.abstract} onChange={(event) => setAbstract(event.target.value)} label="Abstract" value={abstract} fullWidth />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField onFocus={() => handleErrorMessage('address', null)} error={errorMessage?.address} helperText={errorMessage?.address} onChange={(event) => setAddress(event.target.value)} label="Address" value={address} fullWidth />
                    </Grid>

                    <Grid item xs={matches ? 6 : 12}>
                        <TextField onFocus={() => handleErrorMessage('email', null)} error={errorMessage?.email} helperText={errorMessage?.email} onChange={(event) => setEmail(event.target.value)} label="Email Id" value={email} fullWidth />
                    </Grid>

                    <Grid item xs={matches ? 6 : 12}>
                        <TextField onFocus={() => handleErrorMessage('contact', null)} error={errorMessage?.contact} helperText={errorMessage?.contact} onChange={(event) => setContact(event.target.value)} label="Contact No" value={contact} fullWidth />
                    </Grid>

                    <Grid item xs={7}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button variant="contained" component="label">Upload your Paper/Article ( Doc., Docx Format)
                                <input onChange={handlePaperIcon} type="file" accept="images/*" multiple hidden />
                            </Button>
                            <div>{errorMessage?.paperIcon != null ? errorMessage?.paperIcon : <></>}</div>
                        </div>
                    </Grid>

                    <Grid item xs={5} className={classes.centerStyle}>
                        <Avatar src={paperIcon.fileName} variant="rounded"></Avatar>
                    </Grid>

                    <Grid item xs={7}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button variant="contained" component="label">Photo( only .png, .jpg)
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
                            <Button variant="contained" component="label">Upload Last Educational Qualification(only .pdf or doc.)
                                <input onChange={handleMarksheet} type="file" accept="pdf/*" hidden />
                            </Button>
                            <div>{errorMessage?.marksheet != null ? errorMessage?.marksheet : <></>}</div>
                        </div>
                    </Grid>

                    <Grid item xs={5} className={classes.centerStyle}>
                        <Avatar src={marksheet.fileName} variant="rounded"></Avatar>
                    </Grid>

                    <Grid item xs={12}>
                        <div style={{ fontSize: 20, color: '#007bff', fontWeight: 'bolder', margin: 15 }}>To prove you are not a robot please type any digit from 1 to 10</div>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField onChange={(event) => setAnyNumber(event.target.value)} label="Enter Number" value={anynumber} fullWidth />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <div>
                            <b> Note :</b> Certificate fee will be charged extra and AMC (annual maintenance charge) will be applicable every year. Annual Renewal Fee is charged as AMC (Annual Maintenance Charge ). Maintenance includes technical support, space and frequent informative services for the scholars. AMC is 650 per year only.
                        </div>

                       {/* <FormControl style={{marginTop:8}}>
                            <RadioGroup  aria-labelledby="demo-controlled-radio-buttons-group"
                                          name="controlled-radio-buttons-group"
                                          value={value}
                                        
                                          onChange={(event)=>setValue(event.target.value)}
                           >
                                <FormControlLabel  value="female" control={<Radio />} label="Instant Publication (Paper will be published within 5 working Days) Fee" />
                                <FormControlLabel  value="male" control={<Radio />} label="Instant International Publication (Paper will be published within 5 working Days) Fee $" />

                            </RadioGroup>
                        </FormControl>

                        <div style={{margin:10,padding:10}}>
                            <b>Note:</b>
                            <ol>
                                <li style={{marginBottom:5}}>Paper / Article will be published within 7 days after re\viewing process.</li>
                                <li style={{marginBottom:5}}>Your certificate acceptance letter and the research paper / article will be shown on this website in the current year publication column.</li>
                                <li>If any update on research paper or article is required then the applicant will be informed through email.</li>
                            </ol>
                        </div>
*/}
                    </Grid>


                    <Grid item xs={12} className={classes.centerStyle} style={{ marginTop: 30 }}>
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

        <div style={{ marginTop: 30 }}>
            <Footer />
        </div>

    </div>)
}