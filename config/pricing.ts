import { PricingConfig } from "@/types/pricing";

let PRICING: PricingConfig = [
    {
        name: "Velký sál",
        desc: ["sálová kopaná, košíková, aerobic, florbal, házená, nohejbal, volejbal, taneční sporty, kondiční cvičení"],
        header: [
            "Délka pronájmu",
            "Cena"
        ],
        rows: [
            ["1 hodina", "600,-"]
        ]
    },
    {
        name: "Squash",
        desc: ["Maximální kapacita kurtu jsou 3 hráči"],
        header: [
            "",
            "30 minut",
            "1 hodina"
        ],
        rows: [
            ["Pronájem kurtu", "120,-", "240,-"],
            ["Raketa", "-", "30,-"],
            ["Míček", "-", "10,-"]
        ]
    },
    {
        name: "Badminton",
        desc: [],
        header: [
            "", "1 hodina"
        ],
        rows: [
            ["Badminton", "240,-"]
        ]
    },
    {
        name: "Tenis",
        desc: [],
        header: [
            "", "1 hodina"
        ],
        rows: [
            ["Tenis", "600,-"]
        ]
    }
]