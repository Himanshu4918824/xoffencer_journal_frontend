import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";

const JournalDetails = ({ details }) => {
    const navigate = useNavigate();
    // const handleDownload = async () => {
    //     try {
    //         console.log(`Downloading file with ID: ${details.id}`);
    //         const response = await axios.post(
    //             `https://varsharesearchorganization.com/api/v1/download/${details.id}`,
    //             null,
    //             { responseType: "blob" }  // 🔥 Ensures binary data is handled correctly
    //         );

    //         if (response.data.size === 0) {
    //             console.error("Received an empty file!");
    //             return;
    //         }

    //         const blob = new Blob([response.data], { type: "application/pdf" });
    //         const url = window.URL.createObjectURL(blob);
    //         const link = document.createElement("a");
    //         link.href = url;
    //         link.setAttribute("download", `${details.Title_of_paper}.pdf`);
    //         document.body.appendChild(link);
    //         link.click();
    //         document.body.removeChild(link);
    //     } catch (error) {
    //         console.error("Error downloading file:", error);
    //     }
    // };

    function getMonthName(dateString) {
        const date = new Date(dateString);
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[date.getMonth()];
    }

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
                        <TableCell>: {getMonthName(details.Created_at)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            {/* Buttons Section */}
            <div style={{ display: "flex", gap: "10px", marginTop: 20, justifyContent: "center" }}>
                <Button variant="contained" color="primary" onClick={() => navigate(`/showdetails/${details.id}`)}>
                    VIEW PUBLICATION
                </Button>
                {/* <Button variant="contained" style={{ backgroundColor: "#4CAF50", color: "white" }} onClick={() => window.open("#", "_blank")}>
                    DOWNLOAD CERTIFICATE
                </Button>
                <Button variant="contained" style={{ backgroundColor: "#424242", color: "white" }} onClick={() => window.open("#", "_blank")}>
                    ACCEPTANCE LETTER
                </Button> */}
            </div>
        </TableContainer>
    );
};

// Example Usage

export default JournalDetails;