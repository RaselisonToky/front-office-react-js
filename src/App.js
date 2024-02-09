import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListAnnounces from './pages/list_announces/page';
import DetailAnnonces from "./pages/detailAnnonces/page";
import Login from "./pages/Login/page";
import AdvancedSearch from "./pages/advancedSearch/page";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/DetailAnnonces" element={<DetailAnnonces />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ListAnnounces />} />
          <Route path="/AdvancedSearch" element={<AdvancedSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
