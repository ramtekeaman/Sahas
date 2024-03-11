import styled from 'styled-components';
import img1 from './images/Bas-Bat.jpg';
import backgroundImage from './images/ProductSec.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'aos/dist/aos.css'
import AOS from 'aos'



const Products = () => {
  AOS.init({
    duration: 650,
    once: true
  });
  
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        quantity:1,
    });
    const [finalPrice, setFinalPrice] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState(1);
    const [showFP, setShowFP] = useState(false)

    const products = [
        {
            id: 1,
            name: "SS SOFT PRO PLAYERS SCOOP BAT WITH FIBER TAPE (SCOOP DESIGN MAY VERY)",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque hic ipsam.",
            price: 99.88,
            imgSrc: img1,
        },
        {
            id: 2,
            name: "SS Plastic Cricket Bat with Light Tennis Ball 1 to 8",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis itaque hic ipsam.",
            price: 69,
            imgSrc: img1
        },
        {
            id: 3,
            name: "SS Soft Pro Premium Scoop Kashmir willow Cricket Bat – SH",
            description: "SS Soft Pro Premium Scoop Kashmir willow Cricket Bat – SH",
            price: 169,
            imgSrc: img1
        }
    ];

    const handlePayNowClick = (product) => {
        setSelectedProduct(product);
        setPrice(product.price);
        setShowPaymentForm(true);
        setShowFP(false)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // setFinalPrice(selectedProduct.price * formData.quantity);
    };

    const [popUp, setPopUp] = useState(false);
    const handlepopup = () => {
      setPopUp(!popUp);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Send only the final price to productmail.php
        const response = await fetch("http://localhost/test/productmail.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name: formData.name,
            email: formData.email,
            address: formData.address,
            quantity: formData.quantity,
            finalprice: finalPrice, // Use finalPrice directly
          }),
        });
      
        // Handle the response if needed
        console.log(response);
      
        // Reset form data and close the payment form
        setFormData({
          name: "",
          email: "",
          address: "",
          quantity: "1",
        });
        setShowPaymentForm(false);
      };
    
    

    const [count, setCount] = useState(1); // Initial count value
    const decrement = () => {
      if (count > 1) {
        setCount(count - 1);
        const fp = selectedProduct.price * (count-1);
      console.log(fp);
      setFinalPrice(fp);
        setShowFP(true);
        
      }else(
        setCount(1)
      )
    };

    const increment = () => {
      setCount(count + 1);
      const fp = selectedProduct.price * (count+1);
      console.log(fp);
      setFinalPrice(fp);
      setShowFP(true);
    };

    const renderProductCard = (product) => (
        <div className="card" key={product.id}>
            <img src={product.imgSrc} alt="Product" />
            <div>
                <h1>{product.name}</h1>
                <p className="product-description">{product.description}</p>
                <div className="price">Rs.<span>{product.price}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="buy-now" onClick={() => handlePayNowClick(product)} style={{ width: '90px', borderRadius: '7px', height: '50px', display: 'flex', justifyContent: 'clear', alignItems: 'center' }}>Pay Now</button>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Abc>
                <div id="aboutid">
                    <section
                        className="hero-wrap hero-wrap-2"
                        style={{ backgroundImage: `url(${backgroundImage})`, filter: 'brightness(80%)' }}
                        data-aos="fade-up"
     data-aos-duration="2000"
                    >
                        <div className="overlay"></div>
                        <div className="overlay-2"></div>
                        <div className="container">
                            <div className="row no-gutters slider-text align-items-center justify-content-center">
                                <div className="col-md-9 ftco-animate pb-5 text-center">
                                    <p className="breadcrumbs">
                                        <span className="mr-2">
                                            <Link to={'/'}>
                                                Home <i className="fa fa-chevron-right"></i>
                                            </Link>
                                        </span>{" "}
                                        <span>
                                            Product <i className="fa fa-chevron-right"></i>
                                        </span>
                                    </p>
                                    <h1 className="mb-0 bread">Products</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br />
                    <br />
                </div>
            </Abc>

            <ProductContainer>
                <div className="container">
                    <div className="row">
                        <h2>Products</h2>
                        <div className="cards" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                            {products.map(renderProductCard)}
                        </div>
                    </div>
                    {showPaymentForm && selectedProduct && (
                        <PaymentForm>
                            <div id="paymentModal" className="modalC"  data-aos="flip-up">
                                <div className="modal-content">
                                    <span className="close" onClick={() => setShowPaymentForm(false)}>&times;</span>
                                    <div className="payment-form">
                                        <h2>Payment Form</h2>
                                        <form id="paymentForm" onSubmit={handleSubmit}>
                                            <label>Name:</label>
                                            <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required className='form-control' />
                                            <label>Email:</label>
                                            <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required />
                                            <label>Address:</label>
                                            <textarea name="address" id="address" value={formData.address} onChange={handleInputChange} required></textarea>
                                            <label>Price:</label>
                                            <input type="text" value={showFP ? finalPrice : price} readOnly />
                                            <div className='card__wrapper'><label htmlFor="quantity">Quantity :</label>
                                            <div className="card__counter">
                                              <button className="card__btn" onClick={decrement}>-</button>
                                              <div className="card__counter-score" valu>{count}</div>
                                              <button className="card__btn card__btn-plus" onClick={increment}>+</button>
                                            </div>
                                            </div>  
                                            <button type="submit" className="btn btn-primary">Submit Payment</button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </PaymentForm>
                    )}
                </div>
            </ProductContainer>

            {popUp && <PopUp>
        <div className="success" data-aos="fade-down">
          <div className="success__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              height="24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                fill="#393a37"
                d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="success__title"><h6>Successfully Submitted, Thank You for Purchasing !!</h6>We Will Shortly Notify You on Mail..</div>
          <div className="success__close" onClick={handlepopup}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="0 0 20 20"
              height="20"
            >
              <path
                fill="#393a37"
                d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
              ></path>
            </svg>
          </div>
        </div>
      </PopUp>}
        </>
    );
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


const Abc = styled.div`
  .hero-wrap {
    width: 100%;
    height: 900px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: 0;
  }
  @media (max-width: 991.98px) {
    .hero-wrap {
      background-position: center center !important;
    }
  }
  .hero-wrap.hero-wrap-2 {
    height: 500px;
    position: relative;
    background-position: center center !important;
  }
  .hero-wrap.hero-wrap-2 .overlay {
    width: 100%;
    opacity: 0.2;
    background: #000000 !important;
    z-index: -1;
  }
  .hero-wrap.hero-wrap-2 .overlay-2 {
    opacity: 0.3;
  }
  .hero-wrap.hero-wrap-2 .slider-text {
    height: 500px;
  }
  .hero-wrap .overlay {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    opacity: 0;
    background: #000000;
  }
  .hero-wrap .overlay-2 {
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    opacity: 0.5;
    background: #9acb56;
    background: -moz-linear-gradient(
      top,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -webkit-gradient(
      left top,
      left bottom,
      color-stop(0%, #9acb56),
      color-stop(71%, rgba(255, 255, 255, 0)),
      color-stop(100%, rgba(255, 255, 255, 0))
    );
    background: -webkit-linear-gradient(
      top,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -o-linear-gradient(
      top,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -ms-linear-gradient(
      top,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#9acb56),
      color-stop(71%, rgba(255, 255, 255, 0)),
      to(rgba(255, 255, 255, 0))
    );
    background: linear-gradient(
      to bottom,
      #9acb56 0%,
      rgba(255, 255, 255, 0) 71%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9acb56', endColorstr='#ffffff', GradientType=0 );
  }
  .hero-wrap .slider-text {
    height: 90px;
    color: rgba(255, 255, 255, 0.904);
    z-index: 3;
  }
  .hero-wrap .slider-text .subheading {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.904);
    display: inline-block;
    margin-bottom: 1px;
    font-family: "Reenie Beanie", cursive;
  }
  .hero-wrap .slider-text h1 {
    font-size: 60px;
    color: #fff;
    line-height: 1;
    font-weight: 300;
    font-family: "Poppins", Arial, sans-serif;
  }
  @media (max-width: 991.98px) {
    .hero-wrap .slider-text h1 {
      font-size: 36px;
    }
  }
  .hero-wrap .slider-text p {
    font-weight: 400;
  }
  .hero-wrap .slider-text p strong {
    font-weight: 700;
  }
  .hero-wrap .slider-text p strong a {
    color: #000000;
  }
  .hero-wrap .slider-text .breadcrumbs {
    font-size: 18px;
    margin-bottom: 20px;
    z-index: 99;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.904);
    font-family: "Reenie Beanie", cursive;
  }
  .hero-wrap .slider-text .breadcrumbs span {
    color: rgba(255, 255, 255, 0.904);
  }
  .hero-wrap .slider-text .breadcrumbs span i {
    color: rgba(255, 255, 255, 0.904);
    font-size: 12px;
  }
  .hero-wrap .slider-text .breadcrumbs span a {
    color: rgba(255, 255, 255, 0.904);
  }
  .hero-wrap .slider-text .breadcrumbs span a:hover,
  .hero-wrap .slider-text .breadcrumbs span a:focus {
    color: #6cae22;
  }
  .hero-wrap .slider-text .breadcrumbs span a:hover i,
  .hero-wrap .slider-text .breadcrumbs span a:focus i {
    color: #6cae22;
  }
  .hero-wrap .slider-text .bread {
    font-weight: 300;
    color: #fff;
    font-size: 50px;
    text-transform: capitalize;
  }
`;

const PaymentForm = styled.div `
  /* Modal container */
  .modalC {
    position: fixed;
    z-index: 9000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
  }

  /* Modal content */
  .modal-content {
    background-color: #fefefe;
    margin: 2% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 90%; /* Use percentage for responsiveness */
    max-width: 500px; /* Limit maximum width */
    border-radius: 5px;
    position: relative;

    display: flex;
    justify-content: center;
  }

  /* Close button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .payment-form {
    max-width: 400px;
    margin: 0 10%;
  }

  .payment-form h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .payment-form form label {
    display: block;
    margin-bottom: 5px;
  }

  .payment-form form input[type="text"],
  .payment-form form input[type="email"],
  .payment-form form textarea {
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .payment-form form button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #fb5b21;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid transparent;
  }

  .payment-form form button[type="submit"]:hover {
    background-color: white;
    color: #fb5b21;
    border: 2px solid #fb5b21;
  }

  .quantity{
    display: flex;
    gap: 5px;
    /* justify-content: center; */
    align-items: center;
    margin-bottom: 10px;


    input{
      width: 60px;
      padding: 10px;
      /* margin-bottom: 15px; */
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
      /* align-self: center; */
    }
  }

  .card__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  }

  .card__counter {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 5px;
  background: #F7F7F7;
  border-radius: 50px;
  border: 1px solid #fb5b21;
}

  .card__counter-score, .card__btn {
  font-weight: 700;
  font-size: 22px;
  color: #fb5b21;
  /* color: var(--main-color); */
  text-align: center;
}

.card__btn {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  color: #fb5b21;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__btn-plus {
  background: var(--bg-color);
} 

  @media (max-width: 786) {
    /* Adjust modal content width for smaller screens */
    .modal-content {
      width: 90%;
      margin: 60px 0px;
    }
  }

  @media (max-width: 400px) {
    /* Further adjust modal content width for even smaller screens */
    .modal-content {
      width: 100%;
      /* margin: 10px; */
    }
  }
`;

const PopUp = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;


 .success {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #d1c1c1;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;

  text-align: center;

  position: fixed;
  top: 10px;
  right: 20%;
  /* border: 2px solid #76cc76; */
  @media only screen and (max-width: 768px) {
    right: 10%;
    }
}

.success__icon {
  width: 20px;
  height: 20px;
  transform: translateY(-2px);
  margin-top: 6px;
  margin-right: 8px;
  display: flex;
  align-items: center;
}

.success__icon path {
  fill: #393A37;
}

.success__title {
  font-weight: 500;
  font-size: 14px;
  color: #393A37;
}

.success__close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
}

.success__close path {
  fill: #393A37;
}
`;