import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="border-b border-gray-800">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-blue-400" />
                    <Link to="/">
                        <span className="text-2xl font-semibold">Tabi.ai</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                        Features
                    </a>
                    <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                        How it works
                    </a>
                    <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                        Sign In
                    </Button>
                </nav>
            </div>
        </header>
    )
}