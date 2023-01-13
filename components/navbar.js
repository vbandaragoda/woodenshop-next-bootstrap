
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top shadow p-2 mb-5 px-5 bg-body-tertiary rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/logo.png" alt="brand" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2 fw-bold text-uppercase">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  promotion
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                  about
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link text-dark" href="#">
                  contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark me-3 me-lg-0" href="#">
                 <img src="/cart.svg" alt="" />
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link me-3 me-lg-0" href="#">
                <img src="/search.svg" alt="search-icon" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3 me-lg-0" href="#">
                <img src="/heart.svg" alt="search-icon" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3 me-lg-0" href="#">
                <img src="/user.svg" alt="search-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
