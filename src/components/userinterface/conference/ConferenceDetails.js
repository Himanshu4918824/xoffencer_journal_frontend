import React from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ConferenceDetails({ details }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
   

    return (
        <div>
            <div>
                <Header/>
            </div>

        
        <TableContainer component={Paper} style={{ padding: 20, maxWidth: 800, margin: "auto", marginTop: 20, marginBottom:40 }}>
            <Table>
                <TableBody>

                    <TableRow>
                        <TableCell style={{ fontWeight: "bold", color: "#0d47a1" }}>Title</TableCell>
                        <TableCell>: Collaborative Futures : Bridging Ideas, Cultures and Disciplines</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell style={{ fontWeight: "bold", color: "#0d47a1" }}>Organized By</TableCell>
                        <TableCell>: varsha Research Organization Journals in association with P. K. University, Shivpuri</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell style={{ fontWeight: "bold", color: "#0d47a1" }}>Subject</TableCell>
                        <TableCell>: PARAMEDICAl PHARMACY NURSING AGRICUlTURE SCIENCE lAW ARTS COMMERCE COMPUTER SCIENCE & APPlICATION ENGINEERING & TECHNOlOGY MANAGEMENT Ph.D.</TableCell></TableRow>

                    <TableRow>
                        <TableCell style={{ fontWeight: "bold", color: "#0d47a1" }}>Online/Offline</TableCell>
                        <TableCell>: Online</TableCell>
                    </TableRow>

                     <TableRow>
                        <TableCell style={{ fontWeight: "bold", color: "#0d47a1" }}>Date Of Conference</TableCell>
                        <TableCell>: 14:06:2025</TableCell>
                    </TableRow>

                </TableBody>
            </Table>

            {/* Buttons Section */}
            <div style={{ display: "flex", gap: "10px", marginTop: 20, justifyContent: "center" }}>
                <Button variant="contained" color="primary" style={{fontSize:matches?14:10}}>
                    VIEW GUIDELINES
                </Button>

                <Button variant="contained" style={{ backgroundColor: "#4CAF50", color: "white", fontSize:matches?14:10 }} onClick={() => window.open("#", "_blank")}>
                    VIEW BROCHURE
                </Button>

                <Button variant="contained" style={{ backgroundColor: "#424242", color: "white", fontSize:matches?14:10 }} onClick={() => window.open("#", "_blank")}>
                    APPLY FOR CONFERENCE
                </Button>

                 <Button variant="contained" style={{ backgroundColor: "#424242", color: "white", fontSize:matches?14:10 }} onClick={() => window.open("#", "_blank")}>
                    JOIN
                </Button>
            </div>
        </TableContainer>

        <div>
            <Footer/>
        </div>

        </div>
    );
};

// Example Usage