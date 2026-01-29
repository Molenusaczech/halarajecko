type PricingTable = {
    name: string,
    desc: string[],
    header: string[],
    rows: string[][]
}


type PricingConfig = Record<string, PricingTable>

export type { PricingTable, PricingConfig }