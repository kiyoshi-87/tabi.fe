import { MarkdownOutput } from "./MarkdownOutput"

interface ItineraryDisplayProps {
    content: string
}

export const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ content }) => {
    return (
        <div className="text-center text-gray-500 italic py-4 border-t border-gray-800">
            <div className="bg-white rounded-lg shadow p-4">
                {content ? (
                    <MarkdownOutput markdownText={content} />
                ) : (
                    <div className="text-gray-500 italic">Itinerary will appear here...</div>
                )}
            </div>
        </div>
    )
}