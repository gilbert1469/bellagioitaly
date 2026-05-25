import type { Metadata } from 'next'
import ExperienceLayout from '@/components/ExperienceLayout'

export const metadata: Metadata = {
  title: '24/7 Concierge | Bellagio Italy',
  description:
    'One point of contact from arrival to departure. Private shopping, transfers, pre-arrival customization, and the confidence of knowing everything is handled before you think to ask.',
}

export default function Concierge() {
  return (
    <ExperienceLayout
      title="24/7 Concierge"
      tagline="One number. Everything handled."
      heroPlaceholder="https://placehold.co/1920x600/1C2B35/D4B896?text=Concierge"
      heroAlt="Personal concierge service in Como"
      intro={[
        "Most concierge services are really just informed referral services. They know a list of good restaurants. They can book a transfer. They can tell you where to buy cashmere. What they cannot do — because they do not have the relationships, the time, or the local knowledge — is actually handle everything. We can.",
        "From the moment you confirm your dates with us, we begin working on your arrival. We ask questions: about how you like to travel, what you hate about travel, what you have loved in the past, what your particular version of a perfect day looks like. We learn your preferences before you arrive, so that the things you value most are already in place when you do.",
        "Your single point of contact is available by phone or message throughout your stay, at any hour. This is not a staffed call center. It is a person — someone who knows you, knows the lake, and has the standing relationships necessary to actually solve problems and create opportunities. If a dinner reservation falls through at seven in the evening, we will have another table within the hour. If you wake up wanting to take a helicopter to Saint-Moritz, we will make the call.",
        "The quiet luxury of a truly handled trip is something most well-traveled people have never fully experienced. There is nothing quite like arriving somewhere and finding that every detail — the car, the flowers, the bottle on ice — was anticipated before you thought to ask for it.",
      ]}
      included={[
        {
          title: 'Single point of contact from arrival to departure',
          body: 'One person, available by phone and message at all hours throughout your stay. Not a team, not a rotation — the same person who knows your preferences, has spoken to your hotel, and has already handled tomorrow.',
        },
        {
          title: 'Pre-arrival briefing and customization',
          body: 'Before you land, we speak with you about your preferences, your routines, and anything that matters to you. We brief your hotel, arrange your welcome details, and prepare the first days so that nothing requires effort on arrival.',
        },
        {
          title: 'Private shopping access',
          body: "The cashmere atelier in Como that doesn't advertise. The antique dealer off Via Garibaldi who opens by appointment. The boutique that holds things back for people we introduce. We arrange private visits, with the context to buy well.",
        },
        {
          title: 'All ground and water transportation',
          body: 'Private car with a trusted driver who knows both shores of the lake. Water taxi arranged from any dock on the lake. Helicopter transfers to Milan, Saint-Moritz, or anywhere in the Alps, on request.',
        },
        {
          title: 'Pre-arrival villa and room customization',
          body: "Flowers from the florist who knows gardenias. A specific wine chilled to the right temperature. A selection of local produce and provisions from the market. The linens and towels your hotel has but doesn't offer unless asked. Every detail confirmed before you check in.",
        },
      ]}
      customization="There is no standard package here. Every guest's concierge engagement is different, because every guest is different. Some want us to design the entire stay from scratch; others have a clear itinerary and simply want someone reliable to execute it without friction. Some want daily contact; others prefer to be left alone and call when something comes up. We adapt entirely to you — and we never suggest anything you did not ask for."
    />
  )
}
