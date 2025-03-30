import React, { useEffect, useState } from "react";
import { getData } from "../../../services/FetchNodeAdminServices";
import { useSearchParams } from "react-router-dom";
import JournalDetails from "./JournalDetails";

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

    return (
        <div>
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
    );
};

export default ShowPage;
