import Map from "./components/Map";

function App() {
  return (
    <div className="h-screen overflow-y-hidden">
      <div className="flex  h-[calc(100%-32px)] m-4">
        <div className="w-2/5 bg-slate-400">form</div>

        <Map />
      </div>
    </div>
  );
}

export default App;
