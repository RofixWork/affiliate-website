import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Drawer from "../Drawer";
const Navbar = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const changeBg = () => {
    if (window.scrollY > 25) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);
  return (
    <header className={`${toggle ? classes.navbar2 : classes.navbar}`}>
      <img
        src="https://geniusdevs.com/themeforest/ponno/ponno-gradint/assets/img/logo.png"
        alt="logo"
      />
      {!mobile ? (
        <nav>
          <a href="#banner">Home</a>
          <a href="#feat">Features</a>
          <a href="#products">Products</a>
          <a href="#price">Pricing</a>
          <a href="#faq">Faq</a>
          <a href="#contact">Contact</a>
        </nav>
      ) : (
        <div>
          <FaBars onClick={() => setOpen(true)} className={classes.icon} />
        </div>
      )}
      <Drawer open={open} setOpen={setOpen} />
    </header>
  );
};

export default Navbar;
