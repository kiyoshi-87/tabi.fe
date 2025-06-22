import { useItineraryResponse } from './hooks/useItineraryResponse'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MainContent } from './components/MainContent'
import './App.css'

function App() {
  const { content, isLoading, error, generateItinerary } = useItineraryResponse()

  return (
    <div className="min-h-screen w-full bg-gray-950">
      <Header />
      <main className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto w-full">
          <Hero />
          <MainContent
            content={content || ''}
            isLoading={isLoading}
            error={error}
            generateItinerary={generateItinerary}
          />
        </div>
      </main>
    </div>
  )
}

export default App
