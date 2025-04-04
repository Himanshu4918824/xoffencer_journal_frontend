import Header from "../homepage/Header";
import Footer from "../homepage/Footer";
import { useEffect, useState } from "react";
import { getData } from "../../../services/FetchNodeAdminServices";

import { Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Card Component
const Card = ({ item, onClick }) => {
    return (
        <div style={{ margin: 10, padding: 10 }}>
            <Paper
                elevation={9}
                onClick={() => onClick(item)} // Handle Click
                style={{ width: 350, height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: "pointer" }}
            >
                <div style={{ fontSize: 22, fontWeight: 600, color: '#576574' }}>{item}</div>
            </Paper>
        </div>
    );
};

export default function NationalJournal() {
    const navigate = useNavigate(); // Hook for navigation
    const [data, setData] = useState([]); // Holds the fetched data
    const [loading, setLoading] = useState(false); // Loading state
    const [path, setPath] = useState([]); // Stores navigation path (year → volume → issue)
    const [currentLevel, setCurrentLevel] = useState("year"); // Track current data level

    // Function to Fetch Data
    const fetchData = async (endpoint) => {
        setLoading(true);
        setData([]); // Clear previous data
        try {
            const result = await getData(endpoint);
            if (Array.isArray(result)) {
                setData(result);
                // console.log("New Data:", result);
            } else {
                // console.error("Expected an array but received:", result);
                setData([]);
            }
        } catch (error) {
            console.error("API Error:", error);
            setData([]);
        }
        setLoading(false);
    };

    // Fetch Initial Data (Years)
    useEffect(() => {
        fetchData("api/v1/National Journal")
    }, []);

    // Handle Card Click - Move to Next Level
    const handleCardClick = (item) => {

        // console.log("Clicked:", item);

        // Update the path for navigation
        const newPath = [...path, item];
        setPath(newPath);

        // Determine the next API call based on current level
        let nextLevel, apiEndpoint;

        if (currentLevel === "year") {
            nextLevel = "volume";
            apiEndpoint = `api/v1/National Journal/${encodeURIComponent(item)}`;
        } else if (currentLevel === "volume") {
            nextLevel = "issue";
            apiEndpoint = `api/v1/National Journal/${path[0]}/${encodeURIComponent(item)}`;
        } else if (currentLevel === "issue") {
            nextLevel = "result";
            apiEndpoint = null;
            navigate(`/ShowJournal?year=${path[0]}&vol=${path[1]}&issue=${item}`); // Navigate to the show page

        } else {
            return; // Stop if at the final result level
        }

        setCurrentLevel(nextLevel);
        fetchData(apiEndpoint);
    };

    // Handle Back Navigation
    const handleBack = () => {
        if (path.length === 0) return; // No back if at the top level

        const newPath = [...path];
        newPath.pop(); // Remove the last item
        setPath(newPath);

        // Determine previous level and API endpoint
        let prevLevel, apiEndpoint;

        if (newPath.length === 0) {
            prevLevel = "year";
            apiEndpoint = "api/v1/National Journal";
        } else if (newPath.length === 1) {
            prevLevel = "volume";
            apiEndpoint = `api/v1/National Journal/${newPath[0]}`;
        } else if (newPath.length === 2) {
            prevLevel = "issue";
            apiEndpoint = `api/v1/National Journal/${newPath[0]}/${newPath[1]}`;
        }

        setCurrentLevel(prevLevel);
        fetchData(apiEndpoint);
    };

    return (
        <div>
            <Header />

            <div
                style={{ background: 'lightgrey', color: 'black', width: '100%', height: 250, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            >
                <div style={{ fontSize: '2.5rem', fontWeight: 500, letterSpacing: 1.2 }}>NATIONAL JOURNAL</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 400 }}>Airo National Research Journal ISSN 2321-3914</div>
            </div>

            {/* Back Button */}


            {/* Loading Indicator */}
            {loading && <div style={{ textAlign: "center", marginTop: 20 }}>Loading...</div>}

            {/* Card List */}
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 20, justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                {data.map((item, index) => (
                    <Card key={index} item={item} onClick={handleCardClick} />
                ))}
            </div>
            {path.length > 0 && (
                <div style={{ textAlign: "center", marginTop: 10, marginBottom: 20 }}>
                    <Button variant="contained" color="primary" onClick={handleBack}>
                        Back
                    </Button>
                </div>
            )}
            <Footer />
        </div>
    );
}
