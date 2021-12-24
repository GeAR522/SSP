import * as React from 'react';
import {Form as SSPForm, ReviewQuestion} from "../../models/models";

export default function Show(props) {
  const [formData, setFormData] = React.useState()
  const [isLoading, setLoading] = React.useState(true)

  const { id, user } = props

  React.useEffect(() => {
    SSPForm.find(id).then(({ data }) => {
      setFormData(data)
      setLoading(false)
    })
  },[])

  console.log(formData)

  if (isLoading) {
    return (
      <div>
        {isLoading ? <p>Loading...</p> :
          <p>show goes here</p>}
      </div>
    )
  }

  console.log(user)

  return (
    <div>
      <div>
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Q1 total</th>
            <th>Q2 total</th>
            <th>Q3 total</th>
            <th>Q4 total</th>
            <th>Q5 total</th>
            <th>Total points</th>
            <th>Git link</th>
            <th colSpan="3"></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{formData.id}</td>
            <td>{user}</td>
            <td>{formData.q1Total}</td>
            <td>{formData.q2Total}</td>
            <td>{formData.q3Total}</td>
            <td>{formData.q4Total}</td>
            <td>{formData.q5Total}</td>
            <td>{formData.totalPoints}</td>
            <td>{formData.gitLink}</td>
          </tr>
          </tbody>



        </table>

      </div>
    </div>
  )
}


