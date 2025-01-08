import "./App.css";
import "boxicons";
import Navbar from "@components/Navbar";
import Hero from "@sections/Hero";
import Intro from "@sections/Intro";
import Video from "@sections/Video";
import Attractions from "@sections/Attractions";
import Food from "@sections/Food";
import Hotel from "@sections/Hotel";
import Contact from "@sections/Contact";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Intro />
            <Video />
            <Attractions />
            <Food />
            <Hotel />
            <Contact />
        </>
    );
}

export default App;
