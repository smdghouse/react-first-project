import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/footer"
import Contact from "./components/contact.jsx"
import Service from "./components/Service.jsx"
import "./style/app.scss"
import "./style/header.scss"
import "./style/home.scss"
import "./style/footer.scss"
import "./style/contact.scss"
import "./style/mediaquery.scss"
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
      <Footer />
    </Router>
 );
}

export default App;
