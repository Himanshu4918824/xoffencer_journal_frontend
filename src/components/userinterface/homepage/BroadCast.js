import { Divider, Paper } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function BroadCast()
{

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));


    var data=[{picture:'article.png',name:'Article / Paper Consideration',info:'Plagiarism should not be more than 10%. Fonts should be in Time New Roman. Content should be in single or double column. Title Font Size 16, Sub-titles 14, Other Text 1'},
        {picture:'Disclaimer.png',name:'Disclaimer',info:'If copied or fully plagiarized unacceptable articles or research papers are submitted or if any real author or patent or copyright issue arises then Varsha Research Journals will never be responsible for any issue. Such articles will be deleted from the website with immediate effect. In such cases no fees will be refunded.'},
        {picture:'philosophy.png',name:'Refereed Journal',info:'All Research Articles are updated on Google Scholar and other specific research gateways with updated References to cite advance key features for future research work. It gives time saving and enhancement of innovative next step research in different fields of scientific approach.'},
        {picture:'star-certificates.png',name:'Peer Review Process',info:'In National Journals, we review the articles with systematic core process to provide the best content to the readers and researchers. An elite approach is adopted time to time for the publication of articles keeping significant relevant data for upcoming scholars.'}
    ]

    const showData=()=>{
        return data.map((item,i)=>{
            return(<div style={{margin:10,padding:10,marginTop:20,display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Paper elevation={6} style={{width:matches?600:300,height:matches?340:450,borderRadius:20,padding:16}}>

                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                        <div style={{marginTop:20}}> 
                            <img alt="" src={item.picture}/>
                        </div>

                        <div style={{fontSize:22,fontWeight:600,letterSpacing:1.2,textAlign:'center'}}>
                            {item.name}
                        </div>

                        <div style={{margin:10,fontSize:18,fontWeight:400,color:'#5f5f5f'}}>
                            {item.info}
                        </div>
                       
                    </div>

            </Paper>
            </div>)
        })
    }


    

    return(<div>
    <div style={{display:'flex',flexDirection:matches?'row':'column',justifyContent:'center',alignItems:'center'}}>
        <div style={{width:matches?600:330,height:'auto',background:'#f8f9fa',margin:10,padding:15}}>
            <div style={{fontSize:matches?20:18,fontWeight:'bold',marginBottom:15}}>
              Varsha Research Journal is now on the following research hub :
            </div>
 
            <div style={{margin:15}}>
                <ul>
                    <li>Core Review Methodology .</li>
                    <li style={{marginTop:5}}>Visibility in Google.</li>
                    <li style={{marginTop:5}}>Publon Author listing .</li>
                    <li style={{marginTop:5}}>IEEE Collabratec Inventory .</li>
                </ul>
        
            </div>

        </div>
        

        <div style={{width:matches?600:'100%',height:210,background:'lightgrey',margin:10,padding:15,fontSize:matches?20:18,fontWeight:400,marginLeft:matches?30:0}}>
            <div style={{margin:10,padding:10}}>
                <ol>
                    <li>Multidisciplinary Research Journal for all Subjects.</li>
                    <li style={{marginTop:12}}>Publication for all</li>
                    <li style={{marginTop:12}}>Comprehensive Publishing Support</li>
                </ol>
            </div>

            
        </div>
        
    </div>

    
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:30}}>
       <h2 style={{fontSize:24,fontWeight:500,letterSpacing:1.2}}>BROADCAST</h2> 
       <hr style={{width:'10%',height:5,background:'lightgray'}}/>
    </div>


       <div style={{marginTop:20,padding:15,display:'flex',flexDirection:matches?'row':'column',margin:20,justifyContent:'center',alignItems:'center'}}>
        <Paper elevation={6} style={{width:matches?350:'94%',height:'auto',borderRadius:20}}>
            
            <div style={{fontSize:24,fontWeight:500,letterSpacing:2,color:'#313131',marginLeft:'40%',padding:10}}>ISSN</div>

            <Divider/>

            <div style={{margin:10,fontSize:18,fontWeight:400,color:'grey',padding:3}}>
               2020-2024  National Journal
            </div>

           {/* <div style={{margin:10,fontSize:18,fontWeight:400,marginBottom:25,color:'#f0edea',padding:2}}>
            2020-2024  International Journal
            </div>
            */}

            <Divider height='10px'/>

            <div style={{margin:10,fontSize:16,fontWeight:400,color:'#6c757d',lineHeight:'25px',marginBottom:20,letterSpacing:1,padding:7}}>
             An ISSN is a unique identifier for serial publications, such as journals, magazines, newspapers, and other periodicals.
                Varsha Research Organization are categorized as 
                Varsha National Research Journal
                which maintains submissions from Indian author’s 
                selective research content.
            </div>

            <Divider style={{marginBottom:20}}/>

            <div><img alt="" src="pen.png" style={{width:40,height:40,marginLeft:'45%'}}/></div>

        </Paper>

               {/********************************Next paper******************************************/}

        <Paper elevation={6} style={{width:matches?350:'94%',height:'auto',borderRadius:20,marginLeft:matches?50:10,marginTop:matches?0:25}}>
            
            <div style={{fontSize:24,fontWeight:500,letterSpacing:2,color:'#313131',marginLeft:'10%',padding:10}}>Global Impact Factor</div>

            <Divider/>

           

            <div style={{margin:10,fontSize:16,fontWeight:500,color:'#6c757d',lineHeight:'25px',marginBottom:20,letterSpacing:1,padding:7}}>
                Humanities, Fine Arts, and Music 6.3 Management, 
                Commerce, Economics, Law 6.7 Life Science,
                Agriculture, Nursing, Medical and Bio 5.2
                Engineering and Science 5.7
            </div>

            <Divider style={{marginBottom:20,marginTop:'40%'}}/>

            <div><img alt="" src="pen.png" style={{width:40,height:40,marginLeft:'45%'}}/></div>

        </Paper>


        
               {/********************************Next paper******************************************/}

               <Paper elevation={6} style={{width:matches?350:'94%',height:'auto',borderRadius:20,marginLeft:matches?50:10,marginTop:matches?0:25}}>
            
            <div style={{fontSize:24,fontWeight:500,letterSpacing:2,color:'#313131',marginLeft:'23%',padding:10}}>We Help You</div>

            <Divider/>

            

            <div style={{margin:10,fontSize:16,fontWeight:400,color:'#6c757d',lineHeight:'25px',marginBottom:20,letterSpacing:1,padding:6}}>
            Conference Conduct Thesis Publication
             Conference Paper Publication Seminar Paper
              Publication Editorial Membership
            </div>

            <Divider style={{marginBottom:20,marginTop:'54%'}}/>

            <div><img alt="" src="pen.png" style={{width:40,height:40,marginLeft:'45%'}}/></div>

        </Paper>


       </div>

{/**********************************************************************************************************/}

       <div style={{background:'#F0F2F5',width:'100%',height:'auto',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
       {showData()}
       </div>
    

    </div>)
}