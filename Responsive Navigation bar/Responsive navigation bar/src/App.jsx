import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <div className="logo">MyShop</div>
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          &#9776;
        </button>
        <nav className={open ? "open" : ""}>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main>
        <h2>Welcome to MyShop</h2>
        <p>Resize the browser window to see the menu change.</p>
      </main>
    </>
  );
}

export default App;     