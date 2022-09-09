import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AddPost } from "./pages/AddPost/AddPost";

function App() {
    return (
        <div className="App">
			<Header />
			<Routes>
                <Route path="/" element= {<Home/>}/>
                <Route path="/add-post" element= {<AddPost/>}/>
            </Routes>

			<Footer />
        </div>
    );
}

export default App;
