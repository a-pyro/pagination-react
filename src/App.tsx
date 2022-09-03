import { Button, Container } from './components/styled'
import useTime from './utils/hooks/useTime'

export default function App({ pages = 10, initialPresent = 4 }) {
  const { past, present, future, goBackward, goForward, jumpInTime } = useTime(
    pages,
    initialPresent
  )
  return (
    <div>
      <Container>
        <Button onClick={goBackward}>{'<'}</Button>
        <div> Past: {JSON.stringify(past)}-----</div>
        <div> {present} </div>
        <div>-----Future: {JSON.stringify(future)}</div>
        <Button onClick={goForward}>{'>'}</Button>
      </Container>
      <Container>
        <Button isArrow onClick={goBackward}>
          {'<'}
        </Button>
        {[...past, present, ...future].map((pag, idx) => (
          <Button
            isActive={pag === present}
            key={pag + idx}
            onClick={() => jumpInTime(pag)}
          >
            {pag}
          </Button>
        ))}
        <Button isArrow onClick={goForward}>
          {'>'}
        </Button>
      </Container>
      <Container>
        <Button isArrow onClick={goBackward}>
          {'<'}
        </Button>
        {[...past, present, ...future].map((pag, idx) => (
          <Button
            isActive={pag === present}
            style={{}}
            key={pag + idx}
            onClick={() => jumpInTime(pag)}
          >
            {pag}
          </Button>
        ))}
        <Button isArrow onClick={goForward}>
          {'>'}
        </Button>
      </Container>
    </div>
  )
}
