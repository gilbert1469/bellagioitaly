import type { Metadata } from 'next'
import ExperienceLayout from '@/components/ExperienceLayout'

export const metadata: Metadata = {
  title: 'Cooking with the Masters | Bellagio Italy',
  description:
    'Private cooking classes on Lake Como with local chefs and nonne — in home kitchens that have never seen a group tour. No demonstrations; you cook, you eat, you leave with the recipe.',
}

export default function CookingClasses() {
  return (
    <ExperienceLayout
      title="Cooking with the Masters"
      tagline="Recipes that exist only in someone's hands."
      heroPlaceholder="/images/Cooking_class.png"
      heroAlt="Private cooking class with a chef overlooking Lake Como"
      intro={[
        "There are recipes on this lake that have never been written down. They live in the muscle memory of women who learned them from their mothers, who learned them from theirs — and who have no particular interest in teaching a class, posting a video, or appearing in a travel magazine. Getting into one of these kitchens requires something that cannot be booked online. It requires an introduction.",
        "We have those introductions. Our network includes private chefs who trained in the great houses of northern Italy and who now cook in their own homes; local nonne who are willing, occasionally, to share their afternoon with the right kind of visitor; and a handful of restaurant chefs who offer private sessions outside of service hours, in kitchens you will have entirely to yourselves.",
        "What happens in these sessions is not a demonstration. You stand at the counter. You handle the pasta dough. You taste as you go. You learn not just the recipe but the logic behind it — why this flour, why this fat, why this timing, why the perch from this lake is used fresh and never frozen. The lesson is built around what you actually want to learn, not a fixed syllabus.",
        "You leave with a recipe written in the hand of the person who taught it to you, the ingredients to recreate it at home, and a meal you cooked yourself — which, on a full day, you will also sit down and eat together.",
      ]}
      included={[
        {
          title: 'Private half-day or full-day session',
          body: "Conducted in a home kitchen or private cooking space — never a commercial kitchen set up for groups. The host is a local chef, a nonna, or a professional cook with deep roots in Lombard tradition. The session is yours alone.",
        },
        {
          title: 'Morning market visit to select ingredients together',
          body: 'We begin with the produce — walking a local market with your host, choosing what is freshest that morning, and understanding how the day\'s menu is decided not in advance but by what the season offers.',
        },
        {
          title: 'Hands-on instruction in two to four traditional dishes',
          body: "You are at the counter for all of it: pasta by hand, risotto technique, braised lake fish, regional desserts. The curriculum is tailored to what you want to learn — not what the host has prepared for everyone who comes.",
        },
        {
          title: 'Shared meal with the host at the end of the session',
          body: 'The food you cook, you eat — together, at the table, with wine chosen by the host. This is not a debrief. It is lunch or dinner, and it is the best part.',
        },
        {
          title: 'Handwritten recipe cards and a kit of local ingredients to take home',
          body: "The host writes out each recipe by hand. We add a small selection of local ingredients — the right flour, the right rice, the right olive oil — so that you can recreate the dishes at home with the correct materials.",
        },
      ]}
      customization="No two sessions are the same. We ask what you love to cook, what you have always wanted to learn, and what food memories matter to you. A guest who is passionate about pasta gets a different session than a guest who wants to understand risotto; a couple celebrating an anniversary cooks something different than a family traveling with teenagers. The kitchen belongs to the host — but the experience belongs entirely to you."
    />
  )
}
