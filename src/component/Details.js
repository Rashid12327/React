import React, { Component } from 'react'

export class Details extends Component {
    render() {
        let {name, status, imageUrl} = this.props;
    
        return (
            
            
              <div className="card col-md-3 min bg-dark m-2">
                <div className="text ">
                <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
                <div className="text-block">
                  <div className="rp">
                    <p>Evil Morty</p>
                    <p>id:110 - created 2 years ago</p>
                    </div>
                  </div>
                  </div>
                <div className="card-body-dark tb">
                <table className="table table-dark">
                  <thead>
                    <tr>
                      <th>Satus</th>
                      <td>Alive</td>
                    </tr>
                    <tr>
                      <th>Satus</th>
                      <td>Alive</td>
                    </tr>
                    <tr>
                      <th>Satus</th>
                      <td>Alive</td>
                    </tr>
                    <tr>
                      <th>Satus</th>
                      <td>Alive</td>
                    </tr>
                    <tr>
                      <th>Satus</th>
                      <td>Alive</td>
                    </tr>
                  </thead>
                  <tbody>

                  </tbody>
                </table>
              </div>
            </div>
            
          
        )
    }
}

export default Details
