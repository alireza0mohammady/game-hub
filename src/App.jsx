import Aside from "./components/Aside/Aside";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <section className="flex flex-col lg:flex-row">
        <Aside></Aside>
        <Main></Main>
      </section>
    </>
  );
}

export default App;
