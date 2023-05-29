import React from 'react'
import styled from 'styled-components'

function closepop() {
    document.querySelector(".back").remove();
  }

const Popup = () => {
  return (
    <>
    <Back className='back'>
        <div className="popup">
          <img src="./tick.png" alt="Image of a tick" />
          <h4>Your request has been initiated.<br/>We will get in touch with you soon</h4>
          <p><a onClick={()=>closepop()}>close [x]</a></p>
        </div>
      </Back>
      </>
  )
}

export default Popup

const Back = styled.div`
      position: fixed;
      background-color: rgba(0, 0, 0, 0.5);
      height: 100vh;
      width: 100vw;
      z-index: 5000;
      display: flex;
      justify-content: center;
      align-items: center;

      .popup {
      height: 50%;
      width: 50%;
      background-color: #fff;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      border-radius: 30px;
    }

    .popup img {
      height: 50%;
      width: auto;
      margin: 10px 0;
    }

    .popup a {
      text-decoration: none;
      color: purple;
      cursor: pointer;
      margin: 0;
    }
`