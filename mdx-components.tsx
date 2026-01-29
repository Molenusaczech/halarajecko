import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
    h1: ({ children }) => (
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            {children}
        </h1>
    ),
    h2: ({ children }) => (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    ),
    h4: ({ children }) => (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {children}
        </h4>
    ),
    p: ({ children }) => (
        <p className="leading-7 not-first:mt-6">
            {children}
        </p>
    ),
    blockquote: ({ children }) => (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            {children}
        </blockquote>
    )
}

export function useMDXComponents(): MDXComponents {
    return components
}