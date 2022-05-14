import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/tshirts.css'
import productContext from '../context/Product/ProductContext'


const Pants = () => {
  const context = useContext(productContext);
  const { pants, getProducts } = context;


  useEffect(() => {
    getProducts()
    // eslint-disable-next-line 
  }, [])

  return (
    <div>
      <h3 className='tshirt-head'>Pants</h3>
      <hr className='hr' />
      <div className='TSHRTS'>
        {Object.keys(pants).map(item => {
          return (
            <div className="proDiv" key={pants[item]._id}>
              <div className="proDiv-item" >
                <div className="imgDiv">
                  <img alt={`tshirt`} className='imgDiv-img' src={`https://m.media-amazon.com/images/I/31d+X3ls4IL._SX342_SY445_.jpg`} />
                </div>

                <div className="proDiv-content" >

                  <Link to={`/product/${pants[item].slug[0]}`} >
                    <h2 className="item-title">{pants[item].title}</h2>
                  </Link>
                  <div className="desc">
                    <p className='desc-text'>{pants[item].desc.substr(0, 50)}...</p>
                  </div>
                  <div className="variants">
                    <div className="sizes">
                      {(pants[item].size).map(s => {
                        return (
                          <span className="item-size" key={s}>{s}</span>
                        )
                      })}
                    </div>
                    <hr style={{ height: "1rem", width: "0", margin: ".1rem .5rem" }} />
                    <p className="item-price">₹{pants[item].price[0]}</p>
                  </div>
                </div>

              </div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Pants