
import './App.css';

import {Outlet} from 'react-router-dom'
import Quotes from './components/Quotes';

function App() {
 
  return (
    <div className="App">
      <div className='quotes'>
        <Quotes/>
      </div>
      {/* <Quotes/> */}
      <div className='cont' id='container'>
        <Outlet />
      </div>
      
    </div>
  );
}

export default App;
