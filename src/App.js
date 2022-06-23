import ThemeSwitch from "./ThemeSwitch";
import About from "./About";
import Skills from "./Skills";
import Learn from "./Learn";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <ThemeSwitch />
      <About />
      <Skills title="My skillset includes 🛠️" />
      <Learn title="What i want to learn next 🚀" />
      <Main title="Portfolio" />
      <Footer />
    </>
  );
}
export default App;