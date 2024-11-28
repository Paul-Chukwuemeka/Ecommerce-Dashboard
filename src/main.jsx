import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2UlhhQlVMfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX9SdENjUXpbcHxTQmlV')


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
  </StrictMode>,
)
