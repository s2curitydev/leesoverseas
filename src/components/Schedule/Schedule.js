import React from "react";
import { InfoSection } from "../../components";
import { scheduleObj } from "./Schedule.elements";
import { GoogleMap } from "../Schedule/Schedule.elements";

const Schedule = () => {
  return (
    <>
      <InfoSection {...scheduleObj} />
      <GoogleMap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.1768003806233!2d-119.59743244870583!3d49.50005516316389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x410ca1918d5df17f%3A0xa89db206d956692a!2sLee&#39;s%20Overseas%20Restaurant!5e0!3m2!1sko!2sca!4v1658811778592!5m2!1sko!2sca"
          width="100%"
          height="40%"
          title="myFrame"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </GoogleMap>
    </>
  );
};

export default Schedule;
