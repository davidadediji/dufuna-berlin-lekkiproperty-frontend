import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Card from "../components/card/Card";
import PageNav from "../components/page-nav/PageNav";
import { cards } from "../models/card";
import '../index.css'



const Home = ()=>{

    return(
           
            <div className="container">
            <div className="position-sticky-top">
                <Header/>
                <Navbar/>
            </div>
            <Card cards={cards}/>
            <div className="position-sticky-bottom">
                <PageNav/>
                <Footer/>
            </div>
            </div>
            
            
    )
}

export default Home;