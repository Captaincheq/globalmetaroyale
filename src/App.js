import React from "react";
import { Routes, Route} from "react-router-dom";
import About from "./routes/about/about.route";
import Home from "./routes/home/home.route";
import Navigation from "./routes/navigation/navigation.route";
import Requirements from "./routes/requirements/requirements.route";
import Contact from "./routes/contact/contact.route";
import Services from "./routes/services/services.route";
import Gallery from "./routes/gallery/gallery.route";
import RequirementsInfo from "./routes/requirementsInfo/requirementsInfo.route";
import './App.css'
import Blog from "./routes/blog/blog.route";
import Privacy from "./routes/privacy/Privacy";

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
                <Route path="RequirementsInfo" element={<RequirementsInfo />} />
                <Route path="Blog" element={<Blog />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Privacy" element={<Privacy />} />
            </Route>
        </Routes>
    );
}
export default App;