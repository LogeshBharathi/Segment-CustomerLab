import React from 'react';
import '../PopupFooter/PopupFooter.scss';

const PopupFooter = (props) => {
  const setOpenPopup = props.setOpenPopup;
  const inputData = props.inputData;
  const array = props.array;

  function handleSubmit() {
    if (inputData !== "") {
      const result = array.map(obj => {
        const [firstKey, firstValue] = Object.entries(obj)[0];
        return { [firstKey]: firstValue };
      });

      const payload = {
        "segment_name": inputData,
        "schema": result
      };


      fetch("https://66e17e20c831c8811b553209.mockapi.io/api/v1/segments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        
      })
      .catch(error => {
        console.error("Error:", error);
      });
    }
    alert("Segment Added Successfully");
  }

  return (
    <div className='footer-container'>
      <div className='popup-btn-wrapper' onClick={handleSubmit}>
        <button className='popup-save-btn'>Save the Segment</button>
      </div>
      <div className='popup-btn-wrapper' onClick={() => {
        setOpenPopup(false);
      }}>
        <button className='popup-close-btn'>Cancel</button>
      </div>
    </div>
  );
}

export default PopupFooter;
