import React from "react";
// import moment from "moment";
import useStyles from "./style"

// function getGradDate(date) {
//   const d = new Date(date);
//   const newDate = moment(d).format("YYYY");
//   return newDate;
// }

const EduBox = ({
  data: { eduImage, endDate, field, schoolName, location },
}) => {
  const classes = useStyles();
  return (
    <div className={classes.eduItem}>
      <div className={classes.imageSide}>
        <div className="image-wrapper">
          <img src={eduImage.asset.url} alt="" width="100%" height="100%" />
        </div>
      </div>
      <div className={classes.detailSide}>
        <div className={classes.titleWrapper}>
          <div className={classes.title}>
            <h2 className={classes.yearField}>
              {/* {getGradDate(endDate)} <span>|</span>  */}
              {field}
            </h2>
            <h2 className={classes.institute}>{schoolName}</h2>
            <h2 className={classes.location}>{location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EduBox;
