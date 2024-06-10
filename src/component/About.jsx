import p2 from "./imges/p2.png";
import p3 from "./imges/p3.jpeg";
import p6 from "./imges/p6.jpg";
import { useState,useEffect } from "react";

function About() {
  const [apiData, setApiData] = useState([])
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(data=>setApiData(data)
                )
      },[])
    console.log(apiData)
  return (
    <div className="about-product">
      <h1
        style={{
          textAlign: "center",
          margin: "5rem 0rem",
          textDecoration: "underline",
        }}
      >
        All products Detail
      </h1>
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
  );
}
export default About;
