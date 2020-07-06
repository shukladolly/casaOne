import React from 'react';

  const FurnitureRuleList = (props) => {
    return (  
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Furniture Type</th>
            <th>Furniture Amount</th>
            <th>Customer Age</th>
            <th>ZIP Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            { 
              props.furnitureRules.length > 0 ? (
                props.furnitureRules.map((furnitureRule) => (
                    <tr key={furnitureRule.id}>
                      <td>{ furnitureRule.id }</td>
                      <td>{ furnitureRule.type }</td>
                      <td>{ furnitureRule.cost }</td>
                      <td>{ furnitureRule.age }</td>
                      <td>{ furnitureRule.code }</td>

                      <td>
                        <button className="btn btn-primary ml-2" onClick={() => props.editFurnitureRule(furnitureRule) }>Edit</button>
                        <button className="btn btn-danger ml-2" onClick={() => props.deleteFurnitureRule(furnitureRule.id) }>Delete</button>
                  
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td colSpan={6}>Make your own rules ;)</td>
                </tr>
              )
            }
        </tbody>
      </table>
    );
  }


export default FurnitureRuleList;


