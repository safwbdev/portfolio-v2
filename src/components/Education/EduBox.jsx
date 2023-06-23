import React from "react";
import style from "./Edu.module.scss";

const EduBox = ({
  data: { eduImage, field, schoolName, location },
}) => {

  return (
    <div className={style.eduItem}>
      <div className={style.imageSide}>
        <div className="image-wrapper">
          <img src={eduImage.asset.url} alt="" width="100%" height="100%" />
        </div>
      </div>
      <div className={style.detailSide}>
        <div className={style.titleWrapper}>
          <div className={style.title}>
            <h2 className={style.yearField}>{field}</h2>
            <h2 className={style.institute}>{schoolName}</h2>
            <h2 className={style.location}>{location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EduBox;
