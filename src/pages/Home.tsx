import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Card from "../components/card/Card";
import { cards } from "../models/card";



const Home = ()=>{

    return(
           
            <div className="container">
            <Header/>
            <Navbar/>
            <Card cards={cards}/>
            <Footer/>
            </div>
            
            
    )
}

export default Home;