// Reacts Tools needed to route around the web app
import { Route, Routes } from "react-router-dom";

// The Components for the Web App
import { Header } from "./components/Header";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { Form } from "./components/Form";
import { DateOptions } from "./components/DateOptions";
import { FinalDateInfo } from "./components/FinalDateInfo";
import { Footer } from "./components/Footer";

// START OF THE APP
export function App() {
  return (
    <>
      {/* This section will contain a logo HOME |  About us |  Contact Us|*/}
      <Header />

      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/home" element={<WelcomeScreen />} />
        {/* Welcome hero image of our project/ brief desc of our project and a button to lead us to the form. */}

        <Route path="/form" element={<Form />} />
        {/* creates a route to the form */}

        <Route path="/dateOptions" element={<DateOptions />} />
        {/* Once data is put in the form and entered then Axios process API and results are routed to this component.*/}

        <Route path="/finalDateInfo" element={<FinalDateInfo />} />
        {/* After choosing a date then option will be routed to the final date info compoenet.*/}
      </Routes>

      {/* Form to contact us + copyright  */}
      <Footer />
    </>
  );
}
