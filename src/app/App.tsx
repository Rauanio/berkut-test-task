import { Header } from '@/features/header'
import { Outlet } from 'react-router-dom'
import { Providers } from './providers'

function App() {
  return (
    <Providers>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Outlet />
      </div>
    </Providers>
  )
}

export default App
