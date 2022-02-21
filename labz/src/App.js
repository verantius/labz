import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import { ProgressBar } from 'react-bootstrap';

function App() {
  
  return (
    <div>
        <NavbarComp/>
        <p>hello</p>
        <ProgressBar now={10} />
    
    </div>
  )


    
  

  

}



export default App;