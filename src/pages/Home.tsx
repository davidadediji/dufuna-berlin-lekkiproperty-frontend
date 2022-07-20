import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Card from "../components/card/Card";
import { cards } from "../models/card";



const Home = ()=>{

    return(
           
            <div className="container">
            <Header/>
            <Card cards={cards}/>
            <Footer/>
            </div>
            
            
    )
}

export default Home;