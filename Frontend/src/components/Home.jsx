import React, {useEffect} from 'react'
import '../styles/home.css'
import { BsArrowRightShort } from 'react-icons/bs'


const Home = () => {



	return (
		<div className='HOME'>
			{/* <div className="home-img">
				<img src="https://www.dummyimage.com/1400x600" alt="" />
			</div> */}
			<section className="main">
				<div className="home-container">
					<div className="main-head">
						<h2 >ROOF PARTY POLAROID</h2>
						<h1>Master Cleanse Reliac Heirloom</h1>
						<p>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
					</div>


					<div className="main-content flex flex-wrap">
						<div className="div xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
							<div className='innerDiv'>
								<h2>Shooting Stars</h2>
								<p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
								<div className="arrow">
									<a className="text-indigo-500 inline-flex items-center">Learn More</a> <BsArrowRightShort className='rightArrow' />
								</div>

							</div>
						</div>
						<div className="div xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
							<div className='innerDiv'>
								<h2 >Shooting Stars</h2>
								<p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
								<div className="arrow">
									<a className="text-indigo-500 inline-flex items-center">Learn More</a> <BsArrowRightShort className='rightArrow' />
								</div>

							</div>
						</div>
						<div className="div xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
							<div className='innerDiv'>
								<h2>Shooting Stars</h2>
								<p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
								<div className="arrow">
									<a className="text-indigo-500 inline-flex items-center">Learn More</a> <BsArrowRightShort className='rightArrow' />
								</div>

							</div>
						</div>
						<div className="div xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
							<div className='innerDiv'>
								<h2>Shooting Stars</h2>
								<p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
								<div className="arrow">
									<a className="text-indigo-500 inline-flex items-center">Learn More</a> <BsArrowRightShort className='rightArrow' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home