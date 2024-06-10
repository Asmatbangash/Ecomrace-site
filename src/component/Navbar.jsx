import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" style={{width:'100%'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{border:'2px solid white',padding:'0px', marginRight:'3rem'}} > <span style={{backgroundColor:'orangered'}}>Huma</span> Store</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0 ml-10rem">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contect-us">Contect-Us</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;