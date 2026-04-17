import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './layout/AppShell'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Campamentos } from './pages/Campamentos'
import { Intake } from './pages/Intake'
import { Metodo } from './pages/Metodo'
import { Nosotros } from './pages/Nosotros'
import { Programas } from './pages/Programas'
import { Blog } from './pages/Blog'
import { Faqs } from './pages/Faqs'
import { Privacidad } from './pages/Privacidad'
import { ProteccionDatos } from './pages/ProteccionDatos'
import { ProgramDetail } from './pages/ProgramDetail'

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Home />} />
        <Route path="/metodo" element={<Metodo />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/programas/:slug" element={<ProgramDetail />} />
        <Route path="/campamentos" element={<Campamentos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/proteccion-datos" element={<ProteccionDatos />} />
        <Route path="/intake" element={<Intake />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
