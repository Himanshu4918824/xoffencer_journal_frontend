import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Category from "./components/admin/category/Category";
import DisplayAllCategory from "./components/admin/category/DisplayAllCategory";
import SubCategory from "./components/admin/subcategory/SubCategory"
import DisplayAllSubCategory from "./components/admin/subcategory/DisplayAllSubCategory";
import JournalForm from "./components/userinterface/journal/JournalForm";
import Homepage from "./components/userinterface/homepage/Homepage";
import NationalJournal from "./components/userinterface/nationaljournal/NationalJournal";
import JournalCertification from "./components/userinterface/journal/JournalCertification";
import Team from "./components/userinterface/edtiro/Team";
import MemberBoard from "./components/userinterface/edtiro/MemberBoard";
import Guidline from "./components/userinterface/guidlineoriginality/Guidline";
import DatasetRepositry from "./components/userinterface/dataset/DatasetRepositry";
import Contact from "./components/userinterface/homepage/Contact";
import AboutJournal from "./components/userinterface/about/AboutJournal";
import Indexing from "./components/userinterface/about/Indexing";
import Policy from "./components/userinterface/about/Policy";
import AboutUs from "./components/userinterface/about/AboutUs";

import ShowPage from "./components/userinterface/nationaljournal/ShowPage";
import Dashboard from "./components/admin/adminlogin/Dashboard";
import ShowDetails from "./components/admin/adminlogin/ShowDetails";
import UploadJournalForm from "./components/admin/adminlogin/UploadJournalForm";
import LoginPage from "./components/admin/adminlogin/LoginPage";
import AllConference from "./components/userinterface/conference/AllConference";
import ConferenceDetails from "./components/userinterface/conference/ConferenceDetails";
import ConferencePaper from "./components/userinterface/conference/ConferencePaper";
import ApplyForm from "./components/userinterface/conference/ApplyForm";  


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Category />} path="/category"></Route>
          <Route element={<DisplayAllCategory />} path="/displayAllCategory"></Route>
          <Route element={<SubCategory />} path="/subcategory"></Route>
          <Route element={<DisplayAllSubCategory />} path="/displayAllSubCategory"></Route>
          <Route element={<JournalForm />} path="/journalform"></Route>
          <Route element={<NationalJournal />} path="/nationaljournal"></Route>
          <Route element={<JournalCertification />} path="/journalcertification"></Route>
          <Route element={<Team />} path="/team"></Route>
          <Route element={<MemberBoard />} path="/memberboard"></Route>
          <Route element={<Guidline />} path="/guidline"></Route>
          <Route element={<DatasetRepositry />} path="/datasetrepositry"></Route>
          <Route element={<Homepage />} path="/"></Route>
          <Route element={<ShowPage />} path="/ShowJournal"></Route>
          <Route element={<Contact />} path="/contact"></Route>
          <Route element={<AboutJournal />} path="/aboutjournal"></Route>
          <Route element={<Indexing />} path="/indexing"></Route>
          <Route element={<Policy />} path="/policy"></Route>
          <Route element={<AboutUs />} path="/aboutus"></Route>


        <Route element={<Dashboard/>} path="/dashboard"></Route>
        <Route element={<ShowDetails/>} path="/showdetails/:id"></Route>
        <Route element={<UploadJournalForm/>} path="/uploadjournalform"></Route>
        <Route element={<LoginPage/>} path="/login"></Route>
        <Route element={<AllConference/>} path="/allconference"></Route>

           <Route element={<ConferenceDetails/>} path="/conferencedetails"></Route>
           <Route element={<ConferencePaper/>} path="/conferencepaper"></Route>
           <Route element={<ApplyForm/>} path="/applyform"></Route>
      </Routes>
    </Router>
    
    
   </div>
    
  );
}

export default App;
