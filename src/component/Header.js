const Title = () => (
    <img 
      className="logo"
      alt="logo"
      src ="https://cdn2.vectorstock.com/i/1000x1000/12/61/food-delivery-vector-5071261.jpg"    
    />
)
  
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
  }

export default Header;