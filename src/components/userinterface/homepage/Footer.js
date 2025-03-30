import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Divider } from '@mui/material';

export default function Footer() {
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
      <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',margin: matches ? '20px' : '10px',}}>
        <img alt="" src={item} style={{ width: matches ? 200 : 120, height: 'auto'}} />
      </div>
    ));
  };

  return (
    <div style={{ background: 'lightgray', width: '100%',padding: '40px 20px', boxSizing: 'border-box'}}> 
      <div style={{display: 'flex',flexDirection: matches ? 'row' : 'column',justifyContent: 'space-between',alignItems: matches ? 'flex-start' : 'center',marginBottom: '40px',}}> 
        <div style={{ marginBottom: matches ? '0' : '20px' }}>
          <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '10px' }}>Quick Links</div>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
            <li>Current Issue</li>
            <li>Past Issue</li>
            <li>Blog</li>
            <li>Editorial Board</li>
            <li>Join Us Reviewer</li>
            <li>Refund Policy</li>
            <li>Shipping and Delivery Policy</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        <div style={{ marginBottom: matches ? '0' : '20px' }}>
          <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '10px' }}>More Links</div>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
            <li>Reviews</li>
            <li>Book Publication</li>
            <li>Conference Seminar</li>
            <li>About Us</li>
            <li>National Publication</li>
            <li>International Publication</li>
          </ul>
        </div>

        <div>
          <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '10px' }}>Contact Us</div>
          <div style={{ fontSize: 14, lineHeight: 1.8 }}>
            <div>WhatsApp us: 70003 70003</div>
            <div>Call us: +919827646334</div>
            <div>8:00 AM to 8:00 PM, 365 days</div>
            <div style={{ marginTop: '20px' }}>
              For bugs, glitches, or other issues, email us at:
              <br />
              <strong>editor@varsharesearch.org</strong>
            </div>
          </div>
        </div>
      </div>

      <Divider style={{ marginBottom: '40px' }} />

      <div style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center',alignItems: 'center',}}>
        {showImage()}
      </div>
    </div>
  );
}