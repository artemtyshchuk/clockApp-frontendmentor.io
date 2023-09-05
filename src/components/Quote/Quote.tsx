import { QuoteType } from "types";
import styles from "./Quote.module.scss";

interface QuoteProps extends QuoteType {}

export const Quote = (props: QuoteProps) => {
  return (
    <div className={styles.quote}>
      <p className={styles.quoteText}>{props.quote}</p>
      <p className={styles.quoteAutor}>{props.author}</p>
    </div>
  );
};
