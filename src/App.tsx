import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ColorPage from './pages/ColorPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/color/:color" element={<ColorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
