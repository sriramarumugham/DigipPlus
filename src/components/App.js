import { Route, Routes } from "react-router-dom";
import { Home, Certificate, Job, OfferLetter, Payment } from "../pages";
import {
  Header,
  SolutionWriting,
  VideoSolutionWrtiing,
  ScreeningTasks,
  JobApplicationStatus,
} from "./index";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job" element={<Job />}>
          <Route path="" element={<SolutionWriting />} />
          <Route
            path="video-solution-writing"
            element={<VideoSolutionWrtiing />}
          />
          <Route path="screening-tasks" element={<ScreeningTasks />} />
          <Route
            path="job-application-status"
            element={<JobApplicationStatus />}
          />
        </Route>
        <Route path="/payment" element={<Payment />} />
        <Route path="/offerletter" element={<OfferLetter />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </div>
  );
}

export default App;
