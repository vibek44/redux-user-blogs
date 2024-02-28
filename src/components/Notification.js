import { useSelector, useDispatch } from "react-redux"
const Notification = () => {
  const notification = useSelector((state) => state.notification)
  if (!notification) return null

  return <p>{notification}</p>
}

export default Notification
