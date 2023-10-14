import React from 'react'

export default function Searchbar(props) {
  return (
    <>
    <div className='row'>
      <div className='col-md-8'>
        <input type="text" className='searchbox float-end' placeholder='search..'/>
        <button class='float-end button2'><i class="fa-solid fa-microphone"></i></button>
        <button class='float-end button1'><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  
    <table className='table table-bordered sample' style={{color:"white"}}>
      <thead>
        <tr>
          <th>sno</th>
          <th>Name</th>
          <th>Rollno</th>
          <th>Branch</th>
        </tr>
      </thead>
      <tbody>
        {
          <tr>
            <td>101</td>
            <td>abc</td>
            <td>11</td>
            <td>CSE</td>
          </tr>
        }
      </tbody>
      <tbody>
        {
          <tr>
            <td>102</td>
            <td>abdefc</td>
            <td>16</td>
            <td>MECH</td>
          </tr>
        }
      </tbody>
    </table>
    </>
  )
}