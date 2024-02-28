import React from "react"
import { useSelector, useDispatch } from "react-redux"
const App = () => {
  const notification = useSelector((state) => state)
  console.log(notification)

  return <div>hi there</div>
}

export default App
