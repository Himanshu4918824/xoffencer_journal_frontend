import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ConferencePaper() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Header />

      <div style={{background: "lightgrey", color: "black", width: "100%", height: 250, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: 40, textAlign: "center"}}>
        <div style={{fontSize: matches ? "2.2rem" : "1.3rem", fontWeight: 500, letterSpacing: 1.2, textAlign: "center" }} >
          CONFERENCE PAPER
        </div>
      </div>

      <div style={{ width: "100vw", maxWidth: "100%", overflowX: "auto" }}>
        <TableContainer component={Paper} style={{ padding: matches ? 20 : 8, maxWidth: matches ? 900 : "100vw", margin: "auto", marginTop: matches ? 20 : 8, marginBottom: matches ? 40 : 16, border: "1px solid black", borderRadius: matches ? 12 : 6, boxShadow: matches ? "0 4px 24px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.05)", }}>
          <Table style={{minWidth: 320,width: "100%",fontSize: matches ? "1rem" : "0.85rem",tableLayout: "auto" }}>
            <TableBody>

              <TableRow>
                <TableCell style={{fontWeight: "bold",fontSize: matches ? 18 : 13,textAlign: "center" }}>SNo. </TableCell>

                <TableCell style={{fontWeight: "bold",fontSize: matches ? 18 : 13,textAlign: "center" }}>Title Of Conference </TableCell>

                <TableCell style={{fontWeight: "bold",fontSize: matches ? 18 : 13,textAlign: "center" }}>Date Of Conference</TableCell>

                <TableCell style={{fontWeight: "bold",fontSize: matches ? 18 : 13,textAlign: "center"}}>View</TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ textAlign: "center", fontSize: matches ? 16 : 12 }}>1.</TableCell>
                <TableCell style={{ fontSize: matches ? 16 : 12, wordBreak: "break-word" }}>
                  Exploring Innovative Research Methodologies in a Variety of Multidisciplinary Fields and Their Prospective Future Impact
                </TableCell>
                <TableCell style={{ textAlign: "center", fontSize: matches ? 16 : 12 }}>2024-02-25</TableCell>
                <TableCell style={{ textAlign: "center", fontSize: matches ? 16 : 12 }}>View</TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ textAlign: "center", fontSize: matches ? 16 : 12 }}>2.</TableCell>
                <TableCell style={{ fontSize: matches ? 16 : 12, wordBreak: "break-word" }}>
                  Integration of Artificial Intelligence in Advancement of Science and Engineering
                </TableCell>
                <TableCell style={{ textAlign: "center", fontSize: matches ? 16 : 12 }}>2024-02-25</TableCell>
                <TableCell style={{ textAlign: "center", fontSize: matches ? 16 : 12 }}>View</TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ textAlign: "center", fontSize: matches ? 16 : 12 }}>3.</TableCell>
                <TableCell style={{ fontSize: matches ? 16 : 12, wordBreak: "break-word" }}>
                  Shaping the future of Research and its Innovative Methodologies in Various Multidisciplinary Streams
                </TableCell>
                <TableCell style={{ textAlign: "center", fontSize: matches ? 16 : 12 }}>2024-02-25</TableCell>
                <TableCell style={{ textAlign: "center", fontSize: matches ? 16 : 12 }}>View</TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{ textAlign: "center", fontSize: matches ? 16 : 12 }}>4.</TableCell>
                <TableCell style={{ fontSize: matches ? 16 : 12, wordBreak: "break-word" }}>
                  Innovating Across Boundaries: Bridging Science, Technology, and Humanities
                </TableCell>
                <TableCell style={{ textAlign: "center", fontSize: matches ? 16 : 12 }}>2024-02-25</TableCell>
                <TableCell style={{ textAlign: "center", fontSize: matches ? 16 : 12 }}>View</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Footer />
    </div>
  );
}