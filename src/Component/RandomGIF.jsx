import { useState } from "react";

const gifList = [
  "https://media.giphy.com/media/3o6ZsX2dPpL3q8j4yI/giphy.gif",
  "https://media.giphy.com/media/l3vRnRsbG0r8JDKis/giphy.gif",
  "https://media.giphy.com/media/xT1XGYPSsGPPjAiVHi/giphy.gif",
  "https://media.giphy.com/media/3og0IPxMM0erATueVW/giphy.gif",
  "https://media.giphy.com/media/1d5nDHZLP0AwU/giphy.gif",
];

export default function RandomGIF() {
  const [currentGif, setCurrentGif] = useState(gifList[0]);

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * gifList.length);
    setCurrentGif(gifList[randomIndex]);
  }

  return (
    <div style={styles.container}>
      <img src={currentGif} alt="Random Gif" style={styles.image} />
      <button onClick={handleClick} style={styles.button}>Show Random GIF</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  image: {
    width: "300px",
    height: "auto",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
  },
};
