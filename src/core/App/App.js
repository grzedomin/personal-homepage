import ThemeSwitch from "../../common/ThemeSwitch";
import About from "../../features/personalHomepage/About";
import Skills from "../../features/personalHomepage/Skills";
import Learn from "../../features/personalHomepage/Learn";
import Portfolio from "../../features/personalHomepage/Portfolio";
import Footer from "../../features/personalHomepage/Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { GlobalStyle } from "../GlobalStyle";
import { useSelector } from "react-redux";

function App() {
  const { isLightTheme } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <ThemeSwitch />
      <About />
      <Skills title="My skillset includes 🛠️" />
      <Learn title="What i want to learn next 🚀" />
      <Portfolio title="Portfolio" />
      <Footer />
    </ThemeProvider>
  );
}
export default App;