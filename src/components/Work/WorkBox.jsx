import React, { useEffect, useState } from "react";
import moment from "moment";
// import BlockContent from "@sanity/block-content-to-react";
import Modal from "./Modal";
import useStyles from "./style"



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
  const classes = useStyles();
  const [date, setDate] = useState('')
  const image = companyImage?.asset.url ? companyImage.asset.url : "https://via.placeholder.com/468x60?text=Visit+Blogging.com+Now";

  const getWorkDate = (date)=> {
    const d = new Date(date);
    const newDate = moment(d).format("YYYY");
    return newDate;
  }

  useEffect(() => {
    if (getWorkDate(startDate) === getWorkDate(endDate)){
      setDate(getWorkDate(startDate))
    } else{
      setDate(`${getWorkDate(startDate)} - ${endDate ? getWorkDate(endDate) : 'Current'}`)
    }
  }, [startDate, endDate])
  

  return (
    <div className={classes.workItem}>
      <div className={classes.imageSide}>
        <div className="image-wrapper">
          <img
            src={image}
            alt={companyName}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className={classes.detailSide}>
        <div className={classes.titleWrapper}>
          <div className={classes.title}>
            <h2 className={classes.role}>{role}</h2>
            <h2 className={classes.company}>{companyName}</h2>
            <h2 className={classes.duration}>
              {date}
            </h2>
            <h2 className={classes.location}>{location}</h2>
          </div>
        </div>

        <div className={classes.taskWrapper}>
          {isSlider ? (
            <Modal id={_id} name={companyName} data={tasks} />
          ) : (
            <>
              {/* <BlockContent
                blocks={tasks}
                projectId={process.env.REACT_APP_API_KEY}
                dataset="production"
              /> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkBox;
