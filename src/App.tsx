import './App.css'
import { MembranePotentialFigure } from './components/figures/MembranePotentialFigure/MembranePotentialFigure'

function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ fontFamily: 'Arial, sans-serif', marginBottom: '1.5rem' }}>
        動作電位示意圖
      </h1>
      <MembranePotentialFigure width={576} />
    </div>
  )
}

export default App
