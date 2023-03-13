import Joke from "./components/Joke";

function App() {
  const jokes = [
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why did the math book look sad? Because it had too many problems.",
    "How do you organize a space party? You planet.",
    "What do you call a lazy kangaroo? A pouch potato.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why don't scientists trust atoms? Because they make up everything.",
  ];

  return (
    <div className="App">
      <h1>Jokes to brighten your day 😁 </h1>
      <ul>
        {/* <Joke text={jokes} /> ---- 1st way */}
        {jokes.map((joke) => (
          <Joke text={joke} />
        ))}
      </ul>
    </div>
  );
}

export default App;
