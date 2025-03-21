import Footer from "../homepage/Footer";
import Header from "../homepage/Header";

export default function Team()
{
    return(<div>
        <div>
            <Header/>
        </div>

        <div style={{background: 'lightgrey',color:'black',width:'100%',height:250,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}> 

           <div style={{fontSize:'2.5rem',fontWeight:500,letterSpacing:1.2}}>EDITORIAL BOARD</div>
       </div>


         <div style={{margin:20,padding:20,marginLeft:'10%'}}>
           <div style={{fontSize:26,fontWeight:'500',color:'#8395a7',marginBottom:5}}>Editor in Chief</div>
           <div style={{marginBottom:10,fontSize:18}}>Varsha Rajput Architect B.Arc., B.Tech.(Civil Engineering) [MPCT Gwalior ] Chief Executive Officer</div>

           <div style={{fontSize:26,fontWeight:'500',color:'#8395a7',marginBottom:5}}>Editorial Board</div>
            <ol>
                <li style={{marginBottom:5}}>Dr. Diwakar Ramanuj Tripathi, HOD Computer Science, S.S. Maniar College of Computer & Management, Nagpur</li>
                <li style={{marginBottom:5}}>Dr. Shantanu Kumar Assistant Professor Department of Commerce University of Delhi</li>
                <li style={{marginBottom:5}}>Dr. Abhinav Kathuria Assistant Professor, R.S.D College, Panjab University, Ferozepur Punjab</li>
                <li style={{marginBottom:5}}>Dr. Aradhana Parmar, Ph.D. Law</li>
                <li style={{marginBottom:5}}>Dr. Gurcharan Das Ph.D. Chemistry</li>
                <li style={{marginBottom:5}}>Dr. Diwakar Ramanuj Tripathi Assistant Professor Computer Science</li>
                <li style={{marginBottom:5}}>MS. Swati Gupta Dr. Management IMS Indore</li>
                <li style={{marginBottom:5}}>Dr. Pardeep Goel, Associate Professor of Mathematics</li>
                <li style={{marginBottom:5}}>Ashutosh R. Shrivastava</li>
                <li style={{marginBottom:5}}>Dr. Abhinav Kathuria</li>
                <li style={{marginBottom:5}}>Dr. Nikhil Garg</li>
            </ol>
         

            <div style={{fontSize:26,fontWeight:'500',color:'#8395a7',marginBottom:5}}> Legal Council</div>
              <ol>
                <li style={{marginBottom:5}}> Mr. R. S. Shrivastava Legal Advisor</li>
                <li style={{marginBottom:5}}>Mr. Ashish Samadhiya Secretary</li>
                <li style={{marginBottom:5}}>Kusum Shrivastava</li>
                <li style={{marginBottom:5}}>Om Sai Nath Mumbai</li>
              </ol>
        </div>

        <div>
            <Footer/>
        </div>



       
    </div>)

    }
   
   
    
    
    
  
    
    
    
    








