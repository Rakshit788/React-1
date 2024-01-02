// import { useState } from "react";

// function List({unorderlist}){
// return(
//     <ul>
//       {unorderlist.map((item)=>{
//          return {item}
//       })}
//     </ul>
// )
// }

// export default List;


import { useState } from "react";

function List({ unorderlist }) {
  return (
    <ul>
      {unorderlist.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
