import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children, ...props }) => (
      <h1
        className="text-3xl md:text-4xl font-bold text-white mt-12 mb-6 leading-tight"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="text-2xl md:text-3xl font-bold text-white mt-10 mb-5 leading-tight"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="text-xl md:text-2xl font-semibold text-white mt-8 mb-4 leading-tight"
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4
        className="text-lg md:text-xl font-semibold text-gray-200 mt-6 mb-3"
        {...props}
      >
        {children}
      </h4>
    ),
    
    // Paragraph
    p: ({ children, ...props }) => (
      <p
        className="text-gray-300 text-base md:text-lg leading-relaxed mb-6"
        {...props}
      >
        {children}
      </p>
    ),
    
    // Links
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith('http');
      
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors"
            {...props}
          >
            {children}
          </a>
        );
      }
      
      return (
        <Link
          href={href || '#'}
          className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors"
          {...props}
        >
          {children}
        </Link>
      );
    },
    
    // Lists
    ul: ({ children, ...props }) => (
      <ul
        className="list-disc list-inside text-gray-300 mb-6 space-y-2 ml-4"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol
        className="list-decimal list-inside text-gray-300 mb-6 space-y-2 ml-4"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="text-gray-300 leading-relaxed" {...props}>
        {children}
      </li>
    ),
    
    // Blockquote
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-red-600 pl-6 py-2 my-8 bg-gray-800/50 rounded-r-lg"
        {...props}
      >
        <p className="text-gray-300 italic text-lg">{children}</p>
      </blockquote>
    ),
    
    // Code
    code: ({ children, className, ...props }) => {
      const isInline = !className;
      
      if (isInline) {
        return (
          <code
            className="bg-gray-800 text-red-400 px-2 py-1 rounded text-sm font-mono"
            {...props}
          >
            {children}
          </code>
        );
      }
      
      return (
        <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto my-6">
          <code
            className={`${className} text-gray-300 text-sm font-mono`}
            {...props}
          >
            {children}
          </code>
        </pre>
      );
    },
    
    // Images
    img: ({ src, alt, ...props }) => (
      <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden">
        <Image
          src={src || ''}
          alt={alt || ''}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
          {...props}
        />
      </div>
    ),
    
    // Horizontal rule
    hr: ({ ...props }) => (
      <hr className="border-gray-700 my-10" {...props} />
    ),
    
    // Strong and emphasis
    strong: ({ children, ...props }) => (
      <strong className="text-white font-semibold" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }) => (
      <em className="text-gray-200 italic" {...props}>
        {children}
      </em>
    ),
    
    // Table
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-6">
        <table
          className="w-full border-collapse border border-gray-700"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead className="bg-gray-800" {...props}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...props }) => (
      <tbody className="divide-y divide-gray-700" {...props}>
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }) => (
      <tr className="hover:bg-gray-800/50" {...props}>
        {children}
      </tr>
    ),
    th: ({ children, ...props }) => (
      <th
        className="px-4 py-3 text-left text-white font-semibold border border-gray-700"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="px-4 py-3 text-gray-300 border border-gray-700"
        {...props}
      >
        {children}
      </td>
    ),
    
    // Custom components for streaming content
    YouTube: ({ videoId, title }: { videoId: string; title?: string }) => (
      <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden bg-gray-900">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || 'YouTube video player'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    ),
    
    StreamingBadge: ({ service }: { service: string }) => {
      const colors: Record<string, string> = {
        netflix: 'bg-red-600',
        'prime video': 'bg-blue-600',
        'amazon prime': 'bg-blue-600',
        disney: 'bg-blue-800',
        'disney+': 'bg-blue-800',
        hulu: 'bg-green-600',
        hbo: 'bg-purple-700',
        max: 'bg-purple-700',
        'apple tv': 'bg-gray-800',
        'apple tv+': 'bg-gray-800',
        paramount: 'bg-blue-500',
        peacock: 'bg-yellow-600',
      };
      
      const color = colors[service.toLowerCase()] || 'bg-gray-600';
      
      return (
        <span
          className={`inline-block ${color} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}
        >
          {service}
        </span>
      );
    },
    
    InfoBox: ({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'tip' }) => {
      const styles = {
        info: 'bg-blue-900/30 border-blue-600',
        warning: 'bg-yellow-900/30 border-yellow-600',
        tip: 'bg-green-900/30 border-green-600',
      };
      
      const icons = {
        info: 'ℹ️',
        warning: '⚠️',
        tip: '💡',
      };
      
      return (
        <div
          className={`${styles[type]} border-l-4 rounded-r-lg p-4 my-6`}
        >
          <div className="flex items-start gap-3">
            <span className="text-xl">{icons[type]}</span>
            <div className="text-gray-300">{children}</div>
          </div>
        </div>
      );
    },
    
    ...components,
  };
}
