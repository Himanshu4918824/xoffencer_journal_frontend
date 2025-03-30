import Header from "../homepage/Header";
import Footer from "../homepage/Footer";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Indexing()
{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return(<div>
        <div>
            <Header/>
        </div>

        <div style={{margin:20,padding:20,marginLeft:'10%',width:'81%',letterSpacing:0.5,lineHeight:matches?1.7:1.6,color:'#47424c',fontSize:16.5}}>

        <div style={{fontSize:matches?28:24,fontWeight:'bold',color:'#8395a7'}}>What is Indexing ?</div>
        
        <div style={{marginTop:10}}>
            <p>
                Indexing in the context of academic journals refers to the process of making published articles accessible and
                discoverable on various reputable international online platforms. The primary goal of indexing is to enhance the
                visibility of research articles, thereby increasing their potential citations. This practice benefits researchers
                who can easily find and reference these articles for their own studies, fostering the advancement of knowledge. 
                At organization, we firmly embrace the principles of open access, ensuring that our published research articles
                are readily available to the global research community.
            </p>

            <p style={{marginTop:15}}>
                Numerous indexing services, both paid and unpaid, are available worldwide. These services play a crucial role in
                preserving and disseminating documents, ensuring that they remain accessible for future reference. Distinguished
                repositories of journal articles collaborate with universities, public libraries, and scientific institutions to 
                share valuable data. Meanwhile, open access repositories democratize access by providing information free of charge, 
                making knowledge universally accessible. When an article is indexed across various reputable platforms, it becomes a 
                point of reference for authors and is often cited in their scholarly works. The frequency of citations reflects the
                authenticity and impact of the published article, enhancing its reputation and scholarly influence.
            </p>

            <p style={{marginTop:15}}>
                Varsha Research Organization is dedicated to elevating the visibility and citations of its articles by strategically
                indexing them across a diverse range of reputable and established journal indexing platforms. Increased citations 
                contribute to the overall count of journal citations, a metric that plays a crucial role in determining the journal’s
                Impact Factor. The quality of a journal and its articles is often measured by the citations they accumulate. In this 
                regard, organization believes in fostering a culture of excellence and impact through diligent indexing practices.
            </p>

            <p style={{marginTop:15}}>
                We are proud to announce that varsha research organization is already indexed in several prominent international databases.
                You can verify our indexing status and explore the number of articles indexed by clicking on the logos provided on our 
                platform. Our dedicated team is committed to consistently submitting articles to these databases. Authors are kindly 
                requested to exercise patience for at least one month from the date of publication to check the indexing status of their
                articles. This process ensures that the articles receive the appropriate recognition and visibility they deserve in the 
                scholarly community.
            </p>

            <p style={{marginTop:15}}>
                In conclusion, indexing is a vital aspect of scholarly publishing, ensuring that research articles reach a wider 
                audience and contribute to the advancement of knowledge. At organization, we take great pride in our rigorous 
                indexing efforts, which play a pivotal role in enhancing the impact and credibility of our published articles 
                within the global research landscape.
            </p>

           </div>

            <div style={{marginTop:20}}>
                <img alt="fashion" src="fashion.png" style={{height:matches?600:300,width:'100%'}}/>
            </div>
        </div>

        <div>
            <Footer/>
        </div>



    </div>)
}