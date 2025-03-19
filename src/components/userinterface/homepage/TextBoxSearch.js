import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import { useEffect, useState } from 'react';
import { postData } from '../../../services/FetchNodeAdminServices';
import { useNavigate } from 'react-router-dom';
export default function TextBoxSearch({width='40%'})
{
    return(<div style={{display:'flex',alignItems:'center',width:width,height:50,background:'#576574',borderRadius:25}}>
        <SearchIcon style={{fontSize:24,padding:10}}/>

        <input type='text' style={{width:'70%',height:26,border:0,borderWidth:0,outline:0,fontSize:18,color:'#fff',background:'transparent'}} placeholder='Search Here....'/>
       
    </div>)
}