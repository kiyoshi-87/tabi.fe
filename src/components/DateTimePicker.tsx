import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface DateTimePickerProps {
    onChange?: (dateTime: string) => void
    className?: string
}

export function DateTimePicker({ onChange, className }: DateTimePickerProps) {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [time, setTime] = useState('10:30:00')

    const formatDateTime = (selectedDate: Date | undefined, selectedTime: string): string => {
        if (!selectedDate) return ''
        const [hours, minutes, seconds] = selectedTime.split(':')
        const dateTime = new Date(selectedDate)
        dateTime.setHours(parseInt(hours), parseInt(minutes), parseInt(seconds))
        return dateTime.toISOString().slice(0, 19)
    }

    const handleDateChange = (selectedDate: Date | undefined) => {
        setDate(selectedDate)
        setOpen(false)
        if (selectedDate) {
            const formattedDateTime = formatDateTime(selectedDate, time)
            onChange?.(formattedDateTime)
        }
    }

    const handleTimeChange = (selectedTime: string) => {
        setTime(selectedTime)
        if (date) {
            const formattedDateTime = formatDateTime(date, selectedTime)
            onChange?.(formattedDateTime)
        }
    }

    return (
        <div className={`flex gap-4 ${className || ''}`}>
            <div className="flex flex-col gap-3">
                <Label htmlFor="date-picker" className="px-1 text-gray-300">
                    Date
                </Label>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            id="date-picker"
                            className="w-32 justify-between font-normal bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                        >
                            {date ? date.toLocaleDateString() : "Select date"}
                            <ChevronDownIcon />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0 bg-gray-900 border-gray-800" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            onSelect={handleDateChange}
                            className="bg-gray-900 text-white"
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="flex flex-col gap-3">
                <Label htmlFor="time-picker" className="px-1 text-gray-300">
                    Time
                </Label>
                <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    value={time}
                    onChange={(e) => handleTimeChange(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
            </div>
        </div>
    )
}