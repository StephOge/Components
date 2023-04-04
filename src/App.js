import "./App.css";
import Header from "./header";
import SearchBar from "./searchBar";
import Footer from "./footer";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className=""wrapper>
      <Header />

      {/* <SearchBar /> */}
      <div className="lang_wrapper">
          <ul className="lang_list" style={{display:'flex', justifyContent:'center', listStyleType:'none', gap:'7px'}}>
            <li>Google Offered in:</li>
            <li style={{textDecoration:'none', color:'blue'}} className="language">Hausa</li>
            <li style={{textDecoration:'none', color:'blue'}} className="language">Igbo</li>
            <li style={{textDecoration:'none', color:'blue'}} className="language">Ede yoruba</li>
            <li style={{textDecoration:'none', color:'blue'}} className="language">Nigeria Pidgin</li>
            {/* <li style={{textDecoration:'none', color:'blue'}} className="language">Setswana</li>
            <li style={{textDecoration:'none', color:'blue'}} className="language">Northern Sotho</li> */}
          </ul>
      </div>
    </div>
  )
}

export default App;

















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
