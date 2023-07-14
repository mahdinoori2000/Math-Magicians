import { useEffect, useState } from 'react';

export default function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const displayQuote = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
          headers: { 'X-Api-Key': 'r5o8nzHQqR3Cm3JtFBGGbw==hnNgj9RXggBv2U2U' },
          contentType: 'application/json',
        });
        const data = await response.json();
        setQuote(data[0].quote);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (!quote) {
      displayQuote();
    }
  }, [quote]);
  if (loading) {
    return <h2 className="quote">Loading ...</h2>;
  }
  if (error) {
    return <h2 className="quote">Something went wrong, please try again</h2>;
  }
  return (
    <section className="quote">
      <h2 className="quote">{quote}</h2>
    </section>
  );
}
