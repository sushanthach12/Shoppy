import React, { useContext, useEffect } from 'react'
import styles from "../styles/orderItem.module.css"
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { useNavigate, useParams } from 'react-router-dom';
import orderContext from '../context/Order/OrderContext'



const OrderItem = () => {

	const context = useContext(orderContext);
	const { getOrder, orderItem } = context;

	let product = {};

	const { oid } = useParams();
	let navigate = useNavigate();

	useEffect(() => {
		getOrder(oid)
	}, [])

	console.log(orderItem);


	return (
		<div className={styles.ORDERITEM}>
			<section className={styles.Section}>
				{Object.keys(orderItem.Product).map((item) => {
					return (
						<div className={styles.container}>
							<div className={styles.ContentDiv}>
								<div className={styles.Content}>
									<h3 className={styles.OrderId}>Order ID : <span className={styles.OID}>#{oid}</span> </h3>
									<div className={styles.StatusDiv}>
									
									<p className={styles.Status}>Status : <span className={styles.stat}>{orderItem.status}</span></p>
									<p className={styles.Status}>Payment Status : <span className={styles.stat}>{orderItem.paymentInfo}</span></p>
									</div>
									<h3 className={styles.BrandName}>Dystro</h3>
									<h1 className={styles.ProTitle}>{orderItem.Product[item].title}</h1>

									<div className={styles.DescDiv}>
										<a className={styles.desc}>Description</a>
										<p className={styles.descText}>Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
									</div>

									<div className={styles.ColorDiv}>
										<span className={styles.TXT}>Color</span>
										<span className="ml-auto text-gray-900">Blue</span>
									</div>
									<div className={styles.SizeDiv}>
										<span className={styles.TXT}>Size</span>
										<span className="ml-auto text-gray-900">Medium</span>
									</div>
									<div className={styles.QtyDiv}>
										<span className={styles.TXT}>Quantity</span>
										<span className="ml-auto text-gray-900">4</span>
									</div>

									<div className={styles.PriceDiv}>
										<span className={styles.price}>₹58.00</span>
										{(orderItem.status === 'Pending')?<button className={styles.TractOrderBtn}>Track Order <IoIosArrowDroprightCircle /></button>: <p className={styles.Delivered}>Delivered </p>}
									</div>

								</div>
							</div>
							<div>
								<img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
							</div>
						</div>
					)
				})}


			</section>
		</div>
	)
}

export default OrderItem