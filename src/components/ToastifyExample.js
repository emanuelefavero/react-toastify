import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Assign ids to toastify to prevent duplicates
const toastifyPasswordErrorId = 'toastifyPasswordErrorId'
const toastifyPasswordSuccessId = 'toastifyPasswordSuccessId'

function ToastifyExample() {
  // TOASTIFY EXAMPLE - PASSWORD CHECKING
  const handleSubmit = (e) => {
    e.preventDefault()

    if (e.target.password.value.length < 8) {
      toast.error('Password must be at least 8 characters', {
        toastId: toastifyPasswordErrorId,
      })
    } else {
      toast.success('Password Submitted!', {
        toastId: toastifyPasswordSuccessId,
      })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='password' placeholder='Password' name='password' />
        <button type='submit'>Submit</button>
      </form>

      {/* NOTE: This is not needed, since we already have a container in App.js */}
      {/* <ToastContainer
        // Custom classes for changing the look of the toast
        progressClassName='toastProgress'
        bodyClassName='toastBody'
      /> */}
    </>
  )
}

export default ToastifyExample
