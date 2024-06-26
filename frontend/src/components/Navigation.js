export function Navigation() {
    return (
      <nav className="navigation">
        <div className="logo">
            <p><a href="/">Panorama</a></p>
        </div>
        <div className="nav-group">
            <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/price">Pricing</a></li>
            <li><a href="/about">About</a></li>
            </ul>
            <button className="homepage_btn">Get Started</button>
        </div>

      </nav>
    );
  }

