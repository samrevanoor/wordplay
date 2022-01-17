import GameBoard from "../components/GameBoard/GameBoard";
import "./main.css";

const Main = () => {
  return (
    <>
      <header className="header">W O R D P L A Y</header>
      <div className="content">
        <GameBoard />
      </div>
      <footer className="footer">by sam </footer>
    </>
  );
};

export default Main;
