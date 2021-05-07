import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WORK_SETTINGS } from "../../constants/sliderSettings";
import { WORK_TITLE } from "../../constants/lang";
import moment from "moment";
import Modal from "./Modal";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlockContent from "@sanity/block-content-to-react"

const Index = ({ data }) => {
  let settings = WORK_SETTINGS;
  function getWorkDate(date) {
    const d = new Date(date);
    const newDate = moment(d).format("MMM YYYY");
    return newDate;
  }
  const SectionHeader = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="section-header"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
        }}
      >
        <h3 className="heading">{WORK_TITLE}</h3>
      </motion.div>
    );
  };
  const WorkBox = ({
    getId,
    isSlider,
    data: { _id, companyImage, role, companyName, startDate, endDate, location, tasks },
  }) => {
    let currentStatus = endDate ? getWorkDate(endDate) : "Current";

    return (
      <div className="work-item">
        <div className="image-side">
          <div className="image-wrapper">
            <img src={companyImage.asset.url} alt={companyName} width="100%" height="100%" />
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
                dataset="production" />
                </>
            )}
          </div>
        </div>
      </div>
    );
  };
  const WorkDesktop = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="work-grid"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
        }}
      >
        {data &&
          data.map((data, index) => {
            return <WorkBox data={data} key={index} isSlider={false} />;
          })}
      </motion.div>
    );
  };
  const WorkMobile = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="work-slider"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 300 },
        }}
      >
        <Slider {...settings}>
          {data &&
            data.map((work, index) => {
              return (
                <WorkBox
                  data={work}
                  key={index}
                  getId={index}
                  isSlider={true}
                />
              );
            })}
        </Slider>
      </motion.div>
    );
  };

  return (
    <>
      <div className="nav-section" id="experience">
        <div className="container">
          <SectionHeader />
          <WorkDesktop />
          <WorkMobile />
        </div>
      </div>
    </>
  );
};
export default Index;
