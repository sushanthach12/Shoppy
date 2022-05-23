import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/tshirts.css'
import productContext from '../context/Product/ProductContext'

const Hoodies = () => {

  const context = useContext(productContext);
  const { hoodies, getProducts } = context;

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line 
  }, [])

  return (
    <div className='tshirtmain'>
      <h3 className='tshirt-head'>Hoodies</h3>
      <hr className='hr' />
      <div className='TSHRTS'>
        {Object.keys(hoodies).map(item => {
          return (
            <div className="proDiv" key={hoodies[item].slug}>
              <Link to={`/product/${hoodies[item].slug}`}>
                <div className="proDiv-item">
                  <div className="imgDiv">
                    <img alt="ecommerce" className='imgDiv-img' src={hoodies[item].image} />
                  </div>
                  <div className="proDiv-content">
                    <h2 className="item-title">{hoodies[item].title}</h2>
                    <div className="desc">
                      <p className='desc-text'>{hoodies[item].desc.substr(0,50)}..</p>
                    </div>
                    <div className="variants">
                      <div className="sizes">
                        {(hoodies[item].size).map(s => {
                          return (
                            <span className="item-size" key={s}>{s}</span>
                          )
                        })}
                      </div>
                      <hr style={{ height: "1rem", width: "0", margin: ".1rem .5rem" }} />
                      <p className="item-price">₹{hoodies[item].price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hoodies