import ReactDOM from 'react-dom/client'
import router from './assets/router/router.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
     <RouterProvider router = {router} />
  </ThemeProvider>

)
