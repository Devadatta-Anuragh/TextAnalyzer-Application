// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
  // Link
} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar title='TextUtils' vis={true}/><Textform /></>} />
          <Route path="/about" element={<><Navbar title='TextUtils' vis = {false}/><About /></>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
