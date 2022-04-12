import GlobalStyle from './global/styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTicket from './pages/CreateTicket';
import Tickets from './pages/Tickets';
import ErrorPage from './pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export const App = () => {
  return (
    <>
    <GlobalStyle />
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ticket" element={<Tickets />}/>
        <Route path="/newTicket" element={<CreateTicket />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    <Footer />
    </Router>
    </>
  );
}
