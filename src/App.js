import "./styles.css";
import QuoteBox from "./componentes/QuoteBox";
import quotes from "./quotes.json";
import { useState } from "react";
export default function App() {
  console.log(quotes);
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex);
  const ChangeQuote = () => {
    const anotherRandom = Math.floor(Math.random() * quotes.length);
    setIndex(anotherRandom);
  };
  const colors = [
    "#00508b",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
  ];

  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColorIndex]}`;
  return (
    <div className="App" style={{ color: colors[randomColorIndex] }}>
      <div className="card">
        <QuoteBox quote={quotes[index].quote} author={quotes[index].author} />
        <button onClick={ChangeQuote}>next</button>
      </div>
    </div>
  );
}
