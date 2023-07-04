import React from "react";

function GamePage() {
  const backgroundImageUrl =
    "https://tse2.mm.bing.net/th?id=OIP.l0yPbfd9jRoKZiBaZQwFGwHaEK&pid=Api&P=0&h=180"; // Replace with the URL of your desired background image
  const gameUrl = "https://my-dig-port-game.vercel.app"; // Replace with the URL of your game website

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
        <a href={gameUrl} target="_blank" rel="noopener noreferrer">
          <button>Play Now</button>
        </a>
      </div>
    </div>
  );
}

export default GamePage;
