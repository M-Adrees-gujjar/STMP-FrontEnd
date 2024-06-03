// import Header from "../src/component/Header/Header";
import LogedHeader from "../src/component/LogedHeader/LogedHeader"
// import DashBoard from "../src/component/DashBoard/DashBoard";
import SectionOne from "./component/Home/SectionOne"
import Team from "../src/component/Team/Team";
import PopUp from '../src/component/PopUp/PopUp'
import Project from "../src/component/Projects/Project";
import { useState } from "react";
function App() {
  const [open, setOpen] = useState(false);

  function handelClick(){
    setOpen(true);
  }
  return (
    <>
    <LogedHeader handelClick = {handelClick}/>
    {/* <Header /> */}
    {/* <DashBoard /> */}
    <SectionOne />
    <PopUp  open = {open} setOpen = {setOpen} />
    <Team />
    <Project />
    </>
  );
}

export default App;
