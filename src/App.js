import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <div className='triangle'></div>
      <div className='triangle-two'></div>
      <div className='triangle-three'></div>
      <Footer />
    </div>
  );
}

export default App;
