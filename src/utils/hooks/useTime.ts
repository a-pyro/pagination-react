import { getIdxFromList } from './../index'
import { useCallback, useMemo, useState } from 'react'

const useTime = (duration = 10, initialPresent = 1) => {
  const time = useMemo(
    () =>
      Array(duration)
        .fill(0)
        .map((_, idx) => idx + 1),
    [duration]
  )
  const initialFuture = useMemo(
    () => time.slice(getIdxFromList(time, initialPresent) + 1),
    [initialPresent, time]
  )
  const initialPast = useMemo(
    () => time.slice(0, getIdxFromList(time, initialPresent)),
    [initialPresent, time]
  )
  const [present, setPresent] = useState(initialPresent)
  const [past, setPast] = useState(initialPast)
  const [future, setFuture] = useState(initialFuture)

  const canGo = useMemo(() => future.length !== 0, [future])
  const canCome = useMemo(() => past.length !== 0, [past])

  const goForward = useCallback(() => {
    if (!canGo) return
    const newPresent = future[0]
    const newPast = [...past, present]
    const newFuture = future.slice(1)
    setPresent(() => newPresent)
    setPast(() => newPast)
    setFuture(() => newFuture)
  }, [canGo, future, past, present])

  const goBackward = useCallback(() => {
    if (!canCome) return
    const newPresent = past.at(-1)
    const newPast = past.slice(0, past.length - 1)
    const newFuture = [present, ...future]
    setPresent(() => newPresent as number)
    setPast(() => newPast)
    setFuture(() => newFuture)
  }, [canCome, future, past, present])

  const jumpInTime = useCallback(
    (pag: number) => {
      const newPresent = pag
      setPast(() => time.slice(0, getIdxFromList(time, newPresent)))
      setFuture(() => time.slice(getIdxFromList(time, newPresent) + 1))
      setPresent(newPresent)
    },
    [time]
  )

  return { past, present, future, goBackward, goForward, jumpInTime }
}

export default useTime
