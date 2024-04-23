import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Repositories from "./components/Repositories";
import "./App.css";
import Breadcrumbs from "./components/Breadcrumbs"
import RepoSearch from "./components/RepoSearch";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Breadcrumbs />
        <Header />
        <AboutMe />
        <Repositories />
        <RepoSearch />
      </div>
    </ChakraProvider>
  );
}

export default App;
