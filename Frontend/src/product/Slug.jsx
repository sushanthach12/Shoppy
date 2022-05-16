import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import productContext from '../context/Product/ProductContext'
import styles from '../styles/slug.module.css'

const Slug = () => {

	const context = useContext(productContext);
	const { product, variants, getProduct } = context;

	const { slug } = useParams();

	useEffect(() => {
		getProduct(slug)
		// eslint-disable-next-line 
	}, [])

	console.log(variants)
	const [color, setColor] = useState(product.color)
	const [size, setSize] = useState(product.size)

	return (
		<section className={styles.slugSec}>
			<div className={styles.Imgcontainer}>
				<img alt="ecommerce" className={styles.proIMG} src={product.image} />
			</div>
			<div className={styles.proDetail}>
				<div>
					<h2 className={styles.proPreHead}>Dystro</h2>
					<h1 className={styles.proTitle}>{product.title}</h1>


					<div className={styles.proReview}>
						<div className={styles.reviewStarDiv}>
							<svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={styles.reviewStar} viewBox="0 0 24 24">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
							</svg>
							<svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={styles.reviewStar} viewBox="0 0 24 24">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
							</svg>
							<svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={styles.reviewStar} viewBox="0 0 24 24">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
							</svg>
							<svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={styles.reviewStar} viewBox="0 0 24 24">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
							</svg>
							<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={styles.reviewStar} viewBox="0 0 24 24">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
							</svg>
							<span className={styles.proReviewNo}>4 Reviews</span>
						</div>
						<div className={styles.proSocLinks}>
							<a className="text-gray-500">
								<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={styles.proSoclink} viewBox="0 0 24 24">
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>
							<a className="text-gray-500">
								<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={styles.proSoclink} viewBox="0 0 24 24">
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a className="text-gray-500">
								<svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={styles.proSoclink} viewBox="0 0 24 24">
									<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
								</svg>
							</a>

						</div>
					</div>

					<div className={styles.proDesc}>
						<p className={styles.proDescp}>{product.desc}</p>
					</div>

					<div className={styles.proVariants}>
						<span className="mr-3">Color</span>

						<div className={styles.varColor}>
							{Object.keys(variants).map((c) => {
								return (
									<button type={"checkbox"} key={c} className={styles.proColor} style={{ "backgroundColor": `${c}` }} />
								)
							})}

						</div>
						<div className={styles.varSize}>
							<span className="mr-3">Size</span>
							<div className={styles.sizeOption}>
								<select className={styles.select}>
									<option value={size} selected>{size}</option>
									{Object.keys(variants).includes(color) && Object.keys(variants).includes('Xl') && <option >XL</option>}
									{Object.keys(variants).includes('M') && <option >M</option>}
									{Object.keys(variants).includes('L') && <option >L</option>}
									{Object.keys(variants).includes('XL') && <option >XL</option>}
									{Object.keys(variants).includes('XXL') && <option >XXL</option>}

								</select>
								<span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>

							</div>
						</div>

					</div>

					<hr style={{ width: "inherit", margin: "0 auto", color: "rgb(175, 168, 168)" }} />

					<div className={styles.proPriceBuy}>
						<p className={styles.proPrice}>₹{product.price}</p>
						<div className={styles.CheckBuyBtn}>

							<button className={styles.proBuybtn}>Buy Now</button>
							<button className={styles.proBuybtn}>Add To Cart</button>
						</div>
					</div>

				</div>
			</div>
		</section>

	)
}

export default Slug