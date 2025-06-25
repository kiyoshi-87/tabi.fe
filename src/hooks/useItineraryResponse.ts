import { useState, useCallback } from 'react'
import type { ItineraryRequest } from '../types/itinerary'
import axios from 'axios'

interface ItineraryResponseState {
  content: string
  isLoading: boolean
  error: string | null
  generateItinerary: (requestData: ItineraryRequest) => Promise<void>
}

interface ItineraryResponse {
  data: string
}

export const useItineraryResponse = (): ItineraryResponseState => {
  const [content, setContent] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const generateItinerary = useCallback(async (requestData: ItineraryRequest) => {
    const API_URL = import.meta.env.VITE_BACK_END_URL + '/ollama/generate'
    setIsLoading(true)
    setError(null)
    setContent('')

    try {
      const token = localStorage.getItem('keycloak_token');
      const response = await axios.post<ItineraryResponse>(API_URL, requestData, {
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
        },
      })
      console.log(response.data.data)
      setContent(response.data.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { content, isLoading, error, generateItinerary }
}