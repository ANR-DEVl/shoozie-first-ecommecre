



export default function Myfooter() {


    return (
        <footer className="footer">
  <div className="footer-container">
    <div className="footer-section about">
      <h2>Shoozie</h2>
      <p>
        Your ultimate destination for high-quality, stylish sneakers and accessories.
        Shop the latest trends and classics in one place.
      </p>
    </div>

    <div className="footer-section links">
      <h3>Shop</h3>
      <ul>
        <li><a href="/products">All Products</a></li>
        <li><a href="/new">New Arrivals</a></li>
        <li><a href="/sale">On Sale</a></li>
        <li><a href="/categories">Categories</a></li>
      </ul>
    </div>

    <div className="footer-section links">
      <h3>Company</h3>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms & Conditions</a></li>
      </ul>
    </div>

    <div className="footer-section newsletter">
      <h3>Newsletter</h3>
      <p>Stay up to date with our latest offers.</p>
      <form>
        <input type="email" placeholder="Your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>

  <div className="footer-bottom">
    &copy; 2025 Shoozie. All rights reserved.
  </div>
</footer>

    )
}