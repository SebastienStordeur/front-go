import { useEffect } from "react";
import Router from "./components/router/Router";
import { useAuth } from "./context/auth";

function App() {
  const { useToken } = useAuth();
  useEffect(() => {
    useToken();
  }, []);

  return <Router />;
}

export default App;
