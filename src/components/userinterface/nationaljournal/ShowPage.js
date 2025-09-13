import React, { useEffect, useState } from "react";
import { getData } from "../../../services/FetchNodeAdminServices";
import { useSearchParams } from "react-router-dom";
import JournalDetails from "./JournalDetails";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";
import LoadingButton from "@mui/lab/LoadingButton";
import { Download } from "@mui/icons-material";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader";
import BackDrop from "../Backdrop";

const ShowPage = () => {
    const [searchParams] = useSearchParams();
    const year = searchParams.get("year");
    const vol = searchParams.get("vol");
    const issue = searchParams.get("issue");

    const [data, setData] = useState([]); // journal articles
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadingButton, setLoadingButton] = useState(false);

    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    // Fetch data from API
    const fetchData = async (pageNum = 1) => {
        setLoading(true);
        try {
            const url = `National Journal/${year}/${issue}/?page=${pageNum}`;
            const res = await getData(url);

            if (res && res.data && res.pagination) {
                if (pageNum === 1) {
                    setData(res.data);
                } else {
                    setData((prev) => [...prev, ...res.data]); // append new data
                }
                setTotalResults(res.pagination.total);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            if (pageNum === 1) setData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setPage(1);
        fetchData(1); // initial fetch
    }, [year, vol, issue]);

    // Infinite scroll loader
    const fetchMoreData = async () => {
        const nextPage = page + 1;
        setPage(nextPage);
        await fetchData(nextPage);
    };

    // Download magazine
    const handelDownloadMagazine = async () => {
        console.log("Downloading magazine...");
        setLoadingButton(true);
        setOpen(true);
        try {
            const response = await fetch(
                `https://varsharesearchorganization.com/api/v1/downloadMagzine/${year}/${issue}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const blob = await response.blob();

            if (blob.type !== "application/pdf") {
                throw new Error("Received data is not a valid PDF file.");
            }

            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `Magazine_${year}_${vol}_${issue}.pdf`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

            console.log("Download successful!");
        } catch (error) {
            console.error("Error downloading magazine:", error);
        } finally {
            setLoadingButton(false);
            setOpen(false);
        }
    };

    return (
        <div>
            <Header />

            <div
                style={{
                    background: "lightgrey",
                    color: "black",
                    width: "100%",
                    height: 250,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginBottom: 5,
                }}
            >
                <div style={{ fontSize: "2.5rem", fontWeight: 500, letterSpacing: 1.2 }}>
                    NATIONAL JOURNAL
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: 400, letterSpacing: 1.2 }}>
                    {year} PUBLICATIONS - {issue}
                </div>
                <div style={{ fontSize: "1.1rem", fontWeight: 400 }}>
                    Varsha Research Organisation
                </div>
            </div>

            <div style={{ padding: "20px", backgroundColor: "#f0f0f0", marginTop: 7 }}>
                <LoadingButton
                    loading={loadingButton}
                    loadingPosition="start"
                    startIcon={<Download />}
                    variant="contained"
                    onClick={handelDownloadMagazine}
                    style={{ display: "flex", marginLeft: "auto", marginRight: "20px" }}
                >
                    Download Magazine
                </LoadingButton>
                <BackDrop open={open}/>
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchMoreData}
                    hasMore={data.length < totalResults}
                    loader={<Loader />}
                    style={{ overflow: "hidden" }}
                >
                    {loading && page === 1 ? (
                        <Loader />
                    ) : data.length > 0 ? (
                        data.map((item, index) => (
                            <JournalDetails key={index} details={item} />
                        ))
                    ) : (
                        <p>No data found.</p>
                    )}
                </InfiniteScroll>
            </div>

            <Footer />
        </div>
    );
};

export default ShowPage;
