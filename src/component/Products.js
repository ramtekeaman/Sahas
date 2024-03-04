import React from 'react'
import styled from 'styled-components';

import img1 from './images/Bas-Bat.jpg'

const Products = () => {
  return (
    <ProductContainer>
        <div className="container">
      <div className="row">
        <div className="cards">
          <div className="card">
            <img src={img1} alt="Product" />
            <div>
              <h1>SS SOFT PRO PLAYERS SCOOP BAT WITH FIBER TAPE (SCOOP DESIGN MAY VERY)</h1>
              <p className="product-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque hic ipsam. </p>
              <div className="price"> Rs. 99.88 </div>
              <button className="buy-now"> Buy Now</button>
            </div>
          </div>

          <div className="card">
            <img src={img1} alt="Product" />
            <div>
              <h1>SS Plastic Cricket Bat with Light Tennis Ball 1 to 8 </h1>
              <p className="product-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque hic ipsam. </p>
              <div className="price">  Rs. 99.88 </div>
              <button className="buy-now"> Buy Now</button>
            </div>
          </div>

          <div className="card">
            <img src={img1} alt="Product" />
            <div>
              <h1>SS Soft Pro Premium Scoop Kashmir willow Cricket Bat – SH</h1>
              <p className="product-description">SS Soft Pro Premium Scoop Kashmir willow Cricket Bat – SH</p>
              <div className="price">  Rs. 99.88 </div>
              <button className="buy-now"> Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ProductContainer>
  )
}

export default Products;

const ProductContainer  = styled.div`
.container{
  width: 90%;
  margin:0 auto;
  padding: 2rem;
  background:#e2e8f0;
  
}
img{
  width:100%;
}
.cards{
  display:flex;
  width:100%;
  flex-wrap:wrap;
  justify-content:space-evenly;
 
  font-family:sans-serif;
}
.cards .card{
  width:30%;
  padding:1rem;
  min-width:280px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 5px 0px;
  background:white;
  margin:1rem auto;
  /* resize: horizontal; */
  /* overflow: auto; */
}
.cards .card h1{
  font-size:1.1rem;
  margin:1rem 0;
}
.cards .card p{
  display:none;
}
.cards .card button{
  margin:1rem 0;
  padding:.3rem .6rem;
  border:0;
  background:#c53030;
  color:white;
}
.cards card:last-child{
 order:3;
}

.cards .card img:hover{
  transition:.3s;
  transform: scale(1.1);
  transition-timing-function:ease-in-out;
}

`;