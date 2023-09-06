import { QuoteType } from "types";
import styles from "./Quote.module.scss";
import { ReactComponent as RefreshIcon } from "assets/desktop/icon-refresh.svg";
import { useState } from "react";

interface QuoteProps extends QuoteType {}

export const Quote = (props: QuoteProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.quote}>
      <p className={styles.quoteText}>{props.quote}</p>
      <p className={styles.quoteAutor}>{props.author}</p>
      <div className={styles.refreshIconContainer}>
        {/* <RefreshIcon
          className={`${styles.refreshIconContainer} ${
            isLoading ? styles.isLoading : ""
          }`}
          onClick={() => {
            setIsLoading(true);
          }}
        /> */}
      </div>
    </div>
  );
};
