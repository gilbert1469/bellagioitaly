import type { Metadata } from 'next'
import ExperienceLayout from '@/components/ExperienceLayout'

export const metadata: Metadata = {
  title: 'Food & Wine Journeys | Bellagio Italy',
  description:
    'Private enogastronomic itineraries on Lake Como: estate visits with the winemaker, artisan producers, unreleased vintages, and Saturday markets that never see a tourist bus.',
}

export default function FoodWine() {
  return (
    <ExperienceLayout
      title="Food & Wine Journeys"
      tagline="The cellars that never needed a sign outside."
      heroPlaceholder="https://placehold.co/1920x600/1C2B35/D4B896?text=Food+%26+Wine"
      heroAlt="Artisan winery in the hills above Lake Como"
      intro={[
        "The Lombardy lake district produces wines, olive oils, cheeses, and cured meats of extraordinary quality — most of which are consumed within a few miles of where they were made and never exported. To find them, you need to know where to go, who to call, and how to ask. We know all three.",
        "We have spent years mapping the small producers along both shores of the lake and into the valleys behind: the winery in the hills above Varenna with three hundred cases of a white wine so good it sells out to locals before it is even bottled; the cheesemaker in the Val d'Intelvi who works alone and sees visitors by appointment only; the Saturday market in a village that no tourist bus has ever visited.",
        "A day with us in this world is not a tour with a guide and a microphone. It is a morning at a kitchen table with an estate owner who opens a bottle from a vintage he has not shared publicly, followed by an afternoon in a cellar or a curing room where the air itself smells of something ancient and particular.",
        "We make the introductions, but what happens after belongs to you. Many of our guests leave with cases of wine, wheels of cheese, and a handful of phone numbers for people they now consider friends.",
      ]}
      included={[
        {
          title: 'Private estate visit with the owner or head winemaker',
          body: 'Not a group tour — a personal visit, welcomed by the person who made the wine. Time to ask real questions, walk the vineyards, and understand how this specific terroir and altitude produce something that tastes like nowhere else.',
        },
        {
          title: 'Tasting of unreleased or limited vintages',
          body: 'Our hosts open bottles that are not available through retail or restaurant channels — library wines, experimental cuvées, and single-barrel selections shared with guests they have chosen to welcome.',
        },
        {
          title: 'Visit to artisan food producers',
          body: 'Depending on the itinerary: a cheesemaker who still cultures by hand, an olive oil estate pressing fruit from centuries-old trees on the western shore, a salumi producer in a valley village — each chosen for quality and character.',
        },
        {
          title: 'Introduction to a local Saturday market',
          body: 'A private guide who knows every vendor, can explain what is in season, and will make introductions. The stalls are for locals; the produce is extraordinary; the experience is unlike anything available to the general visitor.',
        },
        {
          title: 'Curated take-home selection with shipping assistance',
          body: 'We can arrange for wine, olive oil, cheese, and preserved goods to be packed and shipped to your home in the United States — properly sealed, correctly documented, and handled by partners who do this for serious collectors.',
        },
      ]}
      customization="Every itinerary is built around your palate and your interests. A guest who is a serious wine collector gets a different day than a curious beginner who wants to fall in love with something they have never tasted. Some guests want the full circuit — wineries, olive oil, cheese, market — in a single long day; others want to go deep into one producer and spend the whole morning there. We design the day accordingly: its length, its focus, its pace. No two guests travel the same road."
    />
  )
}
