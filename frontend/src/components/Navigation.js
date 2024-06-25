export function Navigation() {
    return (
      <nav className="navigation">
        <div className="logo">
            <p>UnbiasedMedia</p>
        </div>
        <div className="nav-group">
            <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About</a></li>
            </ul>
            <div className="language">
                <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="English" />
                <span>English</span>
            </div>
            <button className="get-started">Get Started</button>
        </div>

      </nav>
    );
  }

