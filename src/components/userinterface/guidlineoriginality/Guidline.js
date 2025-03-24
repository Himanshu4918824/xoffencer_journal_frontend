import { Divider } from "@mui/material";
import Header from "../homepage/Header";
import Footer from "../homepage/Footer";

export default function Guidline()
{
   // alert("svsv:",remove)
    return(<div>
        <div>
            <Header/>
        </div>

        <div style={{background: 'lightgrey',color:'black',width:'100%',height:250,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginBottom:40}}> 
           <div style={{fontSize:'2.2rem',fontWeight:500,letterSpacing:1.2}}>AUTHER & REVIEWER GUIDLINES</div> 
       </div>

       <div style={{margin:10,padding:10,width:'80%',marginLeft:'10%'}}>
        <div style={{fontSize:16,fontWeight:400,letterSpacing:0.30,color:'#47424c'}}>
            <ol style={{listStyle:'none'}}>
                <li>These guidelines are intended to give you the information needed to submit your paper to the VARSHA JOURNALS and present it in accordance with our requirements.</li>
                <li style={{marginTop:7}}> Pre-Selection</li>
                <li style={{marginTop:7}}> All papers are pre-screened to ensure that your manuscript satisfies the following points:</li>
            </ol>
        </div>

        <Divider style={{marginTop:20}}/>

        <div style={{fontSize:16,fontWeight:400,letterSpacing:0.30,color:'#47424c'}}>
            <ol style={{listStyle:'none'}}>
                <li style={{fontSize:26,fontWeight:'bold',color:'#8395a7'}}>Plagiarism:</li>
                <li style={{marginTop:7}}>Only below 10% plagiarism will be accepted.</li>
            </ol>
        </div>

        <Divider style={{marginTop:20}}/>

        <div style={{fontSize:16,fontWeight:400,letterSpacing:0.30,color:'#47424c'}}>
            <ol style={{listStyle:'none'}}>
                <li style={{fontSize:26,fontWeight:'bold',color:'#8395a7'}}>Originality:</li>
                <li style={{marginTop:7}}>is the work scientifically rigorous, accurate and novel? Does the work contain significant additional material to that already published? Has its value been demonstrated?</li>
            </ol>
        </div>

        <Divider style={{marginTop:20}}/>

        <div style={{fontSize:16,fontWeight:400,letterSpacing:0.30,color:'#47424c'}}>
            <ol style={{listStyle:'none'}}>
                <li style={{fontSize:26,fontWeight:'bold',color:'#8395a7'}}>Submission:</li>
                <li style={{marginTop:7}}>is the material appropriate to the scope of the journal to which it is submitted? research paper will be submitted online in only in doc word file format</li>
            </ol>
        </div>

        <Divider style={{marginTop:20}}/>

        <div style={{fontSize:16,fontWeight:400,letterSpacing:0.30,color:'#47424c'}}>
            <ol style={{listStyle:'none'}}>
                <li style={{fontSize:26,fontWeight:'bold',color:'#8395a7'}}>Multidisciplinary:</li>
                <li style={{marginTop:7}}>Research Articles/ Papers of any subject can be submitted for publication.</li>
            </ol>
        </div>

        <Divider style={{marginTop:20}}/>

        <div style={{fontSize:16,fontWeight:400,letterSpacing:0.30,color:'#47424c'}}>
            <ol style={{listStyle:'none'}}>
                <li style={{fontSize:26,fontWeight:'bold',color:'#8395a7'}}>Motivation::</li>
                <li style={{marginTop:7}}>does the problem considered have a sound motivation? Does the paper clearly demonstrate the scientific interest of the results?</li>
            </ol>
        </div>

        <Divider style={{marginTop:20}}/>

        <div style={{fontSize:16,fontWeight:400,letterSpacing:0.30,color:'#47424c'}}>
            <ol style={{listStyle:'none'}}>
                <li style={{fontSize:26,fontWeight:'bold',color:'#8395a7'}}>Referencing:</li>
                <li style={{marginTop:7}}>has reference been made to the most recent and most appropriate work? Is the present work set in the context of the previous work?</li>
            </ol>
        </div>

        <Divider style={{marginTop:20}}/>

        <div style={{fontSize:16,fontWeight:400,letterSpacing:0.30,color:'#47424c'}}>
            <ol style={{listStyle:'none'}}>
                <li style={{fontSize:26,fontWeight:'bold',color:'#8395a7'}}>Clarity:</li>
                <li style={{marginTop:7}}>is the English clear and well written? Poorly written English may obscure the scientific merit of your paper. Are the ideas expressed clearly and concisely? Are the concepts understandable?</li>
            </ol>
        </div>

        <Divider style={{marginTop:20}}/>

        <div style={{fontSize:16,fontWeight:400,letterSpacing:0.30,color:'#47424c'}}>
            <ol style={{listStyle:'none'}}>
                <li style={{fontSize:26,fontWeight:'bold',color:'#8395a7'}}>Structure:</li>
                <li style={{marginTop:7}}>Last, F. M., & Last, F. M. (Year Published). Article title. Journal Name, Volume(Issue), pp. Pages.</li>
            </ol>
        </div>

        <Divider style={{marginTop:20}}/>

        <div style={{fontSize:16,fontWeight:400,letterSpacing:0.30,color:'#47424c'}}>
            <ol style={{listStyle:'none'}}>
                <li style={{fontSize:26,fontWeight:'bold',color:'#8395a7'}}>Conference paper:</li>
                <li style={{marginTop:7}}>Structure</li>
                <li style={{marginTop:7}}>Last name, FM. (Year published). Title of Paper or Proceedings, Title of Conference, Location, Date. Place of publication: Publisher.</li>
                <li style={{marginTop:7}}>Example</li>
                <li style={{marginTop:7}}>Cloyd, AM. (2014). Surveying students: A look at citation habits of college students, presented at EasyBib Info Lit Conference, New York City, 2014. New York, NY: EasyBib Publishing.</li>
            </ol>
        </div>

        <Divider style={{marginTop:20}}/>

        <div style={{fontSize:16,fontWeight:400,letterSpacing:0.30,color:'#47424c'}}>
            <ol style={{listStyle:'none'}}>
                <li style={{fontSize:26,fontWeight:'bold',color:'#8395a7'}}>Book, book chapter and manual</li>
                <li style={{marginTop:7}}>Structure</li>
                <li style={{marginTop:7}}>Last, F. M. (Year Published) Book. City, State: Publisher..</li>
                <li style={{marginTop:7}}>Example</li>
                <li style={{marginTop:7}}>Rowling, J.K. (2001). Harry Potter and the socerer's stone. London: Bloomsburg Children's.</li>
            </ol>
        </div>

        <Divider style={{marginTop:20}}/>

        <div style={{fontSize:16,fontWeight:400,letterSpacing:0.30,color:'#47424c'}}>
            <ol style={{listStyle:'none'}}>
                <li style={{fontSize:26,fontWeight:'bold',color:'#8395a7'}}>Thesis:</li>
                <li style={{marginTop:7}}>Abbott, N.L.: ‘The title of the thesis’. PhD thesis, XYZ University, 2005</li>
               
            </ol>
        </div>

        <Divider style={{marginTop:20}}/>

        <div style={{fontSize:16,fontWeight:400,letterSpacing:0.30,color:'#47424c'}}>
            <ol style={{listStyle:'none'}}>
                <li style={{fontSize:26,fontWeight:'bold',color:'#8395a7'}}>Copyright:</li>
                <li style={{marginTop:7}}>Completed 'Publication Agreement and Assessment of Copyright' and 'Statement of Originality' forms are required for all papers. These should be emailed, posted or faxed to the Editorial Office (address given on the form) once you have uploaded your paper.</li>
                <li style={{marginTop:5}}>The forms should be signed by all authors. If this is not practical, the corresponding author may sign on behalf of all authors.</li>
                <li style={{marginTop:5}}>If you wish to make use of previously published illustrations, diagrams or photographs in your paper, you must first obtain the written permission of the copyright holder concerned (usually the publisher) before incorporating the work in your article. The source of the material must also be acknowledged in full.</li>
            </ol>
        </div>

        <Divider style={{marginTop:20}}/>





       </div>

       <div>
         <Footer/>
       </div>

    </div>)
}