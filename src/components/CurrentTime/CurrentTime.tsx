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

  const formattedTime = format(dateTime, "HH:mm");

  return (
    <div className={styles.currentTime}>
      <div
        className={`${styles.timeAndButton} ${
          containerPosition === "up" ? styles.shiftUp : ""
        }`}
      >
        <div className={styles.timeContainer}>
          <SunIcon className={styles.sunIcon} />
          <p className={styles.greetings}>GOOD MORNING, IT’S CURRENTLY</p>
          <p className={styles.time}>{formattedTime}</p>
          <p className={styles.where}>In your, place</p>
        </div>

        <div className={styles.button} onClick={toggleMenu}>
          <DownIcon className={styles.timeIcon} />
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
