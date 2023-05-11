import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='triangle'></div>
      <div className='triangle-two'></div>
      <div className='triangle-three'></div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
