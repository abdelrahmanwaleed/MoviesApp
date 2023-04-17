import Header from "./component/Header";
import WatchList from "./component/WatchList";
import Watched from "./component/Watched";
import Add from "./component/Add";
import ContextProvider from "./component/context/GlobalContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}

export default App;
