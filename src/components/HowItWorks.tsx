function HowItWorks() {
    return (
        <section id="how-it-works" className="py-15 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-gray-400 text-lg">Three simple steps to your perfect travel itinerary</p>
                </div>

                <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white font-semibold text-sm">1</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Add Your Destinations</h3>
                            <p className="text-gray-400">
                                Enter the cities you want to visit and specify your travel dates and preferences.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white font-semibold text-sm">2</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">AI Generates Your Plan</h3>
                            <p className="text-gray-400">
                                Our AI analyzes your inputs and creates a detailed, day-by-day itinerary with activities and
                                recommendations.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white font-semibold text-sm">3</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Customize & Go</h3>
                            <p className="text-gray-400">
                                Review, customize your itinerary as needed, and embark on your perfectly planned adventure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks