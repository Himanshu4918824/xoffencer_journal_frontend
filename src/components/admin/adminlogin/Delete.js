import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function Delete() {
  const [journalId, setJournalId] = useState('');

  const handleDeleteData = async () => {

    // let body = { journalId: journalId };

    let result = await axios.delete(`https://varsharesearchorganization.com/api/v1/${journalId}`);
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




  return (<div>


    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 5,
        px: { xs: 2, sm: 3, md: 0 },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: { xs: '100%', sm: '400px' },
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 3,
        }}
      >
        <Typography letiant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Delete Journal
        </Typography>

        <TextField
          label="Journal ID"
          placeholder="Enter Journal ID to delete"
          value={journalId}
          onChange={(e) => setJournalId(e.target.value)}
          fullWidth
          letiant="outlined"
        />

        <Button
          onClick={() => handleDeleteData(journalId)}
          letiant="contained"
          color="error"
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            py: 1.5,
            '&:hover': { backgroundColor: 'error.dark' },
          }}
        >
          Delete
        </Button>
      </Paper>
    </Box>

  </div>)
}

