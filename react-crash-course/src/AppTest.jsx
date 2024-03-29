import React from 'react'

const App = () => {

  const name='john'
  const names=['eli','beli','franeli']
  const loggedIn=true;

  return (
    <>
    <div>App</div>
    <p style={{color:'red'}}>Hello {name}</p>
    <ul>
      {names.map((name,index)=><li key={index}>{name}</li>)}
    </ul>

    {/* {loggedIn?<h1>Hello member</h1>:<h1>Hello guest</h1>} */}
    {loggedIn && <h1>Hello member</h1>}
    </>
  )
}

export default App