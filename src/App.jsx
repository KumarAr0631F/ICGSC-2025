import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Guidelines from "./pages/Guidelines";
import ContactUs from "./pages/ContactUs";
import PatronsAndChairs from "./pages/PatronsAndChairs";
import AdvisoryCommittee from "./pages/AdvisoryCommittee";
import ConferenceSchedule from "./pages/ConferenceSchedule";
import OrganisingCommittee from "./pages/OrganisingCommittee";
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/schedule" element={<ConferenceSchedule />} />
        <Route path="/patrons" element={<PatronsAndChairs />} />
        <Route path="/organising-committee" element={<OrganisingCommittee />} />
        <Route path="/advisory-committee" element={<AdvisoryCommittee />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
