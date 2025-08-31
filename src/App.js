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
        </Routes>
      </Router>

    </div>

  );
}

export default App;
