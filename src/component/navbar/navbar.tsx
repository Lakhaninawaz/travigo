import "./navbar.scss"

const Navbar = () => {
  return (
    <nav className={`navBar `}>
      <section className="logo">Travigo</section>
      <ul className="center links">
      <li>Home</li>
      <li>About</li>
      <li>
        <select name="price" id="Price">
          <option value="price" hidden>price</option>
          <option value="100">100</option>
          <option value="100">100</option>
          <option value="100">100</option>
        </select>
      </li>
      <li>Contact</li>
      <li>Blog</li>

  </ul>
      <div className="last">
        <ul className="links">
        <li>Log In</li>
        <li className="btn">Register</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar