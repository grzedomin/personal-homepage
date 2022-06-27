import ThemeSwitch from "./ThemeSwitch";
import About from "./About";
import Skills from "./Skills";
import Learn from "./Learn";
import Main from "./Main";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from './GlobalStyle';
import useToggleTheme from "./useToggleTheme";

function App() {

 const { themeState, toggleTheme} = useToggleTheme();
 
  return (
    <ThemeProvider theme={themeState === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
      <ThemeSwitch toggleTheme={toggleTheme} themeState={themeState}/>
      <About />
      <Skills title="My skillset includes 🛠️" />
      <Learn title="What i want to learn next 🚀" />
      <Main title="Portfolio" />
      <Footer />
    </ThemeProvider>
  );
}
export default App;