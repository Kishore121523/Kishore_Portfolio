import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { Home, About, Work, Skills, Contact } from "./sections";
import {
  Preloader,
  Wrapper,
  Navbar,
  NavigationDots,
  Footer,
} from "./components";

library.add(fas);

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
