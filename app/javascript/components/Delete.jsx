import * as React from 'react';
import {useState} from "react";
import {Form} from "../models/models";
import { find, include, destroy } from "spraypaint/"


export default function Delete(props) {

  const [formData, setFormData] = React.useState()
  const [isLoading, setLoading] = React.useState(true)

  let { props : id } = props


  React.useEffect(() => {
    // fetchData()
    console.log(id)
    setLoading(false)
  },[])

  // async function fetchData() {
  //   form = Form.find()
  //   (id).then(function(response) {
  //     setFormData(response.data)
  //     })
  // }

  function handleClick() {
    console.log(id)
    const form = Form.find(id)
    form.onDeferredDestroy = (job) => {
      handleBackgroundJob(job)
    };
  }

  return(
    <div>
      {isLoading ? <p>loading...</p> :
        <button onClick={handleClick}>
          Delete
        </button>
      }
    </div>

  )
}

