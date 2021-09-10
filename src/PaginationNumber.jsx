import React from "react";

const PaginationNumber = ({ perPage, totalProduct, pagenet, nextPage, prevPage }) => {
  const pageNumbers = [];

  for(let i=1; i<= Math.ceil(totalProduct/perPage); i++ ){
    pageNumbers.push(i);
  }
 
return(
  <div className='paginationNumber'>
    <button onClick={prevPage}>⟵ </button>

  <span>{ pageNumbers.map((p)=>(
    <button className="buttonPacination" onClick={()=>(pagenet(p))} key={p}> {p} </button>
  )) }</span>
  <button onClick={nextPage}> ⟶ </button>
 </div>
)
};

export default PaginationNumber;
