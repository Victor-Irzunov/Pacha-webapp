import React from 'react'
// import video from './video/main-video.mp4'
import video from './video/1.mp4'
// import fon from './images/11.svg'
// import fon2 from './images/9.png'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa"
import './MainPage.css'

function MainPage() {
	return (
		<main>
			<div class="overlay"></div>
			<section className='main-section container'>

				<video
					autoPlay
					playsInline
					muted
					loop
					defaultMuted
				// poster={background}
				>
					<source src={video} type='video/mp4' />
				</video>


				<article className='main-article'>




					<div className="text">
						<h2>Тестирование</h2>
						<h3>IT <span>продуктов</span></h3>
						<p>Надежность и бесперебойная работа ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.</p>

						<a href="https://t.me/@pavel_j">Написать нам</a>
					
					</div>

					{/* <img src={fon} className='main-img-fon'/> */}
					{/* <img src={fon2} className='main-img-fon-2'/> */}
					<div className="sm">
						<a href="#"><FaFacebookF /></a>
						<a href="#"><FaLinkedinIn /></a>
						<a href="#"><FaInstagram /></a>
						<a href="https://t.me/@pavel_j"><FaTelegramPlane /></a>
						<a
							href="http://wa.me/?text=Хочу%20к%20вам%20в%20группу!%20"
						><FaWhatsapp /></a>
					</div>
				</article>
			</section>
		</main>
	)
}

export default MainPage