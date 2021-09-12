import React,{Component} from 'react';
import './App.css';
import Character from './component/Character';
import Filter from './component/Filter';

//import axios from 'axios';



export default class App extends Component {
  render() {
    
    
    return (
      
      <>
      <div className="container-fluid my-3">
        <div className="row ml-3">
          <Filter species="Species" human="Human" mytholog="Mytholog" other="Other Species" male="Male" female="Female" unknown="Unknown" earth="Post-Apocalyptic Earth" nuptia="Nuptia" origin="Origin" />
          <Character/>
      </div>
    </div>
  </>
        
      
    )
  }
}
