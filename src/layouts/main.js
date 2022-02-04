import GameBoard from "../components/GameBoard/GameBoard";
import "./main.css";

const Main = () => {
  return (
    <>
      <header className="header">W O R D L E Z</header>
      <div className="content">
        <GameBoard />
      </div>
      <footer className="footer">
        with love, <br />
        sam{" "}
      </footer>
    </>
  );
};

export default Main;
