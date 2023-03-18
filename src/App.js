import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route} from "react-router-dom";
import About from "./routes/about/about.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Requirements from "./routes/requirements/requirements.component";
import Contact from "./routes/contact/contact.component";
import Services from "./routes/services/services.component";
import Gallery from "./routes/gallery/gallery";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home />} />
                <Route path="Home" element={<Home />} />
                <Route path="Services" element={<Services />} />
                <Route path="Gallery" element={<Gallery />} />
                <Route path="About" element={<About />} />
                <Route path="Requirements" element={<Requirements />} />
                <Route path="Contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}
export default App;