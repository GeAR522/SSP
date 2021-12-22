import * as React from 'react';
import {useState} from "react";
import {Form, ReviewQuestion} from "../../models/models";



export default function Show() {

  const [formData, setFormData] = React.useState()
  const [isLoading, setLoading] = React.useState(true)



  React.useEffect(() => {
    console.log(isLoading)
    fetchData()
    setLoading(false)
    console.log(isLoading)
  },[])

  async function fetchData() {
    Form.includes().then(function (response) {
      setFormData(response.data)
    })
  }



  return (
    <div>
      {isLoading ? <p>Loading...</p> :

      <p>show goes here</p>
      }
    </div>
  )
}


