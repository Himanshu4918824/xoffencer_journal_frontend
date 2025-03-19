import { Divider, Paper } from "@mui/material";

export default function BroadCast()
{
    var data=[{picture:'article.png',name:'Article / Paper Consideration',info:'Plagiarism should not be more than 10%. Fonts should be in Time New Roman. Content should be in single or double column. Title Font Size 16, Sub-titles 14, Other Text 1'},
        {picture:'Disclaimer.png',name:'Disclaimer',info:'If copied or fully plagiarized unacceptable articles or research papers are submitted or if any real author or patent or copyright issue arises then Airo Journals will never be responsible for any issue. Such articles will be deleted from the website with immediate effect. In such cases no fees will be refunded.'},
        {picture:'philosophy.png',name:'Refereed Journal',info:'All Research Articles are updated on Google Scholar and other specific research gateways with updated References to cite advance key features for future research work. It gives time saving and enhancement of innovative next step research in different fields of scientific approach.'},
        {picture:'star-certificates.png',name:'Peer Review Process',info:'In both International and National Journals, we review the articles with systematic core process to provide the best content to the readers and researchers. An elite approach is adopted time to time for the publication of articles keeping significant relevant data for upcoming scholars.'}
    ]

    const showData=()=>{
        return data.map((item,i)=>{
            return(<div style={{margin:10,padding:10,marginTop:40}}>
                <Paper elevation={6} style={{width:600,height:300,borderRadius:20,marginLeft:'18%'}}>

                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                        <div style={{marginTop:20}}> 
                            <img src={item.picture}/>
                        </div>

                        <div style={{fontSize:22,fontWeight:600,letterSpacing:1.2}}>
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
    <div style={{display:'flex',marginLeft:60}}>
        <div style={{width:'40%',height:160,background:'#f8f9fa',marginLeft:30,margin:10,padding:15}}>
            <div style={{fontSize:20,fontWeight:'bold',marginBottom:15}}>
               Airo National and International Journal is now on the following research hub :
            </div>

            
            <div>
                1.  Core Review Methodology .
            </div>

            <div>
                2. Visibility in Google.
            </div>

            <div>
                3. Publon Author listing .
            </div>

            <div>
                4. IEEE Collabratec Inventory .
            </div>

        </div>
        

        <div style={{width:'40%',height:160,background:'lightgrey',marginLeft:45,margin:10,padding:15,fontSize:20,fontWeight:400}}>
            <div style={{margin:10}}>
                1. Multidisciplinary Research Journal for all Subjects .
            </div>

            <div style={{margin:10}}>
                2. Publication for all
            </div>

            <div style={{margin:10}}>
                3. Comprehensive Publishing Support
            </div>
        </div>
        
    </div>

    
    <div>
       <h2 style={{marginLeft:'42%',fontSize:24,fontWeight:500,letterSpacing:1.2}}>BROADCAST</h2> 
       <hr style={{width:'8%',height:5,background:'lightgray',marginRight:'49%'}}/>
    </div>


       <div style={{marginTop:30,padding:15,display:'flex',margin:20,marginLeft:'10%'}}>
        <Paper elevation={6} style={{width:350,height:400,borderRadius:20}}>
            
            <div style={{fontSize:24,fontWeight:500,letterSpacing:2,color:'#313131',marginLeft:'40%',padding:10}}>ISSN</div>

            <Divider/>

            <div style={{margin:10,fontSize:18,fontWeight:400,color:'#f0edea'}}>
               2020-2024  National Journal
            </div>

            <div style={{margin:10,fontSize:18,fontWeight:400,marginBottom:25,color:'#f0edea'}}>
            2020-2024  International Journal
            </div>

            <Divider height='10px'/>

            <div style={{margin:10,fontSize:16,fontWeight:400,color:'#6c757d',lineHeight:'25px',marginBottom:20,letterSpacing:1}}>
                Airo Journals are categorized in two publication gateways.
                Airo National Research Journal and Airo International Journal
                which maintains submissions from Indian and foreign author’s 
                selective research content.
            </div>

            <Divider style={{marginBottom:20}}/>

            <div><img src="pen.png" style={{width:40,height:40,marginLeft:'45%'}}/></div>

        </Paper>

               {/********************************Next paper******************************************/}

        <Paper elevation={6} style={{width:350,height:400,borderRadius:20,marginLeft:50}}>
            
            <div style={{fontSize:24,fontWeight:500,letterSpacing:2,color:'#313131',marginLeft:'10%',padding:10}}>Global Impact Factor</div>

            <Divider/>

           

            <div style={{margin:10,fontSize:16,fontWeight:400,color:'#6c757d',lineHeight:'25px',marginBottom:20,letterSpacing:1}}>
                Humanities, Fine Arts, and Music 6.3 Management, 
                Commerce, Economics, Law 6.7 Life Science,
                Agriculture, Nursing, Medical and Bio 5.2
                Engineering and Science 5.7
            </div>

            <Divider style={{marginBottom:20,marginTop:'40%'}}/>

            <div><img src="pen.png" style={{width:40,height:40,marginLeft:'45%'}}/></div>

        </Paper>


        
               {/********************************Next paper******************************************/}

               <Paper elevation={6} style={{width:350,height:400,borderRadius:20,marginLeft:50}}>
            
            <div style={{fontSize:24,fontWeight:500,letterSpacing:2,color:'#313131',marginLeft:'23%',padding:10}}>We Help You</div>

            <Divider/>

            

            <div style={{margin:10,fontSize:16,fontWeight:400,color:'#6c757d',lineHeight:'25px',marginBottom:20,letterSpacing:1}}>
            Conference Conduct Thesis Publication
             Conference Paper Publication Seminar Paper
              Publication Editorial Membership
            </div>

            <Divider style={{marginBottom:20,marginTop:'54%'}}/>

            <div><img src="pen.png" style={{width:40,height:40,marginLeft:'45%'}}/></div>

        </Paper>


       </div>

{/**********************************************************************************************************/}

       <div style={{background:'#F0F2F5',width:'100%',height:800,display:'flex',flexWrap:'wrap'}}>
       {showData()}
       </div>
    

    </div>)
}