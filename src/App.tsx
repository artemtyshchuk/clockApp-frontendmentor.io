import { Container } from "components/Container";
import { CurrentTime } from "components/CurrentTime";
import { Quote } from "components/Quote";
import { defaultQuote, defaultTime } from "mock";
import { useEffect, useState } from "react";
import { QuoteType } from "types";
import { TimeType } from "types/time";

const BASE_URL_QUOTE = "https://api.api-ninjas.com/v1/quotes?category=dreams";
const QUOTE_KEY = "rUEATHHfh8RuNklHeX1lhg==9tvyxOFufdAPwZtA";
const BASE_URL_TIME = "http://worldtimeapi.org/api/timezone/Europe/Warsaw";

function App() {
  const [quote, setQuote] = useState<QuoteType | null>(defaultQuote[0]);
  const [time, setTime] = useState<TimeType | null>(null);

  const fetchTime = async () => {
    const res = await fetch(BASE_URL_TIME);
    const time = (await res.json()) as TimeType;
    setTime(time);
  };

  const fetchQuote = async () => {
    try {
      const response = await fetch(BASE_URL_QUOTE, {
        mode: "no-cors",
        headers: {
          "X-Api-Key": QUOTE_KEY,
        },
      });
      if (response.ok) {
        const result = await response.json();
        const randomQuoteIndex = Math.floor(Math.random() * result.length);
        setQuote(result[randomQuoteIndex]);
      } else {
        console.log("Error", response.statusText);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    fetchQuote();

    const intervalId = setInterval(() => {
      fetchQuote();
    }, 600000);

    const intervalIdTime = setInterval(() => {
      fetchTime();
    }, 60000);

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalIdTime);
    };
  }, []);

  return (
    <Container>
      {quote && <Quote {...quote} />}
      {time && <CurrentTime {...time} />}
    </Container>
  );
}

export default App;
