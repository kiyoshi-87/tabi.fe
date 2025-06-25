import { Clock, MapPin, Sparkles } from "lucide-react"
import { Card, CardContent } from "./ui/card"

function Features() {
    return (
        <section id="features" className="py-20 px-4 bg-gray-900 my-20" >
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TravelPlan?</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Experience the future of travel planning with our intelligent features designed for modern travelers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="bg-gray-800 border-gray-700">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                                <Sparkles className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered</h3>
                            <p className="text-gray-400">
                                Our advanced AI analyzes your preferences and creates personalized itineraries tailored to your travel
                                style.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Save Time</h3>
                            <p className="text-gray-400">
                                Generate comprehensive travel plans in seconds, not hours. Focus on enjoying your trip, not planning
                                it.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <MapPin className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Multi-City Support</h3>
                            <p className="text-gray-400">
                                Plan complex multi-city trips with optimized routes and seamless transitions between destinations.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Features