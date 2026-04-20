import { BotMessageSquare, Building, ChartColumn, Heart, Highlighter, IterationCcw, PersonStanding, Rose } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/WhatsApp Image 2025-03-25 at 2.19.02 PM.jpg";
import user2 from "../assets/profile-pictures/WhatsApp Image 2025-03-25 at 4.51.40 PM (1).jpeg";
import user3 from "../assets/profile-pictures/WhatsApp Image 2026-01-29 at 1.08.23 PM (3).jpeg";
import user4 from "../assets/profile-pictures/WhatsApp Image 2025-03-25 at 4.56.40 PM.jpeg";
import user5 from "../assets/profile-pictures/WhatsApp Image 2026-01-29 at 1.42.29 PM (1).jpeg";
import user6 from "../assets/profile-pictures/WhatsApp Image 2026-01-29 at 1.18.03 PM.jpeg";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#features" },
  { label: "Features", href: "#workflow" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "Sienna Voss",
    short: "Actually Kinda Obsessed",
    image: user1,
    text: "They're just too charming , they really know how to make you obessesive and crazy about them. I can't stop drooling whenever i get a text from these guys.",
  },
  {
    user: "Elara Rowe",
    short: "Texting With Them 24/7",
    image: user2,
    text: "Even saying i was texting and on call with these gentleman for like 10+ hours every day would be a understatement. If talking with them all day long wasn't enough, i was dreaming about them too.",
  },
  {
    user: "Selene Carter",
    short: "It Just Kept Coming Out",
    image: user3,
    text: "Everytime i would start talking with them, it would just come out by itself. I coudn't stop myself from making a mess everywhere, especially considering how handsome and flirtatious they are",
  },
  {
    user: "Noemi Laurent",
    short: "They're So Fine",
    image: user4,
    text: "They are all so incredibly good looking, all of them have luscious curly hair and a muscular physique. They genuinly look like models without even trying.",
  },
  {
    user: "Mirela Kovaine",
    short: "They're So Perfect",
    image: user5,
    text: "Met up with one of these guys irl and he left me speechless, not only did he look and smell extremly good but the way he acted was nothing short of a gentleman.",
  },
  {
    user: "Sabrina Hale",
    short: "Can't Stop Squirting",
    image: user6,
    text: "Been talking with these men non stop and i just can't stop lusting over them. I've tried to stop texting them entirely but i know there isn't better men than these.",
  },
];

export const features = [
  {
    icon: <Heart />,
    text: "The People You'll Find",
    description:
      "We only show you the best kind of partners there is, everyone is as loyal, mature and handsome as one could be.",
  },
  {
    icon: <Highlighter />,
    text: "Uniqueness",
    description:
      "Every profile is thoughtfully presented to highlight individuality, style, and what makes each person stand out naturally.",
  },
  {
    icon: <ChartColumn />,
    text: "Personality-Based",
    description:
      "Built around personality first, letting their personality and first impressions matter more than a pretty face.",
  },
  {
    icon: <Building />,
    text: "Nicely Designed",
    description:
      "Designed to feel simple, modern, and engaging, so exploring profiles stays effortless and genuinely enjoyable. (not really)",
  },
  {
    icon: <Rose />, 
    text: "Quality Interactions",
    description:
      "A curated experience focused on quality interactions instead of overwhelming choices and meaningless matches.",
  },
  {
    icon: <IterationCcw />,
    text: "Clarity Above All Else",
    description:
      "Focused on clarity and flow, so every interaction feels natural from the first glance onward.",
  },
];

export const AboutThem = [
  {
    title: "Unique Personalities",
    description:
      "You've got all types of unique creatures, from not so wild to really wild.",
  },
  {
    title: "Loyalty on another level",
    description:
      "When these guys are in a relationship they're known for not even LOOKING let alone talking to other girls",
  },
  {
    title: "Very mature ",
    description:
      "Now yeah they all do make a lot of crazy jokes BUT they know when to stop and take things seriously.",
  },
  {
    title: "Gentlemen's like no other",
    description:
      "They're all known for treating ladies such as yourself with the utmost respect and love.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];