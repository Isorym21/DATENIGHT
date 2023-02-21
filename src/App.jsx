// Reacts Tools needed to route around the web app
import { Route, Routes } from "react-router-dom";

// The Containers for the Web App
import { Header } from "./containers/Header/Header.jsx";
import { WelcomeScreen } from "./containers/WelcomeScreen/WelcomeScreen.jsx";
import { Form } from "./containers/Form/Form.jsx";
import { DateOptions } from "./containers/DateOptions/DateOptions.jsx";
import { FinalDateInfo } from "./containers/FinalDateInfo/FinalDateInfo.jsx";
import { Footer } from "./containers/Footer/Footer.jsx";

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
