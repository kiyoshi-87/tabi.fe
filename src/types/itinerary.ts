export interface ItineraryRequest {
  cities: string[]
  startDateTime: string
  endDateTime: string
}

export interface ItineraryFormProps {
  onSubmit: (data: ItineraryRequest) => void
  isLoading: boolean
  content: string
}

export interface StreamingDisplayProps {
  content: string
}