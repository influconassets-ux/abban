import Navbar from "./components/Common/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="absolute h-[140px] flex justify-center items-center top-0 py-[40px] px-[5vw] w-full">
        <Navbar />
      </div>
      <Home />
    </>
  );
}

export default App;
