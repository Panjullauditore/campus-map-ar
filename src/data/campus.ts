import type { CampusInfo, CampusLocation } from "@/types/campus";

export const campusInfo: CampusInfo = {
  name: "Riverside University",
  tagline: "Navigate campus with confidence — AR coming soon",
  address: "1200 University Drive, Riverside, CA 92507",
};

export const campusLocations: CampusLocation[] = [
  {
    id: "main-hall",
    name: "Main Academic Hall",
    shortName: "Main Hall",
    category: "academic",
    description:
      "Central lecture halls, faculty offices, and the registrar. First stop for class schedules and academic advising.",
    hours: "Mon–Fri 7:00 AM – 9:00 PM",
    mapX: 48,
    mapY: 38,
    arAnchorId: "anchor-main-hall",
  },
  {
    id: "science-center",
    name: "Science & Engineering Center",
    shortName: "Science Center",
    category: "academic",
    description:
      "Labs, research spaces, and engineering workshops. Home to STEM departments and student project rooms.",
    hours: "Mon–Sat 8:00 AM – 10:00 PM",
    mapX: 68,
    mapY: 32,
    arAnchorId: "anchor-science",
  },
  {
    id: "library",
    name: "University Library",
    shortName: "Library",
    category: "academic",
    description:
      "Study floors, archives, computer labs, and group rooms. Quiet zones on levels 3 and 4.",
    hours: "Daily 6:00 AM – 11:00 PM",
    mapX: 32,
    mapY: 42,
    arAnchorId: "anchor-library",
  },
  {
    id: "student-union",
    name: "Student Union",
    shortName: "Union",
    category: "recreation",
    description:
      "Clubs, events, lounge areas, and the campus bookstore. Check the bulletin board for weekly activities.",
    hours: "Daily 8:00 AM – 10:00 PM",
    mapX: 55,
    mapY: 58,
    arAnchorId: "anchor-union",
  },
  {
    id: "dining-commons",
    name: "Dining Commons",
    shortName: "Dining",
    category: "dining",
    description:
      "All-you-care-to-eat dining with vegetarian, vegan, and allergen-friendly stations.",
    hours: "Mon–Sun 7:00 AM – 9:00 PM",
    mapX: 40,
    mapY: 62,
    arAnchorId: "anchor-dining",
  },
  {
    id: "athletics",
    name: "Athletics Complex",
    shortName: "Gym",
    category: "recreation",
    description:
      "Fitness center, pool, courts, and outdoor track. Student ID required for facility access.",
    hours: "Mon–Fri 6:00 AM – 10:00 PM, Sat–Sun 8:00 AM – 8:00 PM",
    mapX: 78,
    mapY: 55,
    arAnchorId: "anchor-athletics",
  },
  {
    id: "north-residence",
    name: "North Residence Halls",
    shortName: "North Res",
    category: "residence",
    description: "First-year and sophomore housing with community lounges on each floor.",
    mapX: 22,
    mapY: 28,
    arAnchorId: "anchor-north-res",
  },
  {
    id: "health-center",
    name: "Campus Health Center",
    shortName: "Health",
    category: "services",
    description:
      "Primary care, counseling referrals, and wellness programs. Appointments recommended.",
    hours: "Mon–Fri 8:00 AM – 5:00 PM",
    mapX: 62,
    mapY: 68,
    arAnchorId: "anchor-health",
  },
  {
    id: "visitor-parking",
    name: "Visitor Parking Lot B",
    shortName: "Parking B",
    category: "parking",
    description:
      "Short-term visitor parking near the main entrance. Pay stations at lot entrance.",
    mapX: 15,
    mapY: 72,
    arAnchorId: "anchor-parking-b",
  },
];

export const categoryLabels: Record<
  CampusLocation["category"],
  string
> = {
  academic: "Academic",
  dining: "Dining",
  residence: "Residence",
  recreation: "Recreation",
  services: "Services",
  parking: "Parking",
};
