import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Farming Dashboard</h1>
      </header>
      <main>
        <SensorData />
        <CropMonitor />
        <WeatherWidget />
        <IrrigationControl />
      </main>
    </div>
  )
}

function SensorData() {
  const [sensors] = useState([
    { id: 1, type: 'Temperature', value: '25°C' },
    { id: 2, type: 'Humidity', value: '60%' },
    { id: 3, type: 'Soil Moisture', value: '45%' }
  ])

  return (
    <section>
      <h2>Sensor Data</h2>
      <ul>
        {sensors.map(sensor => (
          <li key={sensor.id}>{sensor.type}: {sensor.value}</li>
        ))}
      </ul>
    </section>
  )
}

function CropMonitor() {
  const [crops] = useState([
    { id: 1, name: 'Wheat', status: 'Growing' },
    { id: 2, name: 'Corn', status: 'Harvesting' }
  ])

  return (
    <section>
      <h2>Crop Monitoring</h2>
      <ul>
        {crops.map(crop => (
          <li key={crop.id}>{crop.name}: {crop.status}</li>
        ))}
      </ul>
    </section>
  )
}

function WeatherWidget() {
  const [weather] = useState({ temp: '22°C', condition: 'Sunny' })

  return (
    <section>
      <h2>Weather</h2>
      <p>Temperature: {weather.temp}</p>
      <p>Condition: {weather.condition}</p>
    </section>
  )
}

function IrrigationControl() {
  const [isOn, setIsOn] = useState(false)

  return (
    <section>
      <h2>Irrigation Control</h2>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Turn Off' : 'Turn On'} Irrigation
      </button>
    </section>
  )
}

export default App