import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Divider } from '@mui/material';
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
=======
import send from '../../../services/Vol_Issue';
import { useNavigate } from 'react-router-dom';
export default function Footer() {
  const navigate = useNavigate()
>>>>>>> 04cd37854d23a32d7c4407382d5f766b0d1d4475
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md')); // Check if screen width is medium or larger

  const data = [
    'jouranal.png',
    'peer-reviewed-journal.png',
    'issn-white.png',
    'cashfree.png',
    'visa-white.png',
    'master-card.png',
  ];

  const showImage = () => {
    return data.map((item, i) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: matches ? '20px' : '10px', }}>
        <img alt="" src={item} style={{ width: matches ? 200 : 120, height: 'auto' }} />
      </div>
    ));
  };

  const handelcurrentIssue = async () => {
    const { year, volume, issue } = send();
    console.log({ year, volume, issue })
    navigate(`/ShowJournal?year=${year}&vol=Volume%20${volume}&issue=Issue%20${issue}`); // Navigate to the result page

  }


  return (
    <div style={{ background: 'lightgray', width: '100%', padding: '40px 20px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', flexDirection: matches ? 'row' : 'column', justifyContent: 'space-between', alignItems: matches ? 'flex-start' : 'center', marginBottom: '40px', }}>
        <div style={{ marginBottom: matches ? '0' : '20px' }}>
          <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '10px' }}>Quick Links</div>
<<<<<<< HEAD
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8, cursor: 'pointer' }}>
            <li>Current Issue</li>
            <li onClick={()=>navigate('/team')}>Editorial Board</li>
            <li onClick={()=>navigate('/#')}>Join Us Reviewer</li>
=======
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
            <li onClick={handelcurrentIssue}>Current Issue</li>
            <li>Past Issue</li>
            <li>Blog</li>
            <li>Editorial Board</li>
            <li>Join Us Reviewer</li>
>>>>>>> 04cd37854d23a32d7c4407382d5f766b0d1d4475
            <li>Refund Policy</li>
            <li>Shipping and Delivery Policy</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        <div style={{ marginBottom: matches ? '0' : '20px' }}>
          <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '10px' }}>More Links</div>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8, cursor: 'pointer' }}>
            <li><Link to='http://Xoffencerpublication.in' style={{textDecoration:'none',color:'#000'}}>Book Publication</Link></li>
            <li onClick={()=>navigate('/aboutus')}>About Us</li>
            <li onClick={()=>navigate('/nationaljournal')}>National Publication</li>
          </ul>
        </div>

        <div>
          <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '10px' }}>Contact Us</div>
          <div style={{ fontSize: 14, lineHeight: 1.8 }}>
            <div>WhatsApp us: 9827646334</div>
            <div>Call us: +919827646334</div>
            <div>8:00 AM to 8:00 PM, 365 days</div>
            <div style={{ marginTop: '20px' }}>
              For bugs, glitches, or other issues, email us at:
              <br />
              <strong>editor@varsharesearchorganization.com</strong>
            </div>
          </div>
        </div>
      </div>

      <Divider style={{ marginBottom: '40px' }} />

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', }}>
        {showImage()}
      </div>
    </div>
  );
}