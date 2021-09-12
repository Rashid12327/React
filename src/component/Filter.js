import React, { Component } from 'react'

export class Filter extends Component {
    render() {
      let {species, human, mytholog, other,male,female,unknown,earth,nuptia,origin} = this.props;
        return (
            
                <div className="col-lg-2">
            <h1>Filters</h1>
            <div className="card col-xs-12">
              <div className="card-body">
                <h5 className="card-title">{species}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{human}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{mytholog}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{other}</h6>
              
            </div>
          </div>
          
          <div className="card col-xs-12">
            <div className="card-body">
              <h5 className="card-title">Gender</h5>
              <h6 className="card-subtitle mb-2 text-muted">{male}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{female}</h6>
            </div>
          </div>
          
          <div className="card col-xs-12">
            <div className="card-body">
              <h5 className="card-title">Origin</h5>
              <h6 className="card-subtitle mb-2 text-muted">{unknown}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{earth}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{nuptia}</h6>
              <h6 className="card-subtitle mb-2 text-muted">{origin}</h6>
            </div>
          </div>
        </div>
            
        )
    }
}

export default Filter
