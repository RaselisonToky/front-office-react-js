import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListeAnnonces from "./pages/listeAnnonces/page"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<ListeAnnonces />} /> 

        </Routes>
      </div>
    </Router>
  );
}

export default App;