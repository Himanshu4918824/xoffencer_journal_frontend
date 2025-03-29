import React from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

const JournalDetails = ({ details }) => {

    return (
        <TableContainer component={Paper} style={{ padding: 20, maxWidth: 800, margin: "auto", marginTop: 20 }}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold", color: "#0d47a1" }}>Title</TableCell>
                        <TableCell>: {details.Title_of_paper}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold", color: "#0d47a1" }}>Submitted By</TableCell>
                        <TableCell>: {details.Author_Name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold", color: "#0d47a1" }}>Subject</TableCell>
                        <TableCell>: {details.subject}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold", color: "#0d47a1" }}>Month Of Publication</TableCell>
                        <TableCell>: {details.Created_at}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            {/* Buttons Section */}
            <div style={{ display: "flex", gap: "10px", marginTop: 20 }}>
                <Button variant="contained" color="primary" onClick={() => window.open("#", "_blank")}>
                    VIEW PUBLICATION
                </Button>
                <Button variant="contained" style={{ backgroundColor: "#4CAF50", color: "white" }} onClick={() => window.open("#", "_blank")}>
                    VIEW CERTIFICATE
                </Button>
                <Button variant="contained" style={{ backgroundColor: "#424242", color: "white" }} onClick={() => window.open("#", "_blank")}>
                    ACCEPTANCE LETTER
                </Button>
            </div>
        </TableContainer>
    );
};

// Example Usage

export default JournalDetails;