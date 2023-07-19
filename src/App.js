import './App.css';
import React, {Component} from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
export default class App extends Component
{
  render()
  {
    return(

      <div>

        <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={< News  key='general' pageSize={8} country="in" category="general"/>}></Route>
          <Route exact path="/Business" element={ <News key='business'  pageSize={8} country="in" category="business"/>}></Route>
          <Route exact path="/Entertainment" element={<News key='entertainment'  pageSize={8} country="in" category="entertainment"/>}></Route>
          <Route exact path="/General" element={ <News key='general'  pageSize={8} country="in" category="general"/>}></Route>
          <Route exact path="/Health" element={ <News key='health'  pageSize={8} country="in" category="health"/>}></Route>
          <Route excat path="/Science" element={ <News key='science'  pageSize={8} country="in" category="science"/>}></Route>
          <Route exact path="/Sports" element={ <News key='sports'  pageSize={8} country="in" category="sports"/>}></Route>
          <Route exact path="/Technology" element={ <News  key='technology}>' pageSize={8} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>



      // <div>
      //   <Router>
      //      <NavBar></NavBar>
      //      <Routes>
      //          <Route exact path="/"><News key="general" pageSize={5} country="in" category="general"></News></Route>
      //          <Route exact path="/business"><News key="business" pageSize={5} country="in" category="business"></News></Route>
      //          <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country="in" category="entertainment"></News></Route>
      //          <Route exact path="/general"><News key="general" pageSize={5} country="in" category="general"></News></Route>
      //          <Route exact path="/health"><News key="health" pageSize={5} country="in" category="health"></News></Route>
      //          <Route exact path="/sports"><News key="sports" pageSize={5} country="in" category="sports"></News></Route>
      //          <Route exact path="/science"><News key="science" pageSize={5} country="in" category="science"></News></Route>
      //          <Route exact path="/technology"><News key="technology" pageSize={5} country="in" category="technology"></News></Route>
      //      </Routes>
      //   </Router>
      // </div>
    );
  }
}
