'use client';

/**
 * ExampleBlock \u2014 sezione dark immersiva con esempio pratico
 * @param {Object} props
 * @param {string} props.name - Nome del personaggio (es. 'Laura')
 * @param {string|React.ReactNode} props.story - Testo della storia (pu\u00f2 contenere <strong>)
 * @param {Array<{label: string, value: string}>} props.lines - Righe del calcolo
 * @param {{label: string, value: string}} props.total - Riga totale evidenziata
 */
export default function ExampleBlock({ name, story, lines = [], total }) {
  return (
    <div className="v8-esempio-inner">
      <h2 className="rv">L&apos;esempio di <em>{name}</em></h2>
      <div className="v8-esempio-story">
        {typeof story === 'string' ? (
          <p className="rv rv-d1" dangerouslySetInnerHTML={{ __html: story }} />
        ) : (
          <div className="rv rv-d1">{story}</div>
        )}
      </div>
      <div className="v8-esempio-math">
        {lines.map((line, i) => (
          <div key={i} className={`v8-esempio-line rv rv-d${Math.min(i + 1, 4)}`}>
            <span>{line.label}</span>
            <span>{line.value}</span>
          </div>
        ))}
        {total && (
          <div className="v8-esempio-line v8-esempio-total rv rv-d4">
            <span>{total.label}</span>
            <span>{total.value}</span>
          </div>
        )}
      </div>
    </div>
  );
}
