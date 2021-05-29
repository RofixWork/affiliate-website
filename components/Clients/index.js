import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../helpers/Title";
import classes from "./Clients.module.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import { useMediaQuery, useTheme } from "@material-ui/core";

// install Swiper modules
SwiperCore.use([Navigation]);
const Cliens = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <section className={classes.clients}>
      <Title
        title="Our Client Say"
        desc="Perpetual sincerity out suspected necessary one but provision satisfied. Respect nothing use set waiting pursuit nay you looking."
      />
      <Container maxWidth="lg">
        <Swiper
          spaceBetween={15}
          slidesPerView={`${mobile ? 1 : 2}`}
          pagination={{ clickable: true }}
          navigation
        >
          <SwiperSlide>
            <div className={classes.box}>
              <div className={classes.imgUser}>
                <img
                  src="https://geniusdevs.com/themeforest/ponno/ponno-gradint/assets/img/testomonial.jpg"
                  alt="img user"
                />
              </div>
              <div className={classes.content}>
                <Typography className={classes.title} variant="h6">
                  Hafizur Rahaman
                </Typography>
                <Typography className={classes.job} variant="subtitle2">
                  UI/UX Designer
                </Typography>
                <Typography className={classes.desc} variant="subtitle1">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <div className={classes.imgUser}>
                <img
                  src="https://geniusdevs.com/themeforest/ponno/ponno-gradint/assets/img/testomonial.jpg"
                  alt="img user"
                />
              </div>
              <div className={classes.content}>
                <Typography className={classes.title} variant="h6">
                  Hafizur Rahaman
                </Typography>
                <Typography className={classes.job} variant="subtitle2">
                  UI/UX Designer
                </Typography>
                <Typography className={classes.desc} variant="subtitle1">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <div className={classes.imgUser}>
                <img
                  src="https://geniusdevs.com/themeforest/ponno/ponno-gradint/assets/img/testomonial.jpg"
                  alt="img user"
                />
              </div>
              <div className={classes.content}>
                <Typography className={classes.title} variant="h6">
                  Hafizur Rahaman
                </Typography>
                <Typography className={classes.job} variant="subtitle2">
                  UI/UX Designer
                </Typography>
                <Typography className={classes.desc} variant="subtitle1">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </Typography>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.box}>
              <div className={classes.imgUser}>
                <img
                  src="https://geniusdevs.com/themeforest/ponno/ponno-gradint/assets/img/testomonial.jpg"
                  alt="img user"
                />
              </div>
              <div className={classes.content}>
                <Typography className={classes.title} variant="h6">
                  Hafizur Rahaman
                </Typography>
                <Typography className={classes.job} variant="subtitle2">
                  UI/UX Designer
                </Typography>
                <Typography className={classes.desc} variant="subtitle1">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </Typography>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Cliens;
