import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListeAnnonces from "./pages/listeAnnonces/page"
import List_announces from './pages/list_announces/page';
import DetailAnnonces from "./pages/detailAnnonces/page";
import Login from "./pages/Login/page";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/List_announce" element={<ListeAnnonces />} />
          <Route path="/DetailAnnonces" element={<DetailAnnonces />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<List_announces />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
