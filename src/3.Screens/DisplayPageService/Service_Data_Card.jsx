import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Local_Buussiness_India from "../../Img/local_Business/Plumber.jpg";
import "../../Style/Data_card.css";
import Swal from "sweetalert2";
function Service_Data_Card({
  serviceName,
  firstName,
  lastName,
  serviceCategory,
  serviceAmount,
  jobTimings,
  address,
  mobileNo,
  additionalInformation,
  gender,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const HandleSchedule = () => {
    async function showInputDialog() {
      const { value: formValues } = await Swal.fire({
        title: "Enter Details",
        html: `
        <input id="swal-input-date" type="date" class="swal2-input" placeholder="Select date">
          <input id="swal-input-name" type="text" class="swal2-input" placeholder="Enter your name">
          <input id="swal-input-address" type="text" class="swal2-input" placeholder="Enter address">
        `,
        focusConfirm: false,
        preConfirm: () => {
          const date = document.getElementById("swal-input-date").value;
          const name = document.getElementById("swal-input-name").value;
          const address = document.getElementById("swal-input-address").value;

          // Validation: Check if name is not empty
          if (!name) {
            Swal.showValidationMessage("Name is required!");
            return false; // Prevent Swal from closing if validation fails
          }

          // Validation: Check if the selected date is not in the past
          const selectedDate = new Date(date);
          const currentDate = new Date();
          currentDate.setHours(0, 0, 0, 0); // Set to midnight to compare only the date
          if (selectedDate < currentDate) {
            Swal.showValidationMessage("Date cannot be in the past!");
            return false; // Prevent Swal from closing if validation fails
          }

          // Validation: Check if address contains only letters, numbers, and spaces
          const addressPattern = /^[a-zA-Z0-9\s]+$/;
          if (!addressPattern.test(address)) {
            Swal.showValidationMessage(
              "Address cannot contain special characters!"
            );
            return false; // Prevent Swal from closing if validation fails
          }

          return [name, date, address];
        },
      });

      if (formValues) {
        const [name, date, address] = formValues;

        // Add data (you can replace this with your own data handling logic)
        const data = {
          name: name,
          date: date,
          address: address,
        };

        // Example of handling the data (this could be sending it to a server, etc.)
        console.log("Data added:", data);

        // Display success message
        Swal.fire({
          icon: "success",
          title: "Appointment is Schedule !",
          text: `Name: ${name}, Date: ${date}, Address: ${address} has been added.`,
        });
      }
    }

    // Call the function to display the input dialog
    showInputDialog();
  };
  return (
    <>
      <main className="Card-list" id="servicecard">
        <div className="bus">
          <div className="serviceImg">
            <img
              src={Local_Buussiness_India}
              alt="ShopsPic"
              className="ShopsPic"
            />
          </div>

          <div className="bus_data">
            <h3>{serviceName}</h3>
            <div className="bus_info">
              <div>⭐⭐⭐⭐</div>
              <div className="Service1 Name">
                {firstName} {lastName}
              </div>
              <div className="Service1">{gender}</div>
              <div className="Service1">{serviceCategory}</div>
              <div className="Service1">{jobTimings}</div>
              <div className="Service1 red">₹₹ {serviceAmount}</div>
              <div className="phone-number-container">
                <a href={`tel:${mobileNo}`} className="phone-link">
                  <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                  <span className="mobile-no">{mobileNo}</span>
                </a>
              </div>
              <hr />
            </div>
          </div>

          <div className="Pro_Data Servicebutton">
            <div className="Service1 line">{address}</div>
            <div className="Service1 line">
              <p>{additionalInformation}</p>
            </div>
            <div className="Schedulebtn">
              <button className=" button21" onClick={HandleSchedule}>
                Schedule
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Service_Data_Card;
