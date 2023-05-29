import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const [popup, setPopup] = useState(false);
  const router = useRouter();

  const logout = () => {
    return fetch("http://localhost:8000/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        router.push({
          pathname: data.redirectUrl,
        });
      });
  };

  return (
    <NavbarMain className="ncontainer">
      <nav className="navbar">
        <div className="left">
          <h1>
            <Link href="/MainPage">Bnn Hospital</Link>
          </h1>
        </div>
        <div className="right">
          <ul className="list">
            <li>
              <Link href="/MainPage">Home</Link>
            </li>
            <li>
              <Link href="/doctorcard">Doctors</Link>
            </li>
            <li>
              <Link href="/medicinecard">Medicines</Link>
            </li>
            <li>
              <Link href="/articles">Articles</Link>
            </li>
            <li>
              <Link href="/Admin">Admin (Temporary)</Link>
            </li>
          </ul>
        </div>
        <div className="user_details">
          <ul className="user_details_list">
            <li>
              <Link href="" onClick={() => setPopup(!popup)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 24 24"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                  </g>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
        {popup ? (
          <Popup className="popup">
            <div onClick={logout}>Logout</div>
          </Popup>
        ) : null}
      </nav>
    </NavbarMain>
  );
};

export default Navbar;

const NavbarMain = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  position: relative;

  .navbar {
    background-color: #000080;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .left h1 {
    font-size: 1.5rem;
    cursor: pointer;
    color: #ffffff;
    text-shadow: 0 0 10px #fff;
  }

  .checkBtn {
    display: none;
  }

  #check {
    display: none;
  }

  .checkBtn {
    cursor: pointer;
    font-size: 30px;
    float: right;
    color: #ed1e79;
    line-height: 80px;
  }

  .right ul {
    display: flex;
    list-style: none;
  }

  .right ul li a {
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 1.2rem;
    color: white;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s;
  }

  .right ul li a:hover {
    background-color: #fff;
    border-radius: 50px;
    color: rgb(17, 97, 117);
  }

  @media screen and (max-width: 805px) {
    .list {
      width: 100%;
      height: 100vh;
      background-color: rgb(19, 120, 179);
      text-align: center;
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 4rem;
      left: 100%;
      transition: all 1s;
    }

    #check {
      display: none;
    }

    .checkBtn {
      display: block;
    }

    #check:checked ~ ul {
      left: 0%;
    }
  }

  .user_details {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
    }

    li {
      list-style: none;
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        text-decoration: none;
        margin: 0 10px;
        padding: 8px;
        background-color: #000000;
        border-radius: 50px;
      }
    }

    svg {
      width: 25px;
    }
  }
`;

const Popup = styled.div`
  position: absolute;
  top: 80px;
  right: 4rem;
  display: flex;
  transition: 0.3s all;
  flex-direction: column;
  padding: 20px;
  border-radius: 25px;
  background-color: #fff;
  box-shadow: 0 0 10px #dcdcdc;

  div {
    color: #000;
    font-weight: 700;
    margin: 5px 0;
    padding: 8px 16px;
    cursor: pointer;
  }
`;
