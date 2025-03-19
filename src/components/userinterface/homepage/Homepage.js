import Footer from "./Footer";
import Header from "./Header";
import OfferScroll from "./OfferScroll"

export default function Homepage(props)
{
    return(<div>
        <div>
            <Header/>
        </div>

        <div style={{margin:40}}>
            <OfferScroll/>
        </div>
       
    </div>)
}