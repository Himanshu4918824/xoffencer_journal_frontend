import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
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
      <div key={i} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: matches ? '20px' : '10px', }}>
        <img alt="" src={item} style={{ width: matches ? 200 : 120, height: 'auto' }} />
      </div>
    ));
  };

  return (
    <div style={{ background: 'lightgray', width: '100%', padding: '40px 20px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', flexDirection: matches ? 'row' : 'column', justifyContent: 'space-between', alignItems: matches ? 'flex-start' : 'center', marginBottom: '40px', }}>
        <div style={{ marginBottom: matches ? '0' : '20px' }}>
          <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '10px' }}>Quick Links</div>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8, cursor: 'pointer' }}>
            <li onClick={() => navigate('/nationaljournal')}>Current Issue</li>
            <li onClick={() => navigate('/team')}>Editorial Board</li>
            <li onClick={() => navigate('/#')}>Join Us Reviewer</li>
            <li><Link to='https://drive.google.com/file/d/12MZM91kuFzN5g7t71MebTwrLKSZeso5s/view?usp=sharing' target='' style={{ textDecoration: 'none', color: '#000' }}>Privacy Policy</Link></li>
            <li><Link to='https://drive.google.com/file/d/1ftgXASSgX9whcIK1-SylsrHDlIXwN_k2/view?usp=sharing' target='' style={{ textDecoration: 'none', color: '#000' }}>Disclaimer</Link></li>
            <li><Link to='https://drive.google.com/file/d/1ss_eQPCUUTs7HqvGZucmdN5ltWZXaWmw/view?usp=sharing' target='' style={{ textDecoration: 'none', color: '#000' }}>Terms and Conditions</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: matches ? '0' : '20px' }}>
          <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '10px' }}>More Links</div>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8, cursor: 'pointer' }}>
            <li><Link to='http://Xoffencerpublication.in' style={{ textDecoration: 'none', color: '#000' }}>Book Publication</Link></li>
            <li onClick={() => navigate('/aboutus')}>About Us</li>
            <li onClick={() => navigate('/nationaljournal')}>National Publication</li>
          </ul>

        </div>


        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '10px' }}>Contact Us</div>
          <div style={{ fontSize: 14, lineHeight: 1.8 }}>
            <div>WhatsApp us: 9827646334</div>
            <div>Call us: +919827646334</div>
            <div>8:00 AM to 8:00 PM, 365 days</div>
            <div>39, Kishanbhag, Bahodapur
              Gwalior MP-474012</div>
            <div style={{ marginTop: '20px' }}>
              For bugs, glitches, or other issues, email us at:
              <br />
              <strong>editor@varsharesearchorganization.com</strong>
            </div>
          </div>
        </div>
      </div>
      <div >
        <Link to="https://creovate-io.vercel.app/" style={{textDecoration: 'none' , color:'inherit'}} >
          <div style={{ padding: 5, display: "flex", alignItems: "center", marginTop: 5, textAlign: 'center', marginBottom: 2, justifyContent: 'center', cursor: 'pointer' }}>
            <img src="https://creovate-io.vercel.app/android-chrome-512x512.png" height={50} width={50} alt="" />
            <h1 style={{ fontFamily: 'fantasy', letterSpacing: 1, textTransform: 'uppercase', fontWeight: "lighter" }}>CreovateIO</h1>
          </div>
        </Link>
        <p style={{ textAlign: 'center', fontWeight: "bolder" }}>WE BUILD TRUST & Contact Us:+91 6265511439</p>
        <p></p>
      </div>
      <Divider style={{ marginBottom: '40px' }} />

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', }}>
        {showImage()}
      </div>
    </div>
  );
}