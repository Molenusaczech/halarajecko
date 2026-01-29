type PricingTable = {
    name: string,
    desc: string[],
    header: string[],
    rows: string[][]
}


type PricingConfig = PricingTable[]

export type { PricingTable, PricingConfig }