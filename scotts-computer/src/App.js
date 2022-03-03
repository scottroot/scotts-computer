import logo from './logo.svg';
import './App.css';
import WindowReadme from './Components/WindowReadme';
import NavBar from './Components/NavBar';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Container fluid id="main-wrapper">
        <NavBar />
        <WindowReadme />
    </Container>
          
      
  );
}

export default App;
