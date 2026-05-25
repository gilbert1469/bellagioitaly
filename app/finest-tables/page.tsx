import type { Metadata } from 'next'
import ExperienceLayout from '@/components/ExperienceLayout'

export const metadata: Metadata = {
  title: "Lake Como's Finest Tables | Bellagio Italy",
  description:
    'Private reservations at Lake Como\'s most sought-after restaurants — intimate lakeside terraces, century-old trattorias, and Michelin-starred kitchens that simply don\'t accept walk-ins.',
}

export default function FinestTables() {
  return (
    <ExperienceLayout
      title="Lake Como's Finest Tables"
      tagline="The table was set before you knew you wanted it."
      heroPlaceholder="/images/Restaurant.png"
      heroAlt="Private lakeside dining at sunset on Lake Como"
      intro={[
        "On Lake Como, the finest restaurants are not the ones with the most visible signs. They are the ones where the owner knows your name before you arrive, where the sommelier has already set aside something from a limited case, and where the menu is a conversation rather than a list. These are the tables we hold for you.",
        "Over many years, we have built direct relationships with the owners, chefs, and maître d's of the restaurants that matter most on this lake — from the Michelin-starred kitchens to the hidden trattorias that have fed generations of Como families without ever once advertising. Access to these tables does not come through an app. It comes through trust.",
        "When we arrange a reservation for you, we do not simply book a table. We speak to the kitchen about who you are, what you love, and what you have already tasted. The chef may prepare dishes that are not on any menu. The wine selection may include bottles that were never formally released. You arrive as a guest, not a customer.",
        "This is not about exclusivity for its own sake. It is about the difference between a beautiful meal and an unforgettable one — the kind you are still describing years later.",
      ]}
      included={[
        {
          title: 'Private reservation at the table that matters',
          body: "Reserved in your name in advance, at the chef's or owner's choice of position — often a terrace table, a private room, or a corner seat overlooking the water that is never listed online.",
        },
        {
          title: 'Pre-arrival conversation with the kitchen',
          body: 'We brief the chef on your preferences, dietary wishes, food memories, and anything you love or want to avoid. The kitchen prepares accordingly — often creating dishes that do not appear on any menu.',
        },
        {
          title: 'Curated seasonal menu or guided à la carte',
          body: 'The chef or maître d will guide you through the menu personally, explaining provenance and recommending combinations based on what arrived from the market that morning.',
        },
        {
          title: 'Wine pairing selected by the sommelier',
          body: "Includes access to limited or unreleased vintages from the cellar — bottles that the sommelier has held back for guests who will appreciate them. Often Lago di Como DOC or small-producer Lombard wines not available through retail.",
        },
        {
          title: 'Access to private dining rooms and off-menu tables',
          body: 'Several of the restaurants we work with maintain private rooms and terrace tables not available through standard booking channels — reserved exclusively for guests introduced through trusted relationships.',
        },
      ]}
      customization="Every detail is arranged around you. Some guests want to watch the sunset from a specific terrace; others want to sit with the chef after dinner and talk about the meal. Some prefer a quiet corner for an anniversary; others want to fill a private room for a group celebration. We ask, we listen, and we arrange — often surprising guests with things they never thought to request."
    />
  )
}
