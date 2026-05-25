import type { Metadata } from 'next'
import ExperienceLayout from '@/components/ExperienceLayout'

export const metadata: Metadata = {
  title: 'Private Wine Tasting | Bellagio Italy',
  description:
    'Private cellar visits on Lake Como with the estate owner or head winemaker — never a tour guide. Unreleased vintages, small-batch productions, and wines that never leave the region.',
}

export default function WineTasting() {
  return (
    <ExperienceLayout
      title="Private Wine Tasting"
      tagline="The cellars that never needed a sign outside."
      heroPlaceholder="https://placehold.co/1920x600/1C2B35/D4B896?text=Wine+Tasting"
      heroAlt="Private wine cellar visit with estate owner on Lake Como"
      intro={[
        "The finest wines of Lake Como and northern Lombardy are not found in shops or on restaurant wine lists. They are found in the cellars of families who have been making wine for generations — families who do not advertise, do not take group tours, and do not receive visitors they have not personally invited. We arrange those invitations.",
        "Our relationships with the winemakers of this region have been built over years of trust and mutual respect. When we bring a guest to a cellar, it is not a visit arranged through a booking service. The estate owner or head winemaker opens the door personally, walks you through the vineyards, and sits with you at the cellar table to open bottles that are not for sale — vintages still in barrel, small-batch cuvées that will never be commercially released, experimental lots that represent where the producer's thinking is heading next.",
        "The wines of the Como lakes region are extraordinary and almost entirely unknown outside northern Italy. Lago di Como DOC, Valcalepio from the Bergamo hills, the bold reds of Valtellina — wines of real depth and character made in quantities so small that most of the world has no idea they exist. A day in these cellars is an education that cannot be purchased from a wine merchant or replicated in a hotel bar.",
        "We design each session around what the guest actually wants to know. Some are serious collectors looking for specific producers or vintages; others have never thought much about wine and simply want to understand why what they are drinking tastes the way it does. We calibrate accordingly — and we never put two guests in the same cellar at the same time.",
      ]}
      included={[
        {
          title: 'Private visit with the estate owner or head winemaker',
          body: "Never a tour guide or hospitality staff — the person who made the wine opens the cellar door, walks the vineyards with you, and explains every decision in their own words. These are conversations, not presentations.",
        },
        {
          title: 'Tasting of five to eight wines, including unreleased vintages',
          body: "Bottles pulled from barrel or from library stock that are not available through retail or restaurant channels — small-batch productions, experimental cuvées, and vintages the producer has held back for guests they have chosen to welcome.",
        },
        {
          title: 'Guided vineyard walk with explanation of terroir and philosophy',
          body: "A walk through the estate with the winemaker: the soil composition, the altitude, the exposure, the decisions that make this wine different from every other wine made within twenty kilometres. Specific and unhurried.",
        },
        {
          title: 'Seated tasting at the cellar table with local accompaniments',
          body: 'Bread, aged cheese, and cured meats from the estate or from nearby producers — chosen to show the wine at its best, served at the same table where the winemaker sits when he opens a bottle for himself.',
        },
        {
          title: 'Curated take-home selection with shipping assistance',
          body: "We arrange for wine to be packed and shipped to your home in the United States — properly sealed, correctly documented for customs, and handled by partners who do this for serious collectors. Some of these bottles are not available for purchase through any other channel.",
        },
      ]}
      customization="Every session is shaped entirely by what the guest wants from it. A collector who wants to understand a specific appellation will have a different afternoon than a first-time visitor who simply wants to fall in love with something new. Some guests want to spend a full morning at one estate; others want to visit two or three producers in a day. We design the itinerary accordingly — its length, its depth, its pace — and we never arrange a session that is shared with anyone else."
    />
  )
}
