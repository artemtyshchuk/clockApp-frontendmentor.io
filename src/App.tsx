import { Container } from "components/Container";
import { Quote } from "components/Quote";
import { defaultQuote } from "mock";
import { useState } from "react";
import { QuoteType } from "types";

function App() {
  const [quote, setQuote] = useState<QuoteType | null>(defaultQuote[0]);

  return (
    <Container>
      {quote && <Quote {...quote} />}
      <></>
    </Container>
  );
}

export default App;
