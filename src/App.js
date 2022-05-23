import { Routes, Route, Link } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import MainPage from "./pages/MainPage/MainPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import './App.css'
import { useState } from "react"


function App() {
  const [perspective, setIsPerspective] = useState(false)
  const [perspective2, setIsPerspective2] = useState(false)
  const [perspective3, setIsPerspective3] = useState(false)
  const [isActive, setIsActive] = useState(false)


  let a = 'perspective effect-rotate-left'
  let b = 'outer-nav--return'
  let c = 'li'
  let d = "outer-nav"
  if (perspective) {
    a = 'perspective effect-rotate-left perspective--modalview'
    b = 'outer-nav--return is-vis'
    d = "outer-nav is-vis"
  }
  if (perspective2) {
    a = 'perspective effect-rotate-left perspective--modalview effect-rotate-left--animate'
  }
  if(perspective3) c = 'li is-vis'

  const openMenu = () =>{
    if (!perspective) {
      setIsPerspective(true)
      
      setIsActive(true)
      setTimeout(() => {
        setIsPerspective2(true)
        setIsPerspective3(true)
      }, 25);
    }
    if (perspective) {
      setIsPerspective2(false)
      setIsActive(false)
      setIsPerspective3(false)
      setTimeout(() => {
        setIsPerspective(false)
      }, 400);
    }
  }

  const closeMenu = () => {
    if (perspective) {
      setIsPerspective3(false)
      setIsPerspective2(false)
      setIsActive(false)
      setTimeout(() => {
        setIsPerspective(false)
      }, 400);
    }
  }

  return (
    <div className='app'>
      <div className={a} onClick={closeMenu}>
        <div className="cont">
          <div className={b}></div>
          <Header openMenu={openMenu} isActive={isActive} setIsActive={setIsActive} />
          <Routes>
            <Route path='/' element={<MainPage />} />

            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
      <ul className={d}>
        <li className={c} onClick={openMenu}><Link to="/" >Главная</Link></li>
        <li className={c} onClick={openMenu}><Link to="/service" >Услуги</Link></li>
        <li className={c} onClick={openMenu}><Link to="/data" >База знаний</Link></li>
        <li className={c} onClick={openMenu}><Link to="/about">О компании</Link></li>
        <li className={c} onClick={openMenu}><Link to="/develop">Разработка сайтов</Link></li>
        <li className={c} onClick={openMenu}><Link to="/contact">Контакты</Link></li>
      </ul>
    </div>
  );
}

export default App