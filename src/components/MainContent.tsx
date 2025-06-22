import { ItineraryForm } from './ItineraryForm'
import LoadingScreen from './LoadingScreen'
import ItineraryPopup from './ItineraryPopup'
import { useState, useEffect } from 'react'

interface MainContentProps {
    content: string
    isLoading: boolean
    error: string | null
    generateItinerary: (data: { cities: string[]; startDateTime: string; endDateTime: string }) => void
}

export const MainContent = ({ content, isLoading, error, generateItinerary }: MainContentProps) => {
    const [showPopup, setShowPopup] = useState(false)

    // Show popup when content is available and loading is complete
    useEffect(() => {
        if (content && !isLoading) {
            setShowPopup(true)
        }
    }, [content, isLoading])

    return (
        <div className="mt-8 w-full">
            <ItineraryForm onSubmit={generateItinerary} isLoading={isLoading} content={content} />
            {error && (
                <div className="max-w-md mx-auto mt-4 p-4 bg-red-50 text-red-700 rounded-md">
                    {error}
                </div>
            )}
            {/* <ItineraryDisplay content={content} /> */}
            {isLoading && <LoadingScreen />}
            <ItineraryPopup
                isOpen={showPopup}
                onClose={() => setShowPopup(false)}
                content={content}
            />
        </div>
    )
}