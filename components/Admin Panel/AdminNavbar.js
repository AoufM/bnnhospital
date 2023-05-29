import styled from "styled-components";
import Link from "next/link";

const AdminNavbar = (props) => {
  return (
    <>
      <Adminnav>
        <ul>
          <li className="logo">Admin Panel</li>
          <div className="left">
            <li
              style={
                props.bg
                  ? { backgroundColor: "#000", color: "#fff" }
                  : { backgroundColor: "transparent" }
              }
            >
              <Link href="http://localhost:3000/Admin/Patients">
                Appointments
              </Link>
            </li>
            <li
              style={
                props.bg
                  ? { backgroundColor: "transparent" }
                  : { backgroundColor: "#000", color: "#fff" }
              }
            >
              <Link href="http://localhost:3000/Admin/Medicines">
                Medicine Orders
              </Link>
            </li>
          </div>
        </ul>
      </Adminnav>
    </>
  );
};

export default AdminNavbar;

const Adminnav = styled.div`
  border-bottom: 1px dotted #000;
  margin: 0 8rem;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;

      li {
        background-color: transparent;
        color: #000;
        border: 1px solid #000;
        font-weight: 100;
      }
    }

    li {
      margin: 10px 5px;
      padding: 0.6rem 1.3rem;
      border-radius: 50px;
    }

    .logo {
      color: navy;
      font-weight: 700;
      letter-spacing: 1px;
      margin-left: 0;
    }
  }
`;
