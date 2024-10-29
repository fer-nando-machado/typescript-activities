import { useEffect, useState } from "react";
import { fetchMessage } from "./services/message";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessage().then(setMessage);
  }, []);

  return <div>Hello: {message}.</div>;
}

export default App;
