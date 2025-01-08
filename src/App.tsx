import "./App.css";
import "boxicons";
import Hero from "@sections/Hero";
import Intro from "@sections/Intro";
import Video from "@sections/Video";
import Attractions from "@sections/Attractions";
import Food from "@sections/Food";
import Hotel from "@sections/Hotel";

function App() {
    return (
        <>
            <Hero/>
            <Intro/>
            <Video/>
            <Attractions/>
            <Food/>
            <Hotel/>
        </>
    );
}

export default App;
