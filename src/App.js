import Map from "./components/Map";
import NotesContainer from "./components/NotesContainer";

function App() {
  return (
      <div className="h-screen overflow-hidden">
        <div className="flex  h-[calc(100%-32px)] m-4 rounded-xl ">
          <NotesContainer />
          <Map />
        </div>
      </div>
  );
}

export default App;
