import ThemeSwitch from "../../common/ThemeSwitch";
import About from "../../About";
import Skills from "../../Skills";
import Learn from "../../Learn";
import Main from "../../Main";
import Footer from "../../Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { GlobalStyle } from '../GlobalStyle';
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
      <Main title="Portfolio" />
      <Footer />
    </ThemeProvider>
  );
}
export default App;