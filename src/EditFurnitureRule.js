import React from 'react'

const EditFurnitureRule = props => {
  return (
    <form>
      <div className="form-group">
        <label>Furniture Type</label>
        <input type="text" className="form-control" name="type" value={props.type} onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group">
        <label className="text-white">Rental Amount</label>
        <input type="number" className="form-control" name="cost" value={props.cost} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label className="text-white">Customer Age</label>
        <input type="number" className="form-control" name="cost" value={props.age} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label className="text-white">ZIP Code</label>
        <input type="number" className="form-control" name="cost" value={props.code} onChange={ props.handleInputChange} />
      </div>
      <button onClick={ props.updateFurnitureRule } className="btn btn-success mt-2"> Update </button>
      <button onClick={() => props.setEditing(false)} className="btn btn-info mt-2">Cancel</button>
    </form>
  )
}

export default EditFurnitureRule;