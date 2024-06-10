// import p1 from './imges/p1.jpeg'
// import p2 from './imges/p2.png'
// import p3 from './imges/p3.jpeg'
// import p4 from './imges/p4.jpeg'
// import p5 from './imges/p5.jpeg'
// import p6 from './imges/p6.jpg'
// import p7 from './imges/p7.jpg'
import { useContext, useEffect, useState } from 'react'
import { ContextProductApi } from './store/ProductDataApi';

function Products(){
    const [apiData, setApiData] = useState([])
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(data=>setApiData(data)
                )
      },[])
    return(
        <div className='productCard'>
        {apiData.map((product) => (
               <div className="card" style={{width: '25rem', height:'35rem', margin:'5rem 1rem 1rem 0rem'}} key={product.id}>
               <img src={product.image} className="card-img-top" alt="..." width='100%' height='200vh' />
               <div className="card-body">
                 <h3 className="card-title">{product.title}</h3>
                 <h5>{product.category}</h5>
                 <h3>Price : ${product.price}</h3>
                 <button style={{backgroundColor:'red', color:'white', borderRadius:'5px'}}>Order-Now</button>
               </div>
             </div>
        ))}
        
      </div>
    )
}
export default Products;