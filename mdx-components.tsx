import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
    h1: ({ children }) => (
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mt-8 mb-4 first:mt-0 text-blue-900">
            {children}
        </h1>
    ),
    h2: ({ children }) => (
        <h2 className="scroll-m-20 border-b-2 border-blue-300 pb-3 text-3xl font-bold tracking-tight mt-8 mb-4 first:mt-0 text-blue-800">
            {children}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-6 mb-3 first:mt-0 text-blue-700">
            {children}
        </h3>
    ),
    h4: ({ children }) => (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-5 mb-2 first:mt-0 text-gray-800">
            {children}
        </h4>
    ),
    p: ({ children }) => (
        <p className="leading-7 mt-6 mb-6 text-gray-700 first:mt-0">
            {children}
        </p>
    ),
    blockquote: ({ children }) => (
        <blockquote className="mt-6 mb-6 border-l-4 border-blue-500 bg-blue-50 pl-6 py-4 italic text-gray-700 rounded-r-md">
            {children}
        </blockquote>
    ),
    ul: ({ children }) => (
        <ul className="ml-6 mt-4 mb-6 space-y-2 list-disc text-gray-700">
            {children}
        </ul>
    ),
    ol: ({ children }) => (
        <ol className="ml-6 mt-4 mb-6 space-y-2 list-decimal text-gray-700">
            {children}
        </ol>
    ),
    li: ({ children }) => (
        <li className="leading-7">
            {children}
        </li>
    ),
    a: ({ children, href }) => (
        <a
            href={href}
            className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 hover:bg-blue-50 px-1 rounded transition-colors"
        >
            {children}
        </a>
    ),
    code: ({ children }) => (
        <code className="relative rounded bg-gray-100 px-2 py-1 font-mono text-sm font-semibold text-gray-800 border border-gray-300">
            {children}
        </code>
    ),
    pre: ({ children }) => (
        <pre className="mt-6 mb-6 overflow-x-auto rounded-lg bg-gray-900 p-4 border border-gray-700">
            {children}
        </pre>
    ),
    table: ({ children }) => (
        <table className="w-full mt-6 mb-6 border-collapse border border-gray-300">
            {children}
        </table>
    ),
    th: ({ children }) => (
        <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold">
            {children}
        </th>
    ),
    td: ({ children }) => (
        <td className="border border-gray-300 px-4 py-2">
            {children}
        </td>
    ),
    hr: () => (
        <hr className="my-8 border-t-2 border-gray-300" />
    ),
}

export function useMDXComponents(): MDXComponents {
    return components
}