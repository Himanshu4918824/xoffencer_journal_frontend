import { Button, TextField } from "@mui/material";
import { userStyle } from "../category/CategoryCss";
import { useState } from "react";
import { postData } from "../../../services/FetchNodeAdminServices";
import Swal from "sweetalert2";

export default function Delete()
{
    const [journalId,setJournalId]=useState('');

    const handleDeleteData=async()=>{

        var body={journalId:journalId};

        var result= await postData('',body);
         if (result.status) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Category Delete Successfully",
                showConfirmButton: false,
                timer: 2000
              });
            }
            else {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Your work has not Delete",
                showConfirmButton: false,
                timer: 2000
              });
            }

    }


    var classes=userStyle()

    return( <div className={classes.root}>
              <div className={classes.box}>
                <TextField style={{marginBottom:10}} value={journalId} onChange={(e)=>setJournalId(e.target.value)} fullWidth placeholder="Enter Journal id which u want to delete "></TextField>
                <Button onClick={handleDeleteData} variant="contained">Delete</Button>
        </div>
    </div>)
}

