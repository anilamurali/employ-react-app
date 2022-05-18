import React, { useState } from 'react'

const Addemploy = () => {
    var [empid,setId]=useState("")
    var [ename,setName]=useState("")
    var [des,setDes]=useState("")
    var [salary,setSalary]=useState("")
    var [company,setCompany]=useState("")
    var [dob,setDob]=useState("")
    var [email,setEmail]=useState("")
    const changeData=()=>{
        const data={"employid":empid,"empname":ename,"description":des,"salary":salary,"company":company,"dob":dob,"email":email}
        console.log(data)
    }
  return (
    <div>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-2">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Employee ID</label>
                    <input onChange={(e)=>{setId(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Employee Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Description</label>
                    <input onChange={(e)=>{setDes(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Salary</label>
                    <input onChange={(e)=>{setSalary(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Company Name</label>
                    <input onChange={(e)=>{setCompany(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Dateof Birth</label>
                    <input onChange={(e)=>{setDob(e.target.value)}} type="date" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="email" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={changeData} class="btn btn-primary">REGISTER</button>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button class="btn btn-primary">CLEAR</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addemploy