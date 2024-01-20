import React, {useEffect, useState} from 'react'
import  {disableReactDevTools} from "@fvilers/disable-react-devtools"
if (process.env.NODE_ENV === 'production') disableReactDevTools()

function App() {

  // const [backendData, setBackendData] = useState ([{}])

  // useEffect(() => {
  //   fetch("/").then(
  //     response => response.json()
  //   ).then(
  //     data  => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  return (
    <div>
{/* {(typeof backendData.users === 'undefined') ? (
  <p>Loading...</p>
): (
  backendData.users.map((user, i) => (
    <p key={i}>{user}</p>
  ))
)} */}
<h1>Test</h1>
    </div>
  );
}

export default App;
