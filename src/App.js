import Button from "./components/Button";
import Plan from "./components/Plan";
import Text from "./components/Text";
import illustrationHero from "./assets/illustration-hero.svg";
import BackgroundImage from "./assets/pattern-background-desktop.svg";

function App() {
  return (
    <div className="container">
      <img src={illustrationHero} alt="bac" />
      <Text />
      <Plan />
      <Button />
    </div>
  );
}

export default App;
