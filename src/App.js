import Map from "./components/Map";
import Events from "./components/Events";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex  h-[calc(100%-32px)] m-4 ">
        <Events />
        <Map />
      </div>
    </div>
  );
}

export default App;
