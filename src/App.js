import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import VideoList from "./components/Videos/VideoList";
import VideoDetails from "./components/Videos/VideoDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/videos" element={<VideoList />} />
        <Route path="/videos/:videoId" element={<VideoDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
