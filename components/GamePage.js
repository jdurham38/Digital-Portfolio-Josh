import React, { useState, useEffect } from "react";

const GamePage = () => {
  const backgroundImageUrl =
    "https://tse2.mm.bing.net/th?id=OIP.l0yPbfd9jRoKZiBaZQwFGwHaEK&pid=Api&P=0&h=180";
  const gameUrl = "https://my-dig-port-game.vercel.app";
  const apiEndpoint = "https://myapiportfolio.azurewebsites.net/api/HelloWorld";

  const [responseText, setResponseText] = useState("");

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(apiEndpoint)
      .then((response) => response.text())
      .then((data) => setResponseText(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      style={{
        background: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <img
          src={backgroundImageUrl}
          alt="Game Background"
          style={{
            width: "100%",
            marginBottom: "20px",
          }}
        />
        <h1>Play the Game</h1>
        <p>API Response: {responseText}</p>
        <a href={gameUrl} target="_blank" rel="noopener noreferrer">
          <button>Play Now</button>
        </a>
      </div>
    </div>
  );
};

export default GamePage;
