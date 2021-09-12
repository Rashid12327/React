import React, { Component } from 'react'
import Details from './Details';

export class Character extends Component {
  constructor(){
    super();
    this.state = {
      results: this.results,
      loading: false
    }
  }
  async componentDidMount(){
      console.log("cdm");
      let url = "https://rickandmortyapi.com/api/character";
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({results: parsedData.results})
  }
    render() {
      
        return (
            
  <>
     
    <div className="col-lg-10">
    <h1>Selected Filters</h1>
    <div className="">
          <div className="row m-3 bg-dark sm">
            {this.state.results.map((element)=> {
              return <div key={element.id}>
                <div name={element.name.slice(0,45)} status={element.status.slice(0,45)}
                imageUrl= {element.image}></div>
              </div>
            })}
          <Details name="name" status="status" imageUrl="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
          <Details name="name" status="status" imageUrl=""/>
          <Details name="name" status="status" imageUrl=""/>
          <Details name="name" status="status" imageUrl=""/>
        </div>
        </div>
        </div>
        
      
  </>
            
        )
    }
}

export default Character
