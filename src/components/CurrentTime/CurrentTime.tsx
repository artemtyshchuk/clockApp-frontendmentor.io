import { TimeType } from "types/time";
import styles from "./CurrentTime.module.scss";
import { format } from "date-fns";
import { ReactComponent as SunIcon } from "assets/desktop/icon-sun.svg";
import { ReactComponent as MoonIcon } from "assets/desktop/icon-moon.svg";
import { ReactComponent as DownIcon } from "assets/desktop/icon-arrow-down.svg";
import { ReactComponent as UpIcon } from "assets/desktop/icon-arrow-up.svg";
import { useState } from "react";

interface CurrentTimeProps extends TimeType {}

export const CurrentTime = (props: CurrentTimeProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [containerPosition, setContainerPosition] = useState("normal");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setContainerPosition(isMenuOpen ? "normal" : "up");
  };

  const buttonText = isMenuOpen ? "Less" : "More";

  const dateTime = new Date(props.datetime);
  const currentHour = dateTime.getHours();

  let greeting = "Good morning";
  let sunOrMoonIcon = <SunIcon />;

  if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else if (currentHour >= 18 || currentHour < 5) {
    greeting = "Good evening";
    sunOrMoonIcon = <MoonIcon />;
  }

  const formattedHours = format(dateTime, "HH");
  const formattedMinutes = format(dateTime, "mm");

  return (
    <div className={styles.currentTime}>
      <div
        className={`${styles.timeAndButton} ${
          containerPosition === "up" ? styles.shiftUp : ""
        }`}
      >
        <div className={styles.timeContainer}>
          {sunOrMoonIcon}
          <p className={styles.greetings}>{greeting}, IT’S CURRENTLY</p>
          <div className="">
            <p className={styles.time}>{formattedHours}</p>
            <span className={styles.dots}>:</span>
            <p className={styles.time}>{formattedMinutes}</p>
          </div>
          <p className={styles.where}>In {props.timezone}</p>
        </div>

        <div className={styles.button} onClick={toggleMenu}>
          {isMenuOpen ? (
            <UpIcon className={styles.upIcon} />
          ) : (
            <DownIcon className={styles.downIcon} />
          )}

          <p className={styles.buttonText}>{buttonText}</p>
          <span className={styles.slider}></span>
        </div>
      </div>

      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.smth}>
          <p className={styles.menuTitle}>CURRENT TIMEZONE</p>
          <p className={styles.menuText}>{props.timezone}</p>
        </div>

        <div className={styles.smth}>
          <p className={styles.menuTitle}>Day of the week</p>
          <p className={styles.menuText}>{props.day_of_week}</p>
        </div>

        <span className={styles.verticalDivider}></span>

        <div className={styles.smth}>
          <p className={styles.menuTitle}>Day of the year</p>
          <p className={styles.menuText}>{props.day_of_year}</p>
        </div>

        <div className={styles.smth}>
          <p className={styles.menuTitle}>Week number</p>
          <p className={styles.menuText}>{props.week_number}</p>
        </div>
      </div>
    </div>
  );
};
