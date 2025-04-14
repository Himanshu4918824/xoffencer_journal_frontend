import React, { useEffect, useState } from "react";
import { getData } from "../../../services/FetchNodeAdminServices";
import { useSearchParams } from "react-router-dom";
import JournalDetails from "./JournalDetails";
import Header from "../homepage/Header";
//import { Button } from "@mui/material";
import Footer from "../homepage/Footer";
import LoadingButton from '@mui/lab/LoadingButton';
import { Download } from "@mui/icons-material";

const ShowPage = () => {
    const [searchParams] = useSearchParams(); // This returns a URLSearchParams object
    const year = searchParams.get("year");
    const vol = searchParams.get("vol");
    const issue = searchParams.get("issue");

    console.log({ year, vol, issue });

    const [data, setData] = useState([]);  // Initialize as an empty array
    const [loading, setLoading] = useState(true);

    const [loadingButton, setLoadingButton] = useState(false); // State for loading button

    useEffect(() => {
        setLoading(true);
        getData(`api/v1/National Journal/${year}/${vol}/${issue}`)
            .then((res) => {
                if (res && Array.isArray(res)) {
                    console.log({ res })
                    setData(res);
                } else {
                    // console.error("Invalid data format:", res);
                    // console.log(res)
                    setData([]);
                }
                
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setData([]);
            })
            .finally(() => setLoading(false));
    }, [year, vol, issue]);


    const handelDownloadMagazine = async () => {
        console.log("Downloading magazine...");
        setLoadingButton(true)

        try {
            // Make sure the function sends a correct request
            const response = await fetch(`http://13.234.119.217:5678/api/v1/downloadMagzine/${year}/${vol}/${issue}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Ensure it matches what the backend expects
                },
            });

            // Check if the response is successful
            if (!response.ok) {
                setLoadingButton(false)
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Ensure response is correctly interpreted as a Blob
            const blob = await response.blob();

            // Check if the response is actually a PDF (not an error response)
            if (blob.type !== "application/pdf") {
                setLoadingButton(false)
                throw new Error("Received data is not a valid PDF file.");
            }

            // Create a temporary URL for the Blob
            const url = window.URL.createObjectURL(blob);

            // Create a temporary anchor element to trigger the download
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `Magazine_${year}_${vol}_${issue}.pdf`);

            document.body.appendChild(link);
            link.click();

            // Cleanup
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

            console.log("Download successful!");
            setLoadingButton(false)
        } catch (error) {
            setLoadingButton(false)
            console.error("Error downloading magazine:", error);
        }
      //  setLoadingButton(false)
    };


    return (
        <div>
            <div>
                <Header />
  

                <div
                    style={{ background: 'lightgrey', color: 'black', width: '100%', height: 250, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom:5 }}
                >
                    <div style={{ fontSize: '2.5rem', fontWeight: 500, letterSpacing: 1.2 }}>NATIONAL JOURNAL</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 400, letterSpacing: 1.2 }}>{year} PUBLICATIONS - {vol} - {issue}</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 400 }}>Varsha National Research Journal</div>
                </div>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#f0f0f0' ,marginTop:7 }}>
         {/*   <Button onClick={handelDownloadMagazine} style={{ display: 'flex', marginLeft: 'auto', marginRight: '20px'}} variant="contained">Download Magazine</Button>       */}
         
         <LoadingButton
                            loading={loadingButton}
                            loadingPosition="start"
                            startIcon={<Download />}
                            variant="contained"
                            onClick={handelDownloadMagazine}
                            style={{ display: 'flex', marginLeft: 'auto', marginRight: '20px'}}
                        >
                            Download Magazine
                        </LoadingButton>
                {loading ? (
                    <p>Loading...</p>
                ) : data.length > 0 ? (
                    data.map((item, index) => (
                        <JournalDetails key={index} details={item} />
                    ))
                ) : (
                    <p>No data found.</p>
                )}
            </div>

            <Footer/>
        </div>
    );
};

export default ShowPage;
