import { useState } from 'react'
import type { ItineraryFormProps } from '../types/itinerary'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MarkdownOutput } from './MarkdownOutput'

export const ItineraryForm: React.FC<ItineraryFormProps> = ({ onSubmit, isLoading, content }) => {
    const [cities, setCities] = useState<string[]>([])
    const [cityInput, setCityInput] = useState('')
    const [startDateTime, setStartDateTime] = useState('')
    const [endDateTime, setEndDateTime] = useState('')

    const handleAddCity = () => {
        if (cityInput.trim() && !cities.includes(cityInput.trim())) {
            setCities([...cities, cityInput.trim()])
            setCityInput('')
        }
    }

    const handleRemoveCity = (cityToRemove: string) => {
        setCities(cities.filter(city => city !== cityToRemove))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({
            cities,
            startDateTime,
            endDateTime,
        })
    }

    return (
        <Card className="bg-gray-900 border-gray-800 max-w-2xl mx-auto">
            <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Cities</label>
                        <div className="flex gap-2">
                            <Input
                                type="text"
                                value={cityInput}
                                onChange={(e) => setCityInput(e.target.value)}
                                placeholder="Enter city name"
                                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                            />
                            <Button
                                type="button"
                                onClick={handleAddCity}
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                Add
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {cities.map((city) => (
                                <span
                                    key={city}
                                    className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-gray-800 text-gray-300"
                                >
                                    {city}
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveCity(city)}
                                        className="ml-1 text-gray-400 hover:text-gray-200"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Start Date & Time</label>
                            <Input
                                type="datetime-local"
                                value={startDateTime}
                                onChange={(e) => setStartDateTime(e.target.value)}
                                className="bg-gray-800 border-gray-700 text-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">End Date & Time</label>
                            <Input
                                type="datetime-local"
                                value={endDateTime}
                                onChange={(e) => setEndDateTime(e.target.value)}
                                className="bg-gray-800 border-gray-700 text-white"
                                required
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading || cities.length === 0}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                        {isLoading ? 'Generating...' : 'Generate Itinerary'}
                    </Button>

                    <div className="text-center text-gray-200 italic py-4 border-t border-gray-800">
                        {content ? (
                            <MarkdownOutput markdownText={content} />
                        ) : (
                            <div className="text-gray-400 italic">Itinerary will appear here...</div>
                        )}
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}