import * as React from 'react'


export default function CheckUserID(props) {

  const handleClick = () => {
    let { props: {id, email} } = props
  console.log(id, email)
  }

  return (
    <div>
      <button onClick={handleClick}>Current User ID?</button>
    </div>
  )
}
