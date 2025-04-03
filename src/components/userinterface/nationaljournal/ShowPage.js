import React, { useEffect, useState } from "react";
import { getData } from "../../../services/FetchNodeAdminServices";
import { useSearchParams } from "react-router-dom";
import JournalDetails from "./JournalDetails";
import Header from "../homepage/Header";
import { Button } from "@mui/material";
import Footer from "../homepage/Footer";

const ShowPage = () => {
    const [searchParams] = useSearchParams(); // This returns a URLSearchParams object
    const year = searchParams.get("year");
    const vol = searchParams.get("vol");
    const issue = searchParams.get("issue");


    const [data, setData] = useState([]);  // Initialize as an empty array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getData(`api/v1/National Journal/${year}/${vol}/${issue}`)
            .then((res) => {
                if (res && Array.isArray(res)) {
                    // console.log({ res })
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

    return (
        <div>
            <div>
                <Header />
  

                <div
                    style={{ background: 'lightgrey', color: 'black', width: '100%', height: 250, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom:5 }}
                >
                    <div style={{ fontSize: '2.5rem', fontWeight: 500, letterSpacing: 1.2 }}>NATIONAL JOURNAL</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 400, letterSpacing: 1.2 }}>{year} PUBLICATIONS - {vol} - {issue}</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 400 }}>Airo National Research Journal ISSN 2321-3914</div>
                </div>
            </div>
            <Button style={{ display: 'flex', marginLeft: 'auto', marginRight: '20px'}} variant="contained">Dwonload Magazine</Button>
            <div style={{ padding: '20px', backgroundColor: '#f0f0f0' ,marginTop:7 }}>
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
