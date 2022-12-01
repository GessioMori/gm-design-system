import '../styles/tokens-grid.css'

type TokensGridProps = {
  tokens: Record<string, string>
  hasRemValue?: boolean
  hasCustomFont?: boolean
  hasCustomWeight?: boolean
}

export function TokensGrid({
  tokens,
  hasRemValue,
  hasCustomFont,
  hasCustomWeight,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <th>Name</th>
        <th>Value</th>
        {hasRemValue && <th>Pixels</th>}
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td
                style={Object.assign(
                  hasCustomFont ? { fontFamily: value } : {},
                  hasCustomWeight ? { fontWeight: value } : {},
                )}
              >
                {value}
              </td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
