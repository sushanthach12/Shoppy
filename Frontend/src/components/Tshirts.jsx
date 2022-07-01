import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../styles/tshirts.module.css'
import productContext from '../context/Product/ProductContext'

const Tshirts = () => {
  const context = useContext(productContext);
  const { products, getProducts } = context;


  useEffect(() => {
    getProducts('tshirt')
    // eslint-disable-next-line 

  }, [])

  return (
    <div className={styles.tshirtmain}>
      <h3 className={styles.tshirtHead}>Showing results for Tshirts</h3>
      <div className={styles.TSHRTS}>
        {Object.keys(products).map((item) => {
          return (
            <div className={styles.proDiv} key={products[item]._id}>
              <div className={styles.proDivItem}>
                <div className={styles.imgDiv}>
                  <img alt={`tshirt`} className={styles.imgDivImg} src={products[item].image} />
                  {/* <img alt={`tshirt`} className={styles.imgDivImg} src={`https://m.media-amazon.com/images/I/31d+X3ls4IL._SX342_SY445_.jpg`} /> */}
                </div>

                <div className={styles.proDivContent} >
                  <div className={styles.variants}>
                    <div className={styles.colorDiv}>
                      {(products[item].color).map((s) => {
                        return (
                          <button className={styles.itemColor} key={Math.random()} style={{ backgroundColor: `${s.toLowerCase()}` }}></button>
                        )
                      })}
                    </div>
                  </div>

                  <h3 className={styles.itemBrand}>Dystro</h3>

                  <div className={styles.desc}>
                    <Link to={`/product/${products[item].slug[0]}`} >
                      <h2 className={styles.itemTitle}>{products[item].title}</h2>
                    </Link>
                  </div>

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
                  </div>

                  <p className={styles.itemPrice}>₹{products[item].price[0]}</p>
                  <p className={styles.FreeDelivery}>FREE Delivery by Dystro</p>
                </div>

              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Tshirts
