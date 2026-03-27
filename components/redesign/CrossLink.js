import Link from 'next/link';

/**
 * CrossLink \u2014 link ad altra guida inline (pill verde)
 * @param {Object} props
 * @param {string} props.href - URL della guida (es. '/isee')
 * @param {string} props.children - Testo del link
 */
export default function CrossLink({ href, children }) {
  return (
    <Link href={href} className="v8-crosslink">
      {children}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M7 17L17 7M17 7H8M17 7v9" />
      </svg>
    </Link>
  );
}
