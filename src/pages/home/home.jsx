import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageHeading } from '../../redux/actions'

export const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPageHeading('Dashboard'))
  }, [])
  return <div>Home</div>
}
