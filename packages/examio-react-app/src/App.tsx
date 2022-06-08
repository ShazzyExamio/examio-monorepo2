
import {GlobalStyle} from './AppElements';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { ThemeProvider } from 'styled-components'
import { COLORS, FONTS } from './config/globalStyles'
const theme = {
  colors: COLORS,
  fonts: FONTS
}



function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Navbar/>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />}/>
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
