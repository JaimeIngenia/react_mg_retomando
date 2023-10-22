import styles from "./Nav.module.css";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import inputSearch from "../../assets/inputSearch.svg";
import car from "../../assets/car.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import cardStore from "../../stores/userStore";
import { Link } from "react-router-dom";
import storeCount from "../../stores/countStores";
import productShoppingStore from "../../stores/productShoppingStore";

export const Nav = (props) => {
  const [users, setUsers] = useState(cardStore.getUser());

  const [countNav, setCountNav] = useState(storeCount.getCounts());

  useEffect(() => {
    // debugger;
    productShoppingStore.addChangeListener(updateCount);
    // return productShoppingStore.removeChangeListener(updateCount);
  }, []);

  function updateCount() {
    // debugger;
    setCountNav(productShoppingStore.getTotalCant());
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__image}>
          <div className={styles.parrafos}>
            <p>Mon-Thu: 9:00 AM - 5:30 PM</p>
            <p>
              Visit our showroom in 1234 Street Adress City Address, 1234
              Contact Us
            </p>
            <p>Call Us: (00) 1234 5678</p>
          </div>

          <div className={styles.social__networks}>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>

        <div className={styles.container__nav}>
          <Link to={"/"}>
            <img src={logo} alt="" className={styles.container__nav__logo} />
          </Link>

          <img
            src={inputSearch}
            className={styles.container__nav__input}
            alt=""
          />
          <div className={styles.container__right}>
            <Link to={"/car"}>
              <div className={styles.container__car}>
                <img src={car} alt="" />

                <div className={styles.container__car__circle}>{countNav}</div>
              </div>
            </Link>
            {users.map((x) => {
              return (
                <>
                  <img
                    src={x.profile}
                    alt=""
                    className={styles.container__car__circle__img}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
