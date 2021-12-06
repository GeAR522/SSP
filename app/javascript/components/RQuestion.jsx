import * as React from 'react';
import {useEffect} from "react";

export default function RQuestion(props) {

    const [reviewTotal, setReviewTotal] = React.useState(0);

    const [codingForCoverage, setCodingForCoverage] = React.useState(true)
    const [punctualProgrammer, setPunctualProgrammer] = React.useState(true)
    const [SLOCGold, setSLOCGold] = React.useState(true)
    const [SLOCSilver, setSLOCSilver] = React.useState(true)
    const [SLOCBronze,setSLOCBronze] = React.useState(true)
    const [crikeyWhopper, setCrikeyWhopper] = React.useState(false)
    const [lawAbidingCitizen,setLawAbidingCitizen] = React.useState(true)

    React.useEffect(() => {
        props = reviewTotal
    },[reviewTotal])

    const totalUp = () => {
        setReviewTotal(reviewTotal + 1)
    }
    const totalDown = () => {
        setReviewTotal(reviewTotal - 1)
    }

    const handleClick1 = () => {
        setCodingForCoverage(!codingForCoverage)
        if (codingForCoverage) {
            totalUp()
        } else {
            totalDown()
        }
    }

    const handleClick2 = () => {
        setPunctualProgrammer(!punctualProgrammer)
        if (punctualProgrammer) {
            setReviewTotal(reviewTotal + 1)
        } else {
            setReviewTotal(reviewTotal -1)
        }
    }

    const handleClick3 = () => {
        setSLOCGold(!SLOCGold)
        if (SLOCGold) {
            setReviewTotal(reviewTotal + 3)
        } else {
            setReviewTotal(reviewTotal -3)
        }
    }

    const handleClick4 = () => {
        setSLOCSilver(!SLOCSilver)
        if (SLOCSilver) {
            setReviewTotal(reviewTotal + 2)
        } else {
            setReviewTotal(reviewTotal -2)
        }
    }

    const handleClick5 = () => {
        setSLOCBronze(!SLOCBronze)
        if (SLOCBronze) {
            setReviewTotal(reviewTotal + 1)
        } else {
            setReviewTotal(reviewTotal -1)
        }
    }
    const handleClick6 = () => {
        setCrikeyWhopper(!crikeyWhopper)
        if (crikeyWhopper) {
            setReviewTotal(reviewTotal + 2)
        } else {
            setReviewTotal(reviewTotal -2)
        }
    }
    const handleClick7 = () => {
        setLawAbidingCitizen(!lawAbidingCitizen)
        if (lawAbidingCitizen) {
            setReviewTotal(reviewTotal + 1)
        } else {
            setReviewTotal(reviewTotal -1)
        }
    }

    return (
        // <div>hello</div>
        <section className = "section review" >
            <h3 className = "questions section title" > Review Section {reviewTotal}< /h3>

             <div className="section review question">
                 <label htmlFor='coding for coverage'>Coding for Coverage : 1 Point</label>
                 <input onChange={handleClick1} type='checkbox' id="coding for coverage" name='coding for coverage' value='1' />
             </div>

             <div className="section review question">
                 <label htmlFor='Punctual Programmer'>Punctual Programmer : 1 Point</label>
                 <input onChange={handleClick2} type='checkbox' id="Punctual Programmer" name='Punctual Programmer' value='1' />
             </div>

             <div className="section review question">
                 <label htmlFor='SLOC Gold'>SLOC Gold : 3 Points</label>
                 <input onChange={handleClick3} type='checkbox' id="SLOC Gold" name='SLOC Gold' value='1' />
             </div>

             <div className="section review question">
                 <label htmlFor='SLOC Silver'>SLOC Silver : 2 Points</label>
                 <input onChange={handleClick4} type='checkbox' id="SLOC Silver" name='SLOC Silver' value='1' />
             </div>


             <div className="section review question">
                 <label htmlFor='SLOC Bronze'>SLOC Bronze : 1 Point</label>
                 <input  onChange={handleClick5} type='checkbox' id="SLOC Bronze" name='SLOC Bronze' value='1' />
             </div>


             <div className="section review question">
                 <label htmlFor='Crikey! Thats a whooper'>Crikey! That's a whooper : -2 Points</label>
                 <input onChange={handleClick6} type='checkbox' id="Crikey! Thats a whooper" name='Crikey! Thats a whooper' value='1' />
             </div>


             <div className="section review question">
                 <label htmlFor='Law Abiding Citizen'>Law Abiding Citizen : 1 Point</label>
                 <input onChange={handleClick7} type='checkbox' id="Law Abiding Citizen" name='Law Abiding Citizen' value='1' />
             </div>

    </section>
    )
}
