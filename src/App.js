
import './App.css';

import Navbar from './components/navbar/Navbar'
import Content from './components/content/Content'
import Slide from './components/slide/Slide'
import VerticalSlider from './components/roadmap/Roadmap'
import Footer from './components/footer/footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='mb-5'>
          <Content/>
      </div>
      <div className='mt-5'>
        <Slide/>
      </div>
      <div className='mt-5'>
        <VerticalSlider/>
      </div>
      <div className='mt-5'>
        <Footer />
      </div>
    </div>
    
  );
}

export default App; 
