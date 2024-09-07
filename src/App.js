import React from "react";

import { Home, About, Work, Skills, Contact } from "./sections";
import {
  Preloader,
  Wrapper,
  Navbar,
  NavigationDots,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
      <Preloader></Preloader>
      <Wrapper>
        <NavigationDots></NavigationDots>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Work></Work>
        <Skills></Skills>
        <Contact></Contact>
        <Footer></Footer>
      </Wrapper>
    </div>
  );
};

export default App;
