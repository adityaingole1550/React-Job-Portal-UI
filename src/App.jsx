import React from 'react'
import Card from './components/Card'
import JD from './components/Data'

const App = () => {
  return (
    JD.map((elem)=>{
      return <Card img={elem.img} isSave={elem.isSave} saveImg={elem.saveImg} companyName={elem.companyName} time={elem.time} Description= {elem.Description} jobTime={elem.jobTime} jobType={elem.jobType} salary={elem.salary} loc={elem.loc}/>
    })
  )
}

export default App
