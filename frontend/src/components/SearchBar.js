export function SearchBar() {
    return (
      <div className="search-bar">
        <button className="search-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg" alt="Search" />
        </button>
        <input type="text" placeholder="Search anything or type a URL" />
      </div>
    );
  }
  