import GameBoard from "../components/GameBoard/GameBoard";
import "./main.css";

const Main = () => {
  return (
    <>
      <header className="header">W O R D L E Z</header>
      <div className="content">
        {/* <GameBoard /> */}
        <span style={{ textAlign: "center" }}>
          to play, go to
          <br />
          <a href="wordlez.samrevanoor.com">wordlez.samrevanoor.com</a>
        </span>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: " center" }}>
        <img src="favicon.ico" alt="flower" width="80px" />
      </div>
      <footer className="footer">
        with love, <br />
        sam{" "}
      </footer>
    </>
  );
};

export default Main;
