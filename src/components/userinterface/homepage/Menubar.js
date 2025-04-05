import React from 'react'
import './Menubar.css'
import { Link, useNavigate } from 'react-router-dom'

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Menubar = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    
  const navigate=useNavigate();
    return (<div style={{background:'#576574'}}>
        <nav>
            <div className="main">
                <ul style={{display:'flex',flexDirection:matches?'row':'column',color:matches?'#fff':'#000'}}>
                <li className='dropdown-1'>Journal
                        <div className="Subdropdown-1">
                            <ul>
                                <li onClick={()=>navigate('/nationaljournal')}>National Journal</li>
                                <li>International Journal</li>
                            </ul>
                        </div>
                    </li>
                  
                    <li className='dropdown-2'>Apply Online
                        <div className="Subdropdown-2">
                            <ul>
                                <li onClick={()=>navigate('/journalform')}>Form For Journal Pubilication</li>
                                <li onClick={()=>navigate('/journalcertification')}>Application From For Journal Certificate</li>
                            </ul>
                        </div>
                    </li>

                    <li className='dropdown-2'>Editorial
                        <div className="Subdropdown-2">
                            <ul>
                                <li onClick={()=>navigate('/team')}>Team</li>
                                <li onClick={()=>navigate('/memberboard')}>Membership In Editorial Board</li>
                            </ul>
                        </div>
                    </li>

                    <li className='dropdown-2'>Guidline Originality
                        <div className="Subdropdown-2">
                            <ul>
                                <li onClick={()=>navigate('/guidline')}>Guidline</li>
                                <li><Link to='https://drive.google.com/file/d/1sXthxtGm6iuD4FPEraqPVIv8u29pO8Ut/view?usp=sharing' target='' style={{textDecoration:'none',color:'#000'}}>Sample 1</Link></li>
                                <li><Link to='https://drive.google.com/file/d/1jQ-S6BgrsIsY6PhKpaGXgQ3LutfgYDbf/view?usp=sharing' target='' style={{textDecoration:'none',color:'#000'}}>Sample 2</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className='dropdown-2'>About
                        <div className="Subdropdown-2">
                            <ul>
                                <li onClick={()=>navigate('/aboutus')}>About Us</li>
                                <li onClick={()=>navigate('/aboutjournal')}>About The Journal</li>
                                <li onClick={()=>navigate('/indexing')}>Indexing</li>
                                <li onClick={()=>navigate('/policy')}>Publication Ethics Policy</li>

                            </ul>
                        </div>
                    </li>

                    <li onClick={()=>navigate('/datasetrepositry')}>Dataset Repositry</li>
                    
                </ul>
            </div>
        </nav>
   </div>)
}

export default Menubar
