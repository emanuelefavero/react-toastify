import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// IMPORT A TOASTIFY EXAMPLE COMPONENT FOR SHOWING COMMON USAGE
import ToastifyExample from './components/ToastifyExample'

function App() {
  // TOASTIFY
  const notify = () => toast('🦜 How you doin?')
  const warning = () => toast.warning('Warning')
  const error = () => toast.error('Error')
  const success = () => toast.success('Success')
  const info = () => toast.info('Info')

  return (
    <>
      {/* TOASTIFY */}
      <button onClick={notify}>Notify</button>
      <button onClick={warning}>Warning</button>
      <button onClick={error}>Error</button>
      <button onClick={success}>Success</button>
      <button onClick={info}>Info</button>
      <ToastContainer
        // Custom classes for changing the look of the toast
        progressClassName='toastProgress'
        bodyClassName='toastBody'
      />
      <ToastifyExample />
    </>
  )
}

export default App
