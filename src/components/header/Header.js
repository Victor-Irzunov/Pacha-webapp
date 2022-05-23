import React,{useState} from 'react'
import './Header.css'
import logo from './images/logo.png'

function Header({ openMenu, setIsActive, isActive }) {

	


	return (
		<header>
			<div className='header-section container'>
				<img className='logo' src={logo} alt='Тест IT продуктов' title='Логотип компании' />

				{/* <div className='header-phone'>
					<FaPhoneAlt />
					<a href='https://tel' className='header-tel'>+ 375 29 555 55 55</a>
				</div> */}
				

				<div
					className={isActive ? "toggle active" : "toggle"}
					onClick={() => {
						setIsActive(i => !i)
						openMenu()
					}}
				>
					<span
						className='toggle-span-menu'
					></span>
				</div>




			</div>
		</header>
	)
}

export default Header