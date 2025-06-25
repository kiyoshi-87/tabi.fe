import { Link, MapPin } from "lucide-react"

function Footer() {
    return (
        <footer className="border-t border-gray-800 py-8 px-4 mt-16">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <MapPin className="h-5 w-5 text-blue-400" />
                        <span className="text-xl font-semibold">Tabi.ai</span>
                    </div>
                    <div className="flex space-x-6 text-sm text-gray-400">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Support
                        </Link>
                    </div>
                </div>
                <div className="text-center text-gray-500 text-sm mt-4">© 2025 Tabi.ai. All rights reserved.</div>
            </div>
        </footer>
    )
}

export default Footer