import { PricingConfig } from "@/types/pricing";

let PRICING: PricingConfig = {
    "velkysal": {
        name: "Velký sál",
        desc: ["sálová kopaná, košíková, aerobic, florbal, házená, nohejbal, volejbal, taneční sporty, kondiční cvičení"],
        header: [
            "",
            "1 Hodina"
        ],
        rows: [
            ["Pronájem", "600,-"]
        ]
    },
    "squash": {
        name: "Squash",
        desc: ["Maximální kapacita kurtu jsou 3 hráči"],
        header: [
            "",
            "1 hodina"
        ],
        rows: [
            ["Pronájem kurtu", "240,-"],
            ["Raketa", "30,-"],
            ["Míček", "10,-"]
        ]
    },
    "badminton": {
        name: "Badminton",
        desc: [],
        header: [
            "", "1 hodina"
        ],
        rows: [
            ["Badminton (1 kurt)", "240,-"]
        ]
    },
    "tenis": {
        name: "Tenis",
        desc: [],
        header: [
            "", "1 hodina"
        ],
        rows: [
            ["Tenis", "600,-"]
        ]
    }
}

export type PricingCategory = keyof typeof PRICING
export default PRICING