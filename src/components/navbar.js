import React, { Component } from "react";

// Defining a styles object for the navbar, including transition effects
const styles = {
  navbar: {
    transition: "background-color 0.3s ease, box-shadow 0.3s ease" // Smooth transition for background color and shadow
  }
};

// Defining a class component named 'Navbar' that extends React's Component class
class Navbar extends Component {
  constructor(props) {
    super(props);

    // Initializing the state with default values for navbar background and shadow
    this.state = {
      navbarBackground: "transparent",  // Initial background color
      navbarShadow: "none" // Initial Shadow
    };
  }

  // Adding an event listener for scroll events
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Removing the scroll event listener to prevent memory leaks
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Method to handle scroll events
  handleScroll = () => {

    // Get the current vertical scroll position
    const scrollTop = window.scrollY;

    // Change navbar style based on scroll position
    if (scrollTop > 50) {

      // If scrolled more than 50 pixels, change background to white and add shadow
      this.setState({
        navbarBackground: "#ffffff", 
        navbarShadow: "17px 10px 60px #bebebe" 
      });
    } else {

      // If scrolled less than or equal to 50 pixels, revert to initial styles
      this.setState({
        navbarBackground: "transparent", 
        navbarShadow: "none" 
      });
    }
  };

  render() {
    return (
      <div>

        {/* Navbar for larger screens */}
        <nav
          className="navbar navbar-expand-sm d-none d-sm-block py-3 px-5 fixed-top"
          style={{

            // Applying the defined styles and Dynamic background and shadow
            ...styles.navbar,
            backgroundColor: this.state.navbarBackground,
            boxShadow: this.state.navbarShadow
          }}
        >
          <div className="container-fluid">

            {/* Brand logo and name */}
            <p className="navbar-brand">
              Daramz Creations{" "}
              <span style={{ fontWeight: "bold" }} className="ms-2 color-secondary">
                <i className="fa-solid fa-pencil-alt"></i>
              </span>
            </p>

            {/* Button for toggling the navbar on smaller screens */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">X</span>
            </button>

            {/* Collapsible part of the navbar */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">

                {/* Navigation items */}
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i className="fa-solid fa-house"></i> Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" target="_blank" href="#" download>
                    <i className="fa-solid fa-file"></i> Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    <i className="fa-solid fa-user"></i> About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Navbar for mobile devices */}
        <nav className="navbar-mobile d-block d-sm-none">
          <div className="container-fluid">
            <div className="row">

              {/* Mobile navigation items */}
              <div className="col-3 navbar-mobile__item">
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="fa-solid fa-house"></i> <span>Home</span>
                </a>
              </div>
              <div className="col-3 navbar-mobile__item">
                <a className="nav-link" target="_blank" href="#" download>
                  <i className="fa-solid fa-file"></i> <span>Resume</span>
                </a>
              </div>
              <div className="col-3 navbar-mobile__item">
                <a className="nav-link" href="#about">
                  <i className="fa-solid fa-user"></i> <span>About me</span>
                </a>
              </div>
              <div className="col-3 navbar-mobile__item">
                <a className="nav-link" href="">
                  <i className="fa-solid fa-envelope"></i> <span>Mail</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
