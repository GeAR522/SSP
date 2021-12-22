import * as React from 'react';
import {useEffect} from "react";
import { ReviewQuestion } from "../models/models";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";

export default function RQuestion(props) {
    console.log(props)

    const [reviewTotal, setReviewTotal] = React.useState(0);

    const { setQ1Total } = props

    React.useEffect(() => {
        setQ1Total(reviewTotal)
    },[reviewTotal])


    const [click1, setClick1] = React.useState(false)
    const [click2, setClick2] = React.useState(false)
    const [click3, setClick3] = React.useState(false)
    const [click4, setClick4] = React.useState(false)
    const [click5, setClick5] = React.useState(false)
    const [click6, setClick6] = React.useState(false)
    const [click7, setClick7] = React.useState(false)




    const totalUp = (x=1) => {
        setReviewTotal(reviewTotal + x)
    }
    const totalDown = (x=1) => {
        setReviewTotal(reviewTotal - x)
    }




    React.useEffect(() => {
        click1 ? totalUp() : totalDown()
        setCodingForCoverage(click1)
    },[click1])
    function handleClick1() {
        setClick1(!click1)
    }

    React.useEffect(() => {
        click2 ? totalUp() : totalDown()
        setPunctualProgrammer(click2)
    },[click2])
    const handleClick2 = () => {
        setClick2(!click2)
    }

    React.useEffect(() => {
        click3 ? totalUp(3) : totalDown(3)
        setSLOCGold(click3)
    },[click3])
    const handleClick3 = () => {
        setClick3(!click3)
    }

    React.useEffect(() => {
        click4 ? totalUp(2) : totalDown(2)
        setSLOCSilver(click4)
    },[click4])
    const handleClick4 = () => {
        setClick4(!click4)
    }

    React.useEffect(() => {
        click5 ? totalUp() : totalDown()
        setSLOCBronze(click5)
    },[click5])
    const handleClick5 = () => {
        setClick5(!click5)
    }

    React.useEffect(() => {
        click6 ? totalDown(2) : totalUp(2)
        setCrikeyWhopper(click6)
    }, [click6])
    const handleClick6 = () => {
        setClick6(!click6)
    }

    React.useEffect(() => {
        click7 ? totalUp() : totalDown()
        setLawAbidingCitizen(click7)
    },[click7])
    const handleClick7 = () => {
        setClick7(!click7)
    }


    // const MyCheckbox = ({ children, ...props}) => {
    //     const [field, meta] = useField({...props, type: "checkbox"});
    //     return (
    //       <div>
    //           <label className="checkbox-input">
    //               <input type="checkbox" {...field} {...props} />
    //               {children}
    //           </label>
    //           {meta.touched && meta.error ? (
    //           <div className="error">{meta.error}</div>) : null }
    //       </div>
    //     )
    // }

    // const [field] = useField(name);

    return (
        // <div>hello</div>
      <section className = "section review" >
                        <label>
                            <input type="checkbox" name="codingForCoverage" onChange={handleClick1}
                            checked={click1} />
                            {/*<ErrorMessage name="codingForCoverage" component="div" />*/}
                            Coding For Coverage
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" name="punctualProgrammer" onChange={handleClick2}
                            checked={click2}/>
                            {/*<ErrorMessage name="punctualProgrammer" component="div" />*/}
                            Punctual Programmer
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" name="slocGold" onChange={handleClick3}
                                   checked={click3} />
                            {/*<ErrorMessage name="codingForCoverage" component="div" />*/}
                            SLOC Gold
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" name="slocSilver" onChange={handleClick4}
                                   checked={click4} />
                            {/*<ErrorMessage name="codingForCoverage" component="div" />*/}
                            SLOC Silver
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" name="slocBronze" onChange={handleClick5}
                                   checked={click5} />
                            {/*<ErrorMessage name="codingForCoverage" component="div" />*/}
                            SLOC Bronze
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" name="crikey" onChange={handleClick6}
                                   checked={click6} />
                            {/*<ErrorMessage name="codingForCoverage" component="div" />*/}
                            Crikey! That's a Whopper!
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" name="lawAbidingCitizen" onChange={handleClick7}
                                   checked={click7} />
                            {/*<ErrorMessage name="codingForCoverage" component="div" />*/}
                            Law Abiding Citizen?
                        </label>
                        <br />
          )}
              <br />
              <br />

            <h3 className = "questions section title" > Review Section {reviewTotal}< /h3>

             {/*<div className="section review question">*/}
             {/*    <label htmlFor='coding for coverage'>Coding for Coverage : 1 Point</label>*/}
             {/*    <input onChange={handleClick1} type='checkbox' id="coding for coverage" name='coding for coverage' value='1' />*/}
             {/*</div>*/}

             {/*<div className="section review question">*/}
             {/*    <label htmlFor='Punctual Programmer'>Punctual Programmer : 1 Point</label>*/}
             {/*    <input onChange={handleClick2} type='checkbox' id="Punctual Programmer" name='Punctual Programmer' value='1' />*/}
             {/*</div>*/}

             {/*<div className="section review question">*/}
             {/*    <label htmlFor='SLOC Gold'>SLOC Gold : 3 Points</label>*/}
             {/*    <input onChange={handleClick3} type='checkbox' id="SLOC Gold" name='SLOC Gold' value='1' />*/}
             {/*</div>*/}

             {/*<div className="section review question">*/}
             {/*    <label htmlFor='SLOC Silver'>SLOC Silver : 2 Points</label>*/}
             {/*    <input onChange={handleClick4} type='checkbox' id="SLOC Silver" name='SLOC Silver' value='1' />*/}
             {/*</div>*/}


             {/*<div className="section review question">*/}
             {/*    <label htmlFor='SLOC Bronze'>SLOC Bronze : 1 Point</label>*/}
             {/*    <input  onChange={handleClick5} type='checkbox' id="SLOC Bronze" name='SLOC Bronze' value='1' />*/}
             {/*</div>*/}


             {/*<div className="section review question">*/}
             {/*    <label htmlFor='Crikey! Thats a whooper'>Crikey! That's a whooper : -2 Points</label>*/}
             {/*    <input onChange={handleClick6} type='checkbox' id="Crikey! Thats a whooper" name='Crikey! Thats a whooper' value='1' />*/}
             {/*</div>*/}


             {/*<div className="section review question">*/}
             {/*    <label htmlFor='Law Abiding Citizen'>Law Abiding Citizen : 1 Point</label>*/}
             {/*    <input onChange={handleClick7} type='checkbox' id="Law Abiding Citizen" name='Law Abiding Citizen' value='1' />*/}
             {/*</div>*/}

    </section>
    )
}
