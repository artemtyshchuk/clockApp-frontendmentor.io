import { Container } from "components/Container";
import { CurrentTime } from "components/CurrentTime";
import { Quote } from "components/Quote";
import { defaultQuote, defaultTime } from "mock";
import { useState } from "react";
import { QuoteType } from "types";
import { TimeType } from "types/time";

function App() {
  const [quote, setQuote] = useState<QuoteType | null>(defaultQuote[0]);
  const [time, setTime] = useState<TimeType | null>(defaultTime);

  return (
    <Container>
      {quote && <Quote {...quote} />}
      {time && <CurrentTime {...time} />}
    </Container>
  );
}

export default App;
