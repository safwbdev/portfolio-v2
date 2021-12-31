import React from "react";
import moment from "moment";

function getGradDate(date) {
  const d = new Date(date);
  const newDate = moment(d).format("YYYY");
  return newDate;
}

const EduBox = ({
  data: { eduImage, endDate, field, schoolName, location },
}) => {
  return (
    <div className="edu-item">
      <div className="image-side">
        <div className="image-wrapper">
          <img src={eduImage.asset.url} alt="" width="100%" height="100%" />
        </div>
      </div>
      <div className="detail-side">
        <div className="title-wrapper">
          <div className="title">
            <h2 className="yearField">
              {getGradDate(endDate)} <span>|</span> {field}
            </h2>
            <h2 className="institute">{schoolName}</h2>
            <h2 className="location">{location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EduBox;
