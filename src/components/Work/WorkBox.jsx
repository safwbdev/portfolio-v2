import React from "react";
import moment from "moment";
import BlockContent from "@sanity/block-content-to-react";
import Modal from "./Modal";

function getWorkDate(date) {
  const d = new Date(date);
  const newDate = moment(d).format("MMM YYYY");
  return newDate;
}

const WorkBox = ({
  getId,
  isSlider,
  data: {
    _id,
    companyImage,
    role,
    companyName,
    startDate,
    endDate,
    location,
    tasks,
  },
}) => {
  let currentStatus = endDate ? getWorkDate(endDate) : "Current";

  return (
    <div className="work-item">
      <div className="image-side">
        <div className="image-wrapper">
          <img
            src={companyImage.asset.url}
            alt={companyName}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="detail-side">
        <div className="title-wrapper">
          <div className="title">
            <h2 className="role">{role}</h2>
            <h2 className="company">{companyName}</h2>
            <h2 className="duration">
              {/* {`${getWorkDate(startDate)} - ${getWorkDate(endDate)}`} */}
              {`${getWorkDate(startDate)} - ${currentStatus}`}
            </h2>
            <h2 className="location">{location}</h2>
          </div>
        </div>

        <div className="task-wrapper">
          {isSlider ? (
            <Modal id={_id} name={companyName} data={tasks} />
          ) : (
            <>
              <BlockContent
                blocks={tasks}
                projectId={process.env.REACT_APP_API_KEY}
                dataset="production"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkBox;
