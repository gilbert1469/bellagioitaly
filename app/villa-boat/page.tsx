import type { Metadata } from 'next'
import ExperienceLayout from '@/components/ExperienceLayout'

export const metadata: Metadata = {
  title: 'Villa Circuit by Taxi Boat | Bellagio Italy',
  description:
    'A private mahogany taxi boat, your own captain, no group itinerary. Villa Balbianello, d\'Este, Carlotta — approached from the water, at the pace you choose.',
}

export default function VillaBoat() {
  return (
    <ExperienceLayout
      title="Villa Circuit by Taxi Boat"
      tagline="The lake seen the way it was always meant to be."
      heroPlaceholder="/images/Taxi_boat_Luxury.png"
      heroAlt="Luxury Riva taxi boat on Lake Como passing lakeside villas"
      intro={[
        "Lake Como was designed to be seen from the water. The great villas — Balbianello, d'Este, Carlotta, Serbelloni — were built to face the lake, not the road. Their gardens, their terraces, their proportions were conceived for arrivals by boat. Approaching them from the shore, past the tourist buses and the souvenir stands, is to see them wrong. We take you the right way.",
        "Your transport is a private mahogany taxi boat — the classic craft of this lake, polished and quiet, captained by someone who has been working these waters his entire life and who knows where to slow down, where to linger, and where to anchor for a moment so the silence of the lake can do its work.",
        "The villas themselves are extraordinary. Villa del Balbianello, on its wooded promontory at the tip of a peninsula, has no equal in Europe — a folly of terraced gardens and loggias built by Cardinal Durini in the eighteenth century, later the backdrop for the final scenes of Casino Royale and the fields of Naboo. Villa d'Este is the most celebrated hotel on the lake, and its gardens are among the finest in Italy. Villa Carlotta, named for the Prussian princess who received it as a wedding gift, holds one of the most remarkable collections of Canova sculpture outside of a national museum.",
        "We give you access to all of this from the water, with commentary that is personal rather than scripted, at a pace that is yours entirely.",
      ]}
      included={[
        {
          title: 'Private mahogany taxi boat for the full duration',
          body: 'The boat is yours alone — no other guests, no shared tour. Your captain is experienced on these waters and available to stop, slow down, or change course based on what you want to see.',
        },
        {
          title: 'Departure time and embarkation point chosen by you',
          body: "We arrange the boat from your hotel jetty, a private dock, or any point on the lake you prefer. Morning departures catch the stillest water; afternoon routes follow the light west across the Grigna mountains.",
        },
        {
          title: 'Close approach and personal commentary for all major villas',
          body: 'Villa Balbianello, Villa d\'Este, Villa Carlotta, Villa Serbelloni, and others on request — approached from the water with background on history, architecture, and the families who built and lived in them.',
        },
        {
          title: 'Optional private entry to villa gardens',
          body: 'For guests who want to disembark and walk the gardens of Balbianello or Carlotta, we arrange access in advance — often timed for early morning, before the general public is admitted.',
        },
        {
          title: 'Optional sunset aperitivo on the water',
          body: 'A private aperitivo arranged on deck as the light changes: Franciacorta, local olives, cured meats from the valley — served as the lake turns from blue to gold and the mountains go dark against the sky.',
        },
      ]}
      customization="The circuit is entirely yours to shape. Some guests want three hours in the afternoon; others want a full-day journey up the full length of the lake, past Gravedona and into the northern narrows where the water narrows and the mountains close in. We can time the return to coincide with the last light. We can arrange an aperitivo on the water, or a dinner at a lakeside restaurant where the boat pulls directly to the dock. Tell us what you have in mind and we will make it possible."
    />
  )
}
