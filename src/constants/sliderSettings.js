export const PERSONAL_PROJECT_SETTINGS = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },

    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};
export const CLIENT_PROJECT_SETTINGS = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
        slidesToScroll: 1,
      },
    },
  ],
};

export const WORK_SETTINGS = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.2,
  slidesToScroll: 1,
  initialSlide: 0,
};

export const EDUCATION_SETTINGS = {
  dots: true,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.2,
  slidesToScroll: 1,
  initialSlide: 0,
};
