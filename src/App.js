import React, { Component } from 'react'
import { Route,Routes } from "react-router-dom";
import NavBar from './components/NavBar'
import News from './components/News'
import './App.css'
export default class App extends Component {
  render() {
    return (
  <div>
    <NavBar/>
    <Routes>
      <Route exact path='/'element={<News key={'general'} pageSize={9} country='us' category='general'/>}></Route>
      <Route exact path='/business'element={<News key={'business'} pageSize={9} country='us' category='business'/>}></Route>
      <Route exact path='/entertainment'element={<News key={'entertainment'} pageSize={9} country='us' category='entertainment'/>}></Route>
      <Route exact path='/sports'element={<News key={'sports'} pageSize={9} country='us' category='sports'/>}></Route>
      <Route exact path='/science'element={<News key={'science'} pageSize={9} country='us' category='science'/>}></Route>
      <Route exact path='/technology'element={<News key={'technology'} pageSize={9} country='us' category='technology'/>}></Route>
      <Route exact path='/health'element={<News key={'health'} pageSize={9} country='us' category='health'/>}></Route>
    </Routes>
  </div>
    )
  }
}
// 6c20b55c8b7b4cc185f7609bb4d913af