import { QuoteType } from "types";
import styles from "./Quote.module.scss";
import { ReactComponent as RefreshIcon } from "assets/desktop/icon-refresh.svg";
import { useEffect, useState } from "react";

interface QuoteProps extends QuoteType {
  fetchQuote: () => void;
}

export const Quote = (props: QuoteProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefreshClick = () => {
    setIsLoading(true);
    props.fetchQuote();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.quote}>
      <p className={styles.quoteText}>"{props.quote}"</p>
      <p className={styles.quoteAutor}>{props.author}</p>
      <div className={styles.refreshIconContainer}>
        <RefreshIcon
          className={`${styles.refreshIconContainer} ${
            isLoading ? styles.isLoading : ""
          }`}
          onClick={handleRefreshClick}
        />
      </div>
    </div>
  );
};
