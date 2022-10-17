import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { selecauth } from "../redux/authSlice";
function Header() {
  const [user, setUSer] = useState(null);
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-light mb-3"
        style={{ height: "80px" }}
      >
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul
              class="navbar-nav"
              style={{ display: "flex", alignItems: "center" }}
            >
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  Home
                </Link>
              </li>
              {user ? (
                <>
                  <li class="navbar-user nav-item" style={{ color: "black" }}>
                    Hi, <span> {user} </span>{" "}
                  </li>

                  <li class="nav-item">
                    <Link to="/logout" class="nav-link">
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <Link to="/about" class="nav-link">
                      About Me
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/login" class="nav-link">
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/register" class="nav-link">
                      register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
