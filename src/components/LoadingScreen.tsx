import { useState, useEffect } from "react"
import { MapPin, Plane, Compass, Sparkles } from "lucide-react"

const loadingMessages = [
    "Fetching the best itinerary for you",
    "Searching for the best places to visit",
    "Finding hidden gems in your destination",
    "Optimizing your travel routes",
    "Curating personalized experiences",
    "Discovering local attractions",
    "Planning your perfect adventure",
    "Hope you enjoy your stay",
    "Creating magical moments for your trip",
    "Connecting you with amazing destinations",
]

const icons = [MapPin, Plane, Compass, Sparkles]

export default function LoadingScreen() {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false)

            setTimeout(() => {
                setCurrentMessageIndex((prev) => (prev + 1) % loadingMessages.length)
                setIsVisible(true)
            }, 300) // Half second for fade out, then fade in
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const CurrentIcon = icons[currentMessageIndex % icons.length]

    return (
        <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%)`,
                    }}
                />
            </div>

            <div className="relative text-center max-w-md mx-auto px-6">
                {/* Main Loading Spinner */}
                <div className="relative mb-8">
                    <div className="w-20 h-20 mx-auto relative">
                        {/* Outer rotating ring */}
                        <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>

                        {/* Inner pulsing circle */}
                        <div className="absolute inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse flex items-center justify-center">
                            <CurrentIcon className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    {/* Floating particles */}
                    <div
                        className="absolute -top-4 -left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                        className="absolute -top-2 -right-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                        className="absolute -bottom-4 -right-2 w-2 h-2 bg-blue-300 rounded-full animate-bounce"
                        style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                        className="absolute -bottom-2 -left-6 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce"
                        style={{ animationDelay: "1.5s" }}
                    ></div>
                </div>

                {/* Dynamic Message */}
                <div className="h-16 flex items-center justify-center">
                    <p
                        className={`text-xl font-medium text-white transition-all duration-300 transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                            }`}
                    >
                        {loadingMessages[currentMessageIndex]}
                    </p>
                </div>

                {/* Progress dots */}
                <div className="flex justify-center space-x-2 mt-8">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-500 ${(currentMessageIndex % 4) === i ? "bg-blue-500 scale-125" : "bg-gray-700"
                                }`}
                            style={{
                                animationDelay: `${i * 0.2}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Subtle loading bar */}
                <div className="mt-8 w-full bg-gray-800 rounded-full h-1 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                </div>

                {/* Brand */}
                <div className="mt-8 flex items-center justify-center space-x-2 text-gray-400">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium">TravelPlan</span>
                </div>
            </div>

            {/* Animated background elements */}
            <div
                className="absolute top-1/4 left-1/4 w-32 h-32 border border-gray-800 rounded-full animate-spin"
                style={{ animationDuration: "20s" }}
            ></div>
            <div
                className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-gray-800 rounded-full animate-spin"
                style={{ animationDuration: "15s", animationDirection: "reverse" }}
            ></div>

            {/* Floating geometric shapes */}
            <div
                className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-500 opacity-20 rotate-45 animate-bounce"
                style={{ animationDelay: "2s" }}
            ></div>
            <div
                className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-500 opacity-20 rotate-45 animate-bounce"
                style={{ animationDelay: "3s" }}
            ></div>
        </div>
    )
}