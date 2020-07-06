import React from 'react'

const AddFurnitureRule = props => {
  return (
    <form onSubmit={ props.addFurnitureRule }>
      <div className="form-group">
        <label>Furniture type</label>
        <input type="text" className="form-control" name="type" value={props.type} onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group">
        <label>Rental amount</label>
        <input type="number" className="form-control" name="cost" value={props.cost} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label>Customer Age</label>
        <input type="number" className="form-control" name="age" value={props.age} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label>ZIP Code</label>
        <input type="number" className="form-control" name="code" value={props.code} onChange={ props.handleInputChange} />
      </div>
      <button className="btn btn-success mt-2"> Add Rule </button>
    </form>
  )
}

export default AddFurnitureRule;