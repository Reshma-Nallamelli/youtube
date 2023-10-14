import React from 'react'
import {useContext} from 'react'
import {store} from '../App'
export default function Home () {
  const [data,setData]=useContext(store)
  let sno=1;
  return (
    <>
    <div>
     <table className='table table-bordered'>
       <thead>
         <tr>
          <td>sno</td>
          <td>name</td>
          <td>roll</td>
          <td>branch</td>
         </tr>
       </thead>
       <tbody>
        {
          data.map((e,i)=>{
            return(
              <tr>
                <td>{sno++}</td>
                <td>{e.name}</td>
                <td>{e.roll}</td>
                <td>{e.branch}</td>
              </tr>
            )
          })
        }
       </tbody>
      </table>
    </div>
    </>
    
  )
}