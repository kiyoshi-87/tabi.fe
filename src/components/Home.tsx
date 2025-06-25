import { useItineraryResponse } from "@/hooks/useItineraryResponse";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { MainContent } from "./MainContent";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";
import Keycloak, { KeycloakProfile } from "keycloak-js";
import { useEffect, useState } from "react";

function Home({ keycloak }: { keycloak: Keycloak }) {
    const { content, isLoading, error, generateItinerary } = useItineraryResponse();
    const [profile, setProfile] = useState<KeycloakProfile | null>(null);

    useEffect(() => {
        if (keycloak.authenticated) {
            keycloak.loadUserProfile().then(setProfile);
        }
    }, [keycloak]);

    useEffect(() => {
        if (keycloak.authenticated && keycloak.token) {
            localStorage.setItem("keycloak_token", keycloak.token);
        }
    }, [keycloak.authenticated, keycloak.token]);

    return (
        <div className="min-h-screen w-full bg-gray-950">
            <Header
                keycloak={keycloak}
                profile={profile}
            />
            <main className="w-full py-12">
                <div className="w-full">
                    <Hero />
                    <MainContent
                        content={content || ''}
                        isLoading={isLoading}
                        error={error}
                        generateItinerary={generateItinerary}
                    />
                    <Features />
                    <HowItWorks />
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export default Home