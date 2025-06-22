import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'

export const MarkdownOutput = ({ markdownText }: { markdownText: string }) => {
    return (
        <div className="prose prose-sm md:prose-base max-w-none prose-invert 
            prose-headings:text-gray-100 prose-headings:font-semibold prose-headings:tracking-tight
            prose-headings:mb-4 prose-headings:mt-8
            prose-p:text-gray-200 prose-p:leading-relaxed prose-p:my-4
            prose-strong:text-gray-100 prose-strong:font-semibold
            prose-code:text-gray-200 prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-ul:text-gray-200 prose-ul:marker:text-gray-400 prose-ul:my-6
            prose-ol:text-gray-200 prose-ol:marker:text-gray-400 prose-ol:my-6
            prose-li:my-2 prose-li:leading-relaxed
            prose-blockquote:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-gray-700 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:my-6
            prose-hr:border-gray-700 prose-hr:my-8
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
            prose-img:rounded-lg prose-img:shadow-lg prose-img:my-6
            prose-pre:bg-gray-800 prose-pre:text-gray-200 prose-pre:rounded-lg prose-pre:shadow-lg prose-pre:my-6
            prose-table:text-gray-200 prose-table:border-gray-700 prose-table:my-6
            prose-th:border-gray-700 prose-th:text-gray-100 prose-th:p-3
            prose-td:border-gray-700 prose-td:p-3
            [&>*:first-child]:mt-0 [&>*:last-child]:mb-0
            space-y-6">
            <ReactMarkdown
                children={markdownText}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSanitize]}
            />
        </div>
    )
}
