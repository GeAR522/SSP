import * as React from 'react'

export default function useCodingForCoverage() {

  const [codingTotal, setCodingTotal] = React.useState(0)
  const [codingForCoverage,setCodingForCoverage] = React.useState(false)
  const [punctualProgrammer, setPunctualProgrammer] = React.useState(false)
  const [SLOCGold, setSLOCGold] = React.useState(false)
  const [SLOCSilver, setSLOCSilver] = React.useState(false)
  const [SLOCBronze,setSLOCBronze] = React.useState(false)
  const [crikeyWhopper, setCrikeyWhopper] = React.useState(false)
  const [lawAbidingCitizen,setLawAbidingCitizen] = React.useState(false)

  const [cocnum, setCocnum] = React.useState(0)
  const [ppnum, setPpnum] = React.useState(0)
  const [sgnum, setSgnum] = React.useState(0)
  const [ssnum, setSsnum] = React.useState(0)
  const [sbnum, setSbnum] = React.useState(0)
  const [cwnum, setCwnum] = React.useState(0)
  const [lacnum, setLacnum] = React.useState(0)

  React.useEffect(() => {
    setCodingTotal(cocnum + ppnum + sgnum + ssnum + sbnum + cwnum + lacnum)
  },[cocnum,ppnum,sgnum,ssnum,sbnum,cwnum,lacnum])

  function handleChange1() {
    setCodingForCoverage(!codingForCoverage)
  }
  function handleChange2() {
    setPunctualProgrammer(!punctualProgrammer)
  }
  function handleChange3() {
    setSLOCGold(!SLOCGold)
  }
  function handleChange4() {
    setSLOCSilver(!SLOCSilver)
  }
  function handleChange5() {
    setSLOCBronze(!SLOCBronze)
  }
  function handleChange6() {
    setCrikeyWhopper(!crikeyWhopper)
  }
  function handleChange7() {
    setLawAbidingCitizen(!lawAbidingCitizen)
  }

  React.useEffect(() => {
    codingForCoverage ? setCocnum(1) : setCocnum(0)
  },[codingForCoverage])
  React.useEffect(() => {
    punctualProgrammer ? setPpnum(1) : setPpnum(0)
  },[punctualProgrammer])
  React.useEffect(() => {
    SLOCGold ? setSgnum(3) : setSgnum(0)
  },[SLOCGold])
  React.useEffect(() => {
    SLOCSilver ? setSsnum(2) : setSsnum(0)
  },[SLOCSilver])
  React.useEffect(() => {
    SLOCBronze ? setSbnum(1) : setSbnum(0)
  },[SLOCBronze])
  React.useEffect(() => {
    crikeyWhopper ? setCwnum(-2) : setCwnum(0)
  },[crikeyWhopper])
  React.useEffect(() => {
    lawAbidingCitizen ? setLacnum(1) : setLacnum(0)
  },[lawAbidingCitizen])


  return {
    codingForCoverage,
    punctualProgrammer,
    SLOCGold,
    SLOCSilver,
    SLOCBronze,
    crikeyWhopper,
    lawAbidingCitizen,
    codingTotal,
    cocRender: (
    <section>

      <h2>R Total : {codingTotal}</h2>

      <label>
        <h4>Coding For Coverage :</h4>
        <input type="checkbox" name="codingForCoverage" onChange={handleChange1} checked={codingForCoverage} />
         { codingForCoverage ? "true" : "false" }
      </label>


      <label>
        <h4>Punctual Programmer :</h4>
        <input type="checkbox" name="codingForCoverage" onChange={handleChange2} checked={punctualProgrammer} />
        { punctualProgrammer ? "true" : "false" }
      </label>


      <label>
        <h4>SLOC Gold :</h4>
        <input type="checkbox" name="codingForCoverage" onChange={handleChange3} checked={SLOCGold} />
        {SLOCGold ? "true" : "false" }
      </label>


      <label>
        <h4>SLOC Silver :</h4>
        <input type="checkbox" name="codingForCoverage" onChange={handleChange4} checked={SLOCSilver} />
        { SLOCSilver ? "true" : "false" }
      </label>


      <label>
        <h4>SLOC Bronze :</h4>
        <input type="checkbox" name="codingForCoverage" onChange={handleChange5} checked={SLOCBronze} />
        { SLOCBronze ? "true" : "false" }
      </label>


      <label>
        <h4>Crikey! Whopper! :</h4>
        <input type="checkbox" name="codingForCoverage" onChange={handleChange6} checked={crikeyWhopper} />
        { crikeyWhopper ? "true" : "false" }
      </label>


      <label>
        <h4>Law Abiding Citizen :</h4>
        <input type="checkbox" name="codingForCoverage" onChange={handleChange7} checked={lawAbidingCitizen} />
        { lawAbidingCitizen ? "true" : "false" }
      </label>


      {/*<div>*/}
      {/*  <button onClick={submitClick}>Save</button>*/}
      {/*</div>*/}

    </section>
  )}
}
