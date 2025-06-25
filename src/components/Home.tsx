import { useItineraryResponse } from "@/hooks/useItineraryResponse";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { MainContent } from "./MainContent";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";
import Keycloak from "keycloak-js";

function Home({ keycloak }: { keycloak: Keycloak }) {
    const { content, isLoading, error, generateItinerary } = useItineraryResponse();

    return (
        <div className="min-h-screen w-full bg-gray-950">
            <Header />
            <button className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded" onClick={() => keycloak.logout({ redirectUri: window.location.origin })}>Logout</button>
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