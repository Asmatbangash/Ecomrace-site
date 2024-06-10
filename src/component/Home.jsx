import p1 from './imges/p1.jpeg'
import p3 from './imges/p3.jpeg'
import p4 from './imges/p4.jpeg'

import p7 from './imges/p7.jpg'
import { useState, useEffect } from 'react'

function Home(){
  const [apiData, setApiData] = useState([])
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products?limit=5')
                .then(res=>res.json())
                .then(data=>setApiData(data)
                )
      },[])
    return(
        <main style={{marginTop: '55px'}}>

        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
          </div>
          <div className="carousel-inner" >
            <div className="carousel-item">
              <img src="" alt="" />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
            <img src={p7} alt="" width="100%" height="400vh"/>
            <div className="container">
              <div className="carousel-caption">
                  <p >The best Huma Ecomrace store you can buy our product.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <img src="https://source.unsplash.com/random/1200x400" alt="" />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>Some representative placeholder content for the third slide of this carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
        <div className="container marketing" style={{marginTop: '20px'}}>
          <div className="row">
            <div className="col-lg-4">
            <img src={p1} alt="" width="100%" height="150vh"/>
              <h2 className="fw-normal">Lotion</h2>
              <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
              <p><a className="btn btn-secondary" href="#">View details »</a></p>
            </div>
            <div className="col-lg-4">
            <img src={p4} alt="" width="100%" height="150vh"/>
              <h2 className="fw-normal">Mekup Kit</h2>
              <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
              <p><a className="btn btn-secondary" href="#">View details »</a></p>
            </div>
            <div className="col-lg-4">
            <img src={p3} alt="" width="100%" height="150vh"/>
              <h2 className="fw-normal">Mekup Products</h2>
              <p>And lastly this, the third column of representative placeholder content. All these product for buying and provide best result for face.</p>
              <p><a className="btn btn-secondary" href="#">View details »</a></p>
            </div>
          </div>
      
          <hr className="featurette-divider" />
      
          <div className="about-product">
      {apiData.map((product) => (
        <>
          <div
            className="row featurette"
            style={{ margin: "0px", paddingTop: "2rem" }} key={product.id}
          >
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                {product.title}
              </h2>
              <p className="lead">{product.body}</p>
            </div>
            <div className="col-md-5">
              <img src={product.image} alt="" width="100%" height="300vh" />
            </div>
            <hr className="featurette-divider" />
          </div>

          <div className="row featurette" style={{margin:'0px'}} key={product.id = product.id + 1}>
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                {product.title = product.title}
              </h2>
              <p className="lead">
                {product.body}
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img src={product.image} alt="" width="100%" height="300vh" />
            </div>
          </div>
        </>
      ))}
    </div>
        </div>
      </main>
    )
}

export default Home;