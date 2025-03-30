import Footer from "../homepage/Footer";
import Header from "../homepage/Header";
import { Divider, Grid } from "@mui/material";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Policy()
{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return(<div>
        <div>
            <Header/>
        </div>

         <div style={{margin:20,padding:20,marginLeft:'10%',width:'80%',letterSpacing:0.3,color:'#47424c',fontSize:16.5,lineHeight:1.4}}>

        <div style={{fontSize:26,fontWeight:'bold',color:'#8395a7',marginBottom:20}}>Publication Ethics Policy</div>

        <Grid container letterSpacing={0.3}>
            <Grid item xs={matches?9:12}>
                <p>
                    Ethical standards for publication exist to ensure reliable & high-quality scientific research publications, 
                    public trust in scientific findings, and that researchers receive credit for their work & ideas.
                </p>

                <p style={{marginTop:10}}>
                   Varsha Research Organization follows strict Code of Conduct and aims to adhere to its Best Practice Guidelines.

                </p>

            </Grid>

            <Grid item xs={matches?3:12}>
                <img alt="rule" src="rule.png"/>
            </Grid>
        </Grid>  

            <Divider style={{marginTop:20}}/>

             <div style={{fontSize:26,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Authorship And Originality</div>

            <div style={{marginTop:8}}>
                At organization, we value and prioritize originality in research. All submitted manuscripts must be the original 
                work of the authors, and proper credit should be given to the contributions of others. Plagiarism in any form is
                strictly prohibited. We encourage authors to appropriately cite and reference the work of others.
            </div>

            <Divider style={{marginTop:20}}/>

            <div style={{fontSize:26,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Plagiarism</div>

            <div style={{marginTop:8}}>
                Plagiarism is a grave violation of academic and research integrity. our organization strictly prohibits the 
                submission of plagiarized content. Authors are required to ensure that their submitted work is original and properly
                attributed to the original sources when using others’ ideas, text, or research findings. We utilize advanced plagiarism 
                detection tools to scrutinize submissions and ensure the authenticity of the content.
            </div>

            <Divider style={{marginTop:20}}/>
            

            <div style={{fontSize:26,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Data Integrity and Reproducibility</div>

            <div style={{marginTop:8}}>
                We emphasize the importance of data integrity and reproducibility. Authors are encouraged to provide accurate and complete
                data, methodologies, and relevant details to facilitate the reproducibility of their research.Proper documentation
                of methods and data sources is essential to maintain the credibility of published work.
            </div>

            <Divider style={{marginTop:20}}/>
            

            <div style={{fontSize:26,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Data Fabrication & Falsification</div>

            <div style={{marginTop:8}}>
                Submitted manuscripts that are found to have either fabricated or falsified experimental results, including the manipulation 
                of images, will incur data fabrication and falsification penalty.
            </div>

            <Divider style={{marginTop:20}}/>

            <div style={{fontSize:26,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Corrections And Retractions</div>

            <div style={{marginTop:8}}>
                In cases of errors or inaccuracies in published articles, varsha research organization  is committed to promptly
                addressing the issue. Authors are encouraged to cooperate with the editorial team to correct any mistakes. 
                In instances of serious ethical violations or misconduct, we follow established guidelines for article retractions.
            </div>

            <Divider style={{marginTop:20}}/>

            <div style={{fontSize:26,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Reviewers</div>

            <div style={{marginTop:8}}>
                <p>
                   Maintain the confidentiality of the review process
                </p>
                
                <p  style={{marginTop:10}}>
                   Immediately alert their journal editor of any real or potential competing interest that could affect the 
                   impartiality of their reviewing and decline to review where appropriate
                </p>

                <p  style={{marginTop:10}}>
                   Conduct themselves fairly and impartially
                </p>

                <p  style={{marginTop:10}}>
                   We are aware, of course, that academics will come from a particular school of thought and/or may have strong
                   ties to a particular interest. All we ask is that reviewers strive to act fairly. If in doubt about whether 
                   a conflict exists, a reviewer should be transparent and seek the views of the journal editor.
                </p>

            </div>

            <Divider style={{marginTop:20}}/>
            
            <div style={{fontSize:26,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Editor</div>

            <div style={{marginTop:8}}>
                <p>
                    Keep and support ethical rules for their magazines that are consistent
                </p>
                
                <p  style={{marginTop:10}}>
                    Supervise and act as needed to make sure these rules are followed in a fair and uniform way
                </p>

                <p  style={{marginTop:10}}>
                    Make sure that the review method is kept secret.
                </p>

                <p  style={{marginTop:10}}>
                    Apply the highest standards of personal integrity in their work as editor of the journal, recognizing and 
                    planning for situations where they could have a competing interest or the look of a competing interest
                </p>

                <p  style={{marginTop:10}}>
                   Work with writers, readers, and Editorial Board members as needed to make sure they know enough about the ethics
                   and publishing policies of their journals and that the journal’s ethical care is fair, unbiased, and timely.
                </p>

            </div>

            <Divider style={{marginTop:20}}/>

            <div style={{fontSize:26,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Peer Reviewer Guidelines</div>

            <div style={{marginTop:8}}>
                Our peer reviewers play a crucial role in upholding the standards of varsha research organization. We carefully
                select expert reviewers who provide insightful feedback to authors. Reviewers are expected to maintain 
                confidentiality, declare any conflicts of interest, and evaluate manuscripts objectively. Their expertise ensures
                the thorough evaluation of submitted work.
            </div>

            <Divider style={{marginTop:20}}/>

            <div style={{fontSize:26,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Diversity and Inclusion</div>

            <div style={{marginTop:8}}>
                We embraces diversity in all forms. We encourage submissions from researchers worldwide, regardless of their 
                background, affiliation, or nationality. Our commitment to inclusion extends to both authors and reviewers, 
                fostering a diverse and global research community.
            </div>

            <Divider style={{marginTop:20}}/>

            <div style={{fontSize:26,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Community Engagement</div>

            <div style={{marginTop:8}}>
               Our organization values the engagement of researchers, academics, and readers within our community. We encourage
               meaningful discussions, knowledge sharing, and collaborations among members of the organization community. Our
               interactive platform facilitates constructive dialogue to advance research fields.
            </div>

            <Divider style={{marginTop:20}}/>

            
             <div style={{fontSize:26,fontWeight:'bold',color:'#8395a7',marginTop:7}}>Continuous Improvement</div>

            <div style={{marginTop:8}}>
                We are dedicated to continuous improvement in our publication ethics policies and processes. organization team regularly 
                reviews and updates its policies to align with evolving industry standards and best practices. We welcome feedback from
                authors, reviewers, and readers to enhance our practices further.
            </div>

            <Divider style={{marginTop:20}}/>
                
        </div>

        <div>
            <Footer/>
        </div>
        
    </div>)
}