import { Route, Routes } from "react-router-dom";
import { Home, Certificate, Job, OfferLetter, Payment } from "../pages";
import {
  Header,
  SolutionWriting,
  ScreeningTasks,
  JobApplicationStatus,
  Invoice,
  Profile,
  MyBankDetail,
} from "./index";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      {/* shows header on every page */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* jobs page routes */}
        <Route path="/job" element={<Job />}>
          <Route path="solution-writing" element={<SolutionWriting />} />
          <Route path="screening-tasks" element={<ScreeningTasks />} />
          <Route
            path="job-application-status"
            element={<JobApplicationStatus />}
          />
        </Route>
        {/* payments page routes */}
        <Route path="/payment" element={<Payment />}>
          <Route
            path="invoice"
            element={
              <Invoice
                date={" November 19 2022"}
                amount={"50$"}
                project={"K12 Math Text Book"}
              />
            }
          />
          <Route path="my-bank-detail" element={<MyBankDetail />} />
        </Route>
        {/* other pages */}
        <Route path="/offerletter" element={<OfferLetter />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
