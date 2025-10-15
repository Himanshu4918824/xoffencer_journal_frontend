import Swal from "sweetalert2";
import { useState } from "react";
import { userStyle } from "../category/CategoryCss";
import { Button, Grid, TextField } from "@mui/material";
import { postData } from "../../../services/FetchNodeAdminServices";

export default function UpcommingConferenceForm()
{
    const [title,setTitle]=useState('');
    const [organized,setOrganized]=useState('');
    const [subject,setSubject]=useState('');
    const [price,setPrice]=useState('');
    const [mode,setMode]=useState('');
    const [date,setData]=useState('');
    const [time,setTime]=useState('');


    const handleSubmitData=async()=>{
        var formData=new FormData();

        formData.append('title',title);
        formData.append('organised',organized);
        formData.append('subject',subject);
        formData.append('price',price);
        formData.append('mode',mode);
        formData.append('date',date);
        formData.append('time',time);

        const result=await postData("",formData);
        if(result.status)
        {
            Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Conference Submit Successfully",
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

    function resetData()
    {
        setTitle('');
        setOrganized('');
        setSubject('');
        setPrice('');
        setMode('');
        setData('');
        setTime('');
    }

    var classes=userStyle();

    return(<div className={classes.root}>
        <div className={classes.box}>
            <Grid container spacing={2}>
                <Grid item xs="12">
                    <TextField value={title} onChange={(event)=>setTitle(event.target.value)} placeholder="Enter Title...." fullWidth/>
                </Grid>

                <Grid item xs="12">
                    <TextField value={organized} onChange={(event)=>setOrganized(event.target.value)} placeholder="Enter Organized By...." fullWidth/>
                </Grid>

                <Grid item xs="12">
                    <TextField value={subject} onChange={(event)=>setSubject(event.target.value)} placeholder="Enter Subject...." fullWidth/>
                </Grid>

                 <Grid item xs="12">
                    <TextField value={price} onChange={(event)=>setPrice(event.target.value)} placeholder="Enter Price of Conference...." fullWidth/>
                </Grid>

                 <Grid item xs="12">
                    <TextField value={mode} onChange={(event)=>setMode(event.target.value)} placeholder="Enter Mode (Online/Offline)...." fullWidth/>
                </Grid>

                <Grid item xs="6">
                    <TextField value={date} onChange={(event)=>setData(event.target.value)} type="date" placeholder="Enter Date of Conference...." fullWidth/>
                </Grid>

                <Grid item xs="6">
                    <TextField value={time} onChange={(event)=>setTime(event.target.value)} type="time" placeholder="Enter Time of Conference...." fullWidth/>
                </Grid>

                 <Grid item xs="6" className={classes.centerStyle}>
                    <Button onClick={handleSubmitData} variant="contained" type="submit">Sunmit</Button>
                </Grid>

                <Grid item xs="6" className={classes.centerStyle}>
                    <Button onClick={resetData} variant="contained" type="reset">Reset</Button>
                </Grid>
            </Grid>

        </div>
    </div>)
}