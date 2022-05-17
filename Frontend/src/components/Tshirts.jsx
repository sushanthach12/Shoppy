import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/tshirts.css'
import productContext from '../context/Product/ProductContext'


const Tshirts = () => {
  const context = useContext(productContext);
  const { tshirts, getProducts } = context;

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line 
  }, [])

  return (
    <div className='tshirtmain'>
      <h3 className='tshirt-head'>Tshirts</h3>
      <hr className='hr' />
      <div className='TSHRTS'>
        {Object.keys(tshirts).map(item => {
          return (
            <div className="proDiv" key={tshirts[item]._id}>
              <div className="proDiv-item" >
                <div className="imgDiv">
                  <img alt={`tshirt`} className='imgDiv-img' src={`https://m.media-amazon.com/images/I/31d+X3ls4IL._SX342_SY445_.jpg`} />
                </div>

                <div className="proDiv-content" >

                  <Link to={`/product/${tshirts[item].slug[0]}`} >
                    <h2 className="item-title">{tshirts[item].title}</h2>
                  </Link>
                  <div className="desc">
                    <p className='desc-text'>{tshirts[item].desc.substr(0, 50)}...</p>
                  </div>
                  <div className="variants">
                    <div className="sizes">
                      {(tshirts[item].size).map(s => {
                        return (
                          <span className="item-size" key={s}>{s}</span>
                        )
                      })}
                    </div>
                    <hr style={{ height: "1rem", width: "0", margin: ".1rem .5rem" }} />
                    <p className="item-price">₹{tshirts[item].price[0]}</p>
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

export default Tshirts