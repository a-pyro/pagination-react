import { containerStyle, marginStyle } from './styles'
import useTime from './utils/hooks/useTime'

export default function App({ pages = 10, initialPresent = 4 }) {
  const { past, present, future, goBackward, goForward, jumpInTime } = useTime(
    pages,
    initialPresent
  )
  return (
    <div>
      <div style={containerStyle}>
        <button onClick={goBackward} style={marginStyle}>
          {'<'}
        </button>
        <div style={marginStyle}> Past: {JSON.stringify(past)}</div>
        <div style={marginStyle}> {present} </div>
        <div style={marginStyle}>Future: {JSON.stringify(future)}</div>
        <button onClick={goForward} style={marginStyle}>
          {'>'}
        </button>
      </div>
      <div style={containerStyle}>
        <button onClick={goBackward} style={marginStyle}>
          {'<'}
        </button>
        {[...past, present, ...future].map((pag, idx) => (
          <button
            style={{
              backgroundColor: pag === present ? 'gold' : undefined,
              margin: '0px 2px',
              width: '25px',
              height: '25px',
              padding: '0px 0px',
              cursor: 'pointer',
              transform: pag === present ? 'scale(1.2)' : undefined,
              transition: 'all .1s ease-in-out',
            }}
            key={pag + idx}
            onClick={() => jumpInTime(pag)}
          >
            {pag}
          </button>
        ))}
        <button onClick={goForward} style={marginStyle}>
          {'>'}
        </button>
      </div>
    </div>
  )
}
