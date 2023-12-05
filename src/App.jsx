import { BrowserRouter } from 'react-router-dom'
import Driver from './components/Driver'
import store from './redux/store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="app ">
        <BrowserRouter>
        
          <Driver />
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
