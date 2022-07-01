import React, { useEffect } from 'react'
import styles from '../styles/home.module.css'
import { BsArrowRightShort } from 'react-icons/bs'


const Home = () => {



	return (
		<div className={styles.HOME}>
			
			{/* <div className="home-img">
				<img src="https://www.dummyimage.com/1400x600" alt="" />
			</div> */}
			<section className={styles.main}>
				<div className={styles.homeContainer}>
					<div className={styles.ImageContainer}>
						<img className={styles.mainImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rPlSZaAQF2wt6CEu5HOFfbcVM2BW0ei_NA&usqp=CAU" alt="" />
					</div>

					<div className={styles.FeaturedProDiv}>
						
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home