import React from 'react';
// import {Bookmark} from 'lucide-react';

const Card = (prop) => {
  console.log(prop);
  return (
    <div id="card">
      <div id="top">
        <div id="logo"><img src={prop.img}></img></div>
        <div id={prop.isSave}>{prop.isSave} 
          <div id="saveimg">
          <img src={prop.saveImg}></img>
          </div>
        </div>
      </div>
      <div id="bodyDiv">
        <div id="compNameDiv">
          <div id="name">{prop.companyName}</div>
          <div id="time">{prop.time}</div>
        </div>
        <div id="discription">{prop.Description}</div>
        <div id='timeTypediv'>
          <div className="jobType">{prop.jobTime}</div>
          <div className="jobType">{prop.jobType}</div>
        </div>
      </div>
      <>
       <div id="line"></div>
       <div id="bottom">
        <div id="salaryLocDiv"> 
          <div id="salary">{prop.salary}</div>
          <div id="Loc">{prop.loc}</div>
        </div>
        <button id="applybtn">Apply Now</button>
       </div>
      </>
    </div>
  )
}

export default Card
