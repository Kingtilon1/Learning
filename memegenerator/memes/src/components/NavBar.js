import troll from "../images/TrollFace.png";
export default function NavBar() {
  return (
    <header className="header">
      <img src={troll} className="trollface" />
      <h2 className="header--title">MyMemes</h2>

      <h4 className="header--project"> React Course- Project 3</h4>
    </header>
  );
}
