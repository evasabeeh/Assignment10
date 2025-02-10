import MapComponent from "./components/MapComponent";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 p-6">Interactive Map</h1>
      <div className="w-full h-full">
        <MapComponent />
      </div>
      
    </div>
  );
}

export default App;
