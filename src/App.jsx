import Layout from "./components/Layout";
import WeatherProvider from "./context/weatherContext";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Layout>
        <WeatherProvider>
          <Homepage />
        </WeatherProvider>
      </Layout>
    </>
  );
}

export default App;
