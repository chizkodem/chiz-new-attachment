const Header = () => {
  return (
    <header className="header">
      <a href="#">Chiz</a>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#AR">
              <img src="/nav icons/AR.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#SMG">
              <img src="/nav icons/SMG.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#SG">
              <img src="/nav icons/SG.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#MM">
              <img src="/nav icons/MM.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#SR">
              <img src="/nav icons/SR.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#LMG">
              <img src="/nav icons/LMG.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#2ND">
              <img src="/nav icons/Secondary.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#MORE">
              <input id="checkbox" type="checkbox" />
              <label className="toggle" htmlFor="checkbox">
                <div id="bar1" className="bars"></div>
                <div id="bar2" className="bars"></div>
                <div id="bar3" className="bars"></div>
              </label>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
