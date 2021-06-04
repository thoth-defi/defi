
import './App.css';

import Navbar from './components/navbar/Navbar'
import Content from './components/content/Content'


function App() {
  return (
    <div className="">
      <Navbar />
      <div className = 'mt-5'>
        <Content/>
      </div>
      {/* <p style = {{background: 'rgba(69,79,113,0.9)', height: '100vh',width: '50vw', "border-radius": '5px'}}> side bar</p> */}
    </div>
  );
}

export default App; 
