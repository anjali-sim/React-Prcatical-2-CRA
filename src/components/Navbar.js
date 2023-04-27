import React, { Fragment } from "react";
import "../css/navbar.css";

function Navbar() {
  //variable for displaying the current date
  const d = new Date();
  const date = d.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[d.getMonth()];
  const shortMonth = month.slice(0, 3);
  const year = d.getFullYear();
  const days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const day = days[d.getDay()];

  return (
    <Fragment>
      <div className="container">
        <div className="container pt-4">
          <div className="row d-flex justify-content-between">
            <div className="col-3">
              <div className="row d-flex">
                <div className="col-8 date-style ">{date}</div>
                <div className="col-4 p-0 d-flex align-items-start flex-column">
                  <p className="m-0 month-style">{shortMonth}</p>
                  <p className="year-style">{year}</p>
                </div>
              </div>
            </div>
            <div className="col-4 d-flex align-items-center day-style ">
              <p className="m-0">{day}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
