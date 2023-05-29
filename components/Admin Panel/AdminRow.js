import styled from "styled-components";

const AdminRow = (props) => {
  return (
    <>
      <Row>
        <h4>Sr. No.</h4>
        <h4>Name</h4>
        <h4>{props.table}</h4>
        <h4>Address</h4>
        <h4>Mobile</h4>
        <h4>Price</h4>
        <h4>Confirm </h4>
      </Row>
      {props.data.map((med, i) => {
        return (
          <Row>
            <h4>{i + 1}</h4>
            <h4>{med.name}</h4>
            <h4>{med.speciality}</h4>
            <h4>{med.address}</h4>
            <h4>{med.mobile}</h4>
            <h4>{med.price}</h4>
            <h4>Confirm</h4>
          </Row>
        );
      })}
    </>
  );
};

export default AdminRow;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 1px 8rem;
  padding: 0.8rem 0;
  background-color: #eaeaea;

  h4 {
    margin: 0 5px;
    padding: 0 10px;

    :nth-child(1) {
      width: 6%;
      border-right: 1px solid #000;
    }

    :nth-child(2) {
      width: 15%;
      border-right: 1px solid #000;
    }

    :nth-child(3) {
      width: 15%;
      border-right: 1px solid #000;
    }

    :nth-child(4) {
      width: 30%;
      border-right: 1px solid #000;
    }

    :nth-child(5) {
      width: 15%;
      border-right: 1px solid #000;
    }

    :nth-child(6) {
      width: 5%;
      border-right: 1px solid #000;
    }

    :nth-child(7) {
      background-color: navy;
      color: #fff;
      border-radius: 50px;
      padding: 5px 10px;
      cursor: pointer;
    }
  }

  :nth-child(2) {
    background-color: #000000;
    color: #fff;

    h4 {
      :nth-child(1) {
        border-right: 1px solid #dcdcdc;
      }

      :nth-child(2) {
        border-right: 1px solid #dcdcdc;
      }

      :nth-child(3) {
        border-right: 1px solid #dcdcdc;
      }

      :nth-child(4) {
        border-right: 1px solid #dcdcdc;
      }

      :nth-child(5) {
        border-right: 1px solid #dcdcdc;
      }

      :nth-child(6) {
        width: 5%;
        border-right: 1px solid #dcdcdc;
      }

      :nth-child(7) {
        background-color: transparent;
        color: #fff;
        border-radius: 50px;
        padding: 5px 10px;
        cursor: pointer;
        text-align: center;
      }
    }
  }
`;
