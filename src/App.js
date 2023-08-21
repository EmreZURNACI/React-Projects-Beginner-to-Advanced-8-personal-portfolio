import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LangContextProvider from './Contexts/LangCon';
import ThemeContextProvider from './Contexts/ThemeCon';
import Home from './Pages/Home'
import HomeLayout from './Pages/HomeLayout'
import Abilities from './Pages/Abilities'
import Contact from './Pages/Contact'
import About from './Pages/About'
import NoPage from './Pages/NoPage'
import FullSite from './Pages/FullSite'
import './I18Next';
function App() {
  return (
    <LangContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeLayout />} >
              <Route index element={<FullSite />} />
              <Route path='Home' element={<Home />} />
              <Route path='Contact' element={<Contact />} />
              <Route path='Abilities' element={<Abilities />} />
              <Route path='About' element={<About />} />
            </Route>
            <Route path='*' element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </LangContextProvider>
  );
}

export default App;
