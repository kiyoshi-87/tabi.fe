import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Hero = () => {
    return (
        <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-900 rounded-full px-4 py-2 mb-8">
                <Sparkles className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">AI-Powered Travel Planning</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Plan Your Perfect
                <br />
                <span className="text-blue-400">Travel Itinerary</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Create detailed travel plans in seconds. Just add your destinations, dates, and let our AI craft the perfect
                itinerary for your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                    Start Planning
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                    View Demo
                </Button>
            </div>
        </div>
    )
}