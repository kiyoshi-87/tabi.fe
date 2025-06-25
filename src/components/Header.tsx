import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import Keycloak, { KeycloakProfile } from 'keycloak-js'
import UserPopover from './UserPopover'
import { useState } from 'react'
import LogoutModal from './LogoutModal'

interface HeaderProps {
    keycloak: Keycloak
    profile: KeycloakProfile | null
}

export const Header = ({ keycloak, profile }: HeaderProps) => {
    const [showLogoutModal, setShowLogoutModal] = useState(false)
    const handleLogout = () => {
        keycloak.logout({ redirectUri: window.location.origin })
        setShowLogoutModal(false)
    }

    return (
        <header className="border-b border-gray-800">
            <div className="ml-4 px-2 py-4 mr-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-blue-400" />
                    <Link to="/">
                        <span className="text-2xl font-semibold">Tabi.ai</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    <button
                        className="text-gray-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                        onClick={() => {
                            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Features
                    </button>
                    <button
                        className="text-gray-300 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                        onClick={() => {
                            document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        How it works
                    </button>
                    <Button
                        className="bg-red-600 hover:bg-red-700 text-white border-none"
                        onClick={() => setShowLogoutModal(true)}
                    >
                        Logout
                    </Button>
                    <UserPopover profile={profile} keycloak={keycloak} />
                </nav>
            </div>
            <LogoutModal
                open={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                onConfirm={handleLogout}
            />
        </header>
    )
}