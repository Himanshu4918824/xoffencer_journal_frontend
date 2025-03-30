import { Divider } from "@mui/material";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function AboutJournal()
{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return(<div>
        <div>
            <Header/>
        </div>

        <div style={{margin:20,padding:20,marginLeft:'10%',width:'81%',letterSpacing:0.3,color:'#47424c',fontSize:matches?16.5:16}}>

        <div style={{fontSize:matches?26:22,fontWeight:'bold',color:'#8395a7'}}>About The Journal</div>
        
        <div style={{marginTop:10}}>
            <p style={{marginBottom:matches?7:10}}>Varsha Research Organisation is a peer reviewed international open access online scholarly journal publishing innovative and creative technological research.</p>
            The journal was started in 2023 with an aim to provide an easy, open and affordable platform for the whole global community of researchers, engineers, students, developers etc.
            to publish and share their innovative and creative research work related to various engineering disciplines. We are determined to provide our services with the same basic aims 
            while also always improving our services, infrastructure, reach and scope.</div>

            <Divider style={{marginTop:20}}/>

            <div style={{fontSize:matches?26:22,fontWeight:'bold',color:'#8395a7',marginTop:5}}>Paper Publication Niche</div>

            <div style={{marginTop:8}}>
                <p style={{marginBottom:matches?7:10}}>Paper publication with us is very easy. Varsha Research Organisation being the research publication is providing the paper publication opportunity in multidisciplinary areas.</p>
                <p style={{marginBottom:matches?7:10}}>It has certain accountability to offer the equal opportunity to the scientific publishing society all over the world.</p>
                <p style={{marginBottom:matches?7:10}}>Varsha Research Organisation with its high ethics and aim has taken the responsibility to reach to the niche of the best research publishing experience for the authors.</p>
            </div>

            <Divider style={{marginTop:20}}/>

            <div style={{fontSize:matches?26:22,fontWeight:'bold',color:'#8395a7',marginTop:5}}>Scholarly Journal for Scientific Publication</div>

            <div style={{marginTop:8}}>
                <p style={{marginBottom:matches?7:10}}>The words Scholarly Journal for Scientific Publication define Varsha Research Organisation the best. Varsha Research Organisation being the online research journal in the territory of Engineering, Sciences, Technology, & Management is found suitable for high-quality paper publications in the field.</p>
                <p style={{marginBottom:matches?7:10}}>The online presence of the research journal fulfills the need of scholarly publishing with open access.</p>
            </div>

              <Divider style={{marginTop:20}}/>

            <div style={{fontSize:matches?26:22,fontWeight:'bold',color:'#8395a7',marginTop:5}}>Prestigious Editorial Board</div>

            <div style={{marginTop:8}}>
            Our editorial board is diverse, both in case of world region and knowledge. The board has people having many achievements, many years of experience and strong knowledge base in their respective fields.
            </div>


        </div>

        <div>
            <Footer/>
        </div>
    </div>)
}