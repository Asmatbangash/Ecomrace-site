

function Contect(){
    return(
         <form action="" className="form">
            <label htmlFor="name">Full-Name : </label>
            <input type="text" name="fullName" id="name" placeholder="Enter your full Name" />
              <br />
          
            <label htmlFor="email"> Email : </label>
            <input type="email" name="email" id="email" placeholder="Enter your email here"/>
            <br />
         
            <label htmlFor="msg">Your Message</label>
            <textarea name="msg" id="msg" cols="50" rows="10" placeholder="write your doubt here i try to solve it."></textarea>
            <br />
            <input type="button" name="btn" id="" value="submit"/>
         </form>
    )
}

export default Contect;