import React, { useEffect, useState } from "react";
import moment from "moment";
// import BlockContent from "@sanity/block-content-to-react";
// import Modal from "./Modal";
import style from "./Work.module.scss";



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
    <div className={style.workItem}>
      <div className={style.imageSide}>
        <div className="image-wrapper">
          <img
            src={image}
            alt={companyName}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className={style.detailSide}>
        <div className={style.titleWrapper}>
          <div className={style.title}>
            <h2 className={style.role}>{role}</h2>
            <h2 className={style.company}>{companyName}</h2>
            <h2 className={style.duration}>
              {date}
            </h2>
            <h2 className={style.location}>{location}</h2>
          </div>
        </div>

        {/*  <div className={style.taskWrapper}>
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
        </div>
          )}*/}
      </div>
    </div>
  );
};

export default WorkBox;
