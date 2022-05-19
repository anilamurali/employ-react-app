import React from 'react'

const Viewall = () => {
    var viewemploy=[{
        "empid":1,
        "empname":"Anila Murali",
        "description":"Engineer",
        "salary":50000,
        "company":"TCS",
        "dob":6/2/1998,
        "email":"anila@gmail.com"},
        {
        "empid":2,
        "empname":"Anju Leksmi",
        "description":"analyst",
        "salary":50000,
        "company":"TCS",
        "dob":16/9/1999,
        "email":"anju@gmail.com"},
    
    
      ]
  return (
    <div>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                {
                    viewemploy.map((value,key)=>{
                        return <div class='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                                                 
                                    
                                <table class="table">
    
    
    <tbody>
      <tr>
        <th><p class="card-text">empid:{value.empid}</p></th>
        <td><p class="card-text">empname:{value.empname}</p></td>
        <td><p class="card-text">des:{value.description}</p></td>
        <td><p class="card-text">salary:{value.salary}</p></td>
        <td><p class="card-text">company:{value.company}</p></td>
        <td><p class="card-text">dob:{value.dob}</p></td>
        <td><p class="card-text">email:{value.email}</p></td>

      </tr>
      </tbody>
  </table>
                                    
                                     </div>
                            
                    
                    })}
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewall