import { About, Welcome, Technologies, Projects } from "./components/home";
import { Layout } from "./components/layout/layout";
function App() {
  return (
    <div>
      <Layout>
        <Welcome />
        <About />
        <Technologies />
        <Projects />
      </Layout>
    </div>
  );
}

export default App;
