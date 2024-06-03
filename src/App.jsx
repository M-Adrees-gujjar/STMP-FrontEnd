import SignIn from "./component/Account-Registeration/SignIn";
// import SignUp from "./component/Account-Registeration/SignUp";
// import Tabel from "./component/Tabels/Tabel";
import Exam from "./component/Exam/Exam";
import Home from './Home';
import Profile from './component/Profile/Profile'
import Setting from './component/Setting/Setting'
import { BrowserRouter , Routes ,Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signUp" element={<Exam />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/setting" element={<Setting />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;









