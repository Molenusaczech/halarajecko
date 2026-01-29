import PRICING, { PricingCategory } from "@/config/pricing";

interface PriceTableProps {
  category: PricingCategory;
}

export function PriceTable({ category }: PriceTableProps) {
  const pricing = PRICING[category];

  if (!pricing) {
    return <div className="text-center text-red-500">Kategorie nenalezena</div>;
  }

  return (
    <div className="w-full mb-3">
      <h2 className="text-2xl font-bold mb-4">{pricing.name}</h2>
      
      {pricing.desc.length > 0 && (
        <ul className="mb-6 list-disc list-inside text-gray-700">
          {pricing.desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              {pricing.header.map((header, index) => (
                <th
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-left font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricing.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border border-gray-300 px-4 py-2 w-[33%]"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
