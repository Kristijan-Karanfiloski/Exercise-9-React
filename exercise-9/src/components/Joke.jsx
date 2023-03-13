// import "./Joke.css";

const Joke = (props) => {
  //   return props.text.map((joke) => <li>{joke}</li>); -- 1st way
  return <li>{props.text}</li>;
};

export default Joke;
