import BroadCast from "./BroadCast";
import Body from "./BroadCast";
import Footer from "./Footer";
import Header from "./Header";
import OfferScroll from "./OfferScroll"

export default function Homepage(props)
{
    return(<div>
        <div>
            <Header/>
        </div>

        <div style={{margin:50}}>
            <OfferScroll/>
        </div>

        <div style={{marginTop:60}}>
            <BroadCast/>
        </div>

        <div style={{marginTop:50}}>
            <Footer/>
        </div>


       
    </div>)
}