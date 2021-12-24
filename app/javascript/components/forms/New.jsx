import * as React from 'react';
import {useState} from "react";
import { Form as SSPForm, ReviewQuestion } from "../../models/models"
import RQuestion from "../RQuestion";
import CodingForCoverage from "../CodingForCoverage";
import useCodingForCoverage from "../CodingForCoverage";
import { visit } from 'turbolinks';

export default function New() {

  // const [isLoading, setIsLoading] = React.useState(true)

  const {cocRender, codingTotal, codingForCoverage, punctualProgrammer,
    SLOCGold, SLOCSilver, SLOCBronze, crikeyWhopper,lawAbidingCitizen
  } = useCodingForCoverage()
  const [gitLink, setGitLink] = React.useState('')
  const [q1Total, setQ1Total] = React.useState(0)
  const [subtotal, setSubtotal] = React.useState(0)
  const [totalPoints, setTotalPoints] = React.useState(0)


  // const { q1_total: q1_total } = Form
  // {with: {forms: "id}"} }

  // const handleQ1TotalChange = (event) => {
  //   setQ1Total(event.target.value)
  // }
  React.useEffect(() => {
    setSubtotal(codingTotal)
  },[codingTotal])

  React.useEffect(() => {
    setQ1Total(subtotal)
  },[subtotal])

  React.useEffect(() => {
    setTotalPoints(q1Total)
  },[q1Total])

  // { with: ['reviewQuestions'] }

  const handleFormSubmit = () => {
    const form = new SSPForm({ q1Total: q1Total, git_link: gitLink, totalPoints: totalPoints })
    form.reviewQuestion = new ReviewQuestion({
      codingForCoverage: codingForCoverage,
      punctualProgrammer: punctualProgrammer,
      SLOCGold: SLOCGold,
      SLOCSilver: SLOCSilver,
      SLOCBronze: SLOCBronze,
      crikeyWhopper: crikeyWhopper,
      lawAbidingCitizen: lawAbidingCitizen,
    })
    // const reviewQuestion = new ReviewQuestion({ codingForCoverage: codingForCoverage })
    console.log(form)
    console.log(form.reviewQuestion)
    form.save({with: "reviewQuestion" }).then((success) => {
      if (success) {
        visit('/forms')
      }
    });

    // reviewQuestion.save().then((success2) => {
    //   console.log(success2)})
  }



  console.log( q1Total, codingTotal, subtotal)

  function gitLinkChange(event) {
    setGitLink(event.target.value)
  }

  return(
    <>
    <label>
      <input type="text" onChange={gitLinkChange} value={gitLink} />
      Git Link
    </label>
      <p>form button below</p>
      <div>
        <button onClick={handleFormSubmit}>Save</button>
      </div>

      {/*<div>*/}

      {/*  <input type="number" onChange={handleQ1TotalChange} value={subtotal} />*/}
      {/*</div>*/}

      <div className="subtotal">
        <h3>Q1 Total</h3><h4> { q1Total } </h4>
      </div>


      {/*<div className="review_question_checkbox" >*/}
      {/*  <label htmlFor='codingForCoverage'>Coding For Coverage</label>*/}
      {/*  <input type="checkbox" name="codingForCoverage" onChange={handleCodingForCoverageChange} checked={codingForCoverage}/>*/}
      {/*</div>*/}

      {/*<div className="review_question_checkbox">*/}
      {/*  <label htmlFor='punctualProgrammer'>Punctual Programmer</label>*/}
      {/*  <input type="checkbox" name="punctualProgrammer" onChange={handleCodingForPunctualProgrammer} checked={punctualProgrammer}/>*/}
      {/*</div>*/}

      {/*<RQuestion props={ setQ1Total } />*/}

      {cocRender}

    <br/>
    </>
  )
}
