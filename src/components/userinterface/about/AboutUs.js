import Footer from "../homepage/Footer";
import Header from "../homepage/Header";
import { Divider, Grid } from "@mui/material";
import logo from '../../../assets/logo.png';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Table from "../homepage/Table";
export default function AboutUs()
{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return(<div>
        <div>
            <Header/>
        </div>

         <div style={{margin:20,padding:20,marginLeft:'10%',width:'80%',letterSpacing:0.3,color:'#47424c',fontSize:matches?16.6:16,lineHeight:1.5}}>

        <div style={{fontSize:matches?28:24,fontWeight:'bold',color:'#8395a7',marginBottom:20}}>About US</div>
        <div style={{fontSize:matches?19.5:17,fontWeight:700,marginBottom:12}}><p>Welcome to VARSHA RESEARCH ORGANIZATION </p><p style={{fontSize:matches?18:16,fontWeight:630}}>Your Source for Knowledge and Insight</p></div>

        <Grid container letterSpacing={0.3}>

             <Grid item xs={matches?3:12}>
                <img alt="varsha" src={logo} style={{width:230,height:180}}/>
            </Grid>


            <Grid item xs={matches?9:12}>
                <p style={{marginTop:10,lineHeight:1.5}}>
                   At Organization, we are dedicated to bringing you a world of knowledge, insights, and inspiration.
                   As a hub for thought-provoking articles, cutting-edge research, and meaningful discussions, we strive to
                    provide you with a platform that both informs and engages.

                </p>

            </Grid>

           
        </Grid>  

            <Divider style={{marginTop:20}}/>

             <div style={{fontSize:matches?26:24,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Explore Our Wide Range of Topics</div>

            <div style={{marginTop:8}}>
               Whether you’re a passionate researcher, a curious mind, or an industry professional, Varsha research organization
               is here to cater to your intellectual appetite. Our diverse array of topics spans across various domains, including:
            </div>

            <div style={{marginTop:10}}>
                <ul style={{listStyle:'none'}}>
                    <li><b>Technology and Innovation:</b> Delve into the latest advancements in technology, explore emerging trends, and discover how they are shaping our world.</li>
                    <li style={{marginTop:7}}><b>Science and Research:</b> Stay updated on groundbreaking scientific discoveries, from space exploration to advancements in medicine.</li>
                    <li style={{marginTop:7}}><b>Business and Economics:</b> Gain insights into the world of commerce, entrepreneurship, and economic developments that impact our global landscape.</li>
                    <li style={{marginTop:7}}><b>Arts and Culture:</b> Immerse yourself in the world of creativity, from literature and music to visual arts and cultural phenomena.</li>
                    <li style={{marginTop:7}}><b>Social Issues and Impact:</b> Engage with thought-provoking discussions about societal challenges, activism, and positive change.</li>
                </ul>
            </div>

            <Divider style={{marginTop:20}}/>

            <div style={{fontSize:matches?26:24,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Why Choose Varsha Research Organization ?</div>

            <div style={{marginTop:10}}>
                <ul style={{listStyle:'none'}}>
                    <li><b>Expertise:</b>Our team of seasoned writers and researchers is dedicated to delivering accurate, well-researched, and thoughtfully crafted content.</li>
                    <li style={{marginTop:7}}><b>Community</b> Join a vibrant community of like-minded individuals who share your passion for learning and exploration.</li>
                    <li style={{marginTop:7}}><b>Fresh Perspectives:</b> Discover new viewpoints and broaden your horizons through our carefully curated content.</li>       
                </ul>
            </div>

            <Divider style={{marginTop:20}}/>
            

            <div style={{fontSize:matches?26:24,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Fair Handling and Transparency in Fees</div>

           <p style={{marginTop:10}}>
                Varsha research organization  is a self supporting organization and does not receive funding from any
                institution/government. Hence, the operation of the Journal is solely financed by the handling fees received
                from authors. The handling fees are required to meet operations expenses such as employees’ salaries, internet
                services, electricity etc. Being an Open Access Publisher our organization does not receive payment for 
                subscription as the journals are freely accessible over the internet.
           </p>

           <p style={{marginTop:8}}>
                 At organization we champion equitable practices. We acknowledge the efforts authors invest in producing 
                 high-quality research, which is why we require a fair handling fee for processing accepted manuscripts. It’s 
                 important to note that we do not impose any submission charges. Authors only need to make a payment once their 
                 manuscripts have successfully undergone our rigorous peer-review process and have been accepted for publication.
           </p>

            <Divider style={{marginTop:20}}/>
            

            <div style={{fontSize:matches?26:24,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Ignite Your Inquisitiveness</div>

            <div style={{marginTop:10}}>
               <p>
                   We encourage you to become an active participant in the organization community. Share your thoughts, engage 
                   in discussions, and contribute your own insights to our growing knowledge base.
               </p>

               <p style={{marginTop:8}}> 
                   Thank you for choosing Varsha research organizaion  as your go-to source for intellectual growth. Together, 
                   let’s embark on a journey of discovery, enlightenment, and empowerment.
               </p>

            </div>

            <Divider style={{marginTop:20}}/>
</div>

<div style={{margin:20,padding:20,marginLeft:'10%',width:'80%',letterSpacing:0.3,lineHeight:1.5}}>
    <Table/>
</div>

        <div>
            <Footer/>
        </div>
        
    </div>)
}