/**
 * InfoBox \u2014 box informativo tip (verde) o warning (ambra)
 * @param {Object} props
 * @param {'tip'|'warn'} [props.type='tip']
 * @param {string|React.ReactNode} props.children
 */
export default function InfoBox({ type = 'tip', children }) {
  const icon = type === 'warn' ? (
    <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ) : (
    <svg className="v8-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
    </svg>
  );

  return (
    <div className={`v8-info ${type}`}>
      {icon}
      <div>{typeof children === 'string' ? <p>{children}</p> : children}</div>
    </div>
  );
}
