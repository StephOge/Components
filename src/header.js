import React from 'react';
import "./App.css"

const Header = () => {
  return (
    <header>
      <nav style={{}}>
        <ul style={{display:'flex', justifyContent:'flex-end', listStyleType:'none', gap:'10px'}}>
          <li><a style={{textDecoration:'none', color:'black'}} href="#">Gmail</a></li>
          <li><a style={{textDecoration:'none', color:'black'}} href="#">Images</a></li>
          <li><a style={{textDecoration:'none', color:'black'}} href="#">Apps</a></li>
          <li><a style={{textDecoration:'none', color:'black'}} href="#">Menu</a></li>
        </ul>
      </nav>
     <div className='logo' style={{textAlign:'center', marginTop:'10px', padding:'30px'}}>
       <a href="#">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" />
        </a>
     </div>
      <form style={{textAlign:'center'}}>
        <input style={{ textAlign:'center', backgroundColor: 'transparent', borderRadius:'10px',  border: '1px solid', fontSize: '16px', height: '40px', marginLeft: '10px', width: '500px'}} type="text" placeholder="Search Google or type a URL" />
        <div>
        <button style={{borderRadius:'5px',  border:'none', padding:'10px', margin:'10px', cursor:'pointer'}}>Google search</button>
        <button style={{borderRadius:'5px', border:'none', padding:'10px',  cursor:'pointer'}}> I'm feeling lucky</button>
        </div>
      </form>
    </header>
  );
}
export default Header;