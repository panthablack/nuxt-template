export const getCanvasFromId = (id: string) => {
  const canvas = document.getElementById(id) as HTMLCanvasElement
  if (canvas?.nodeName === 'CANVAS') return canvas
  else throw 'Cannot initialise WebGL Store - Canvas missing.'
}

export const getAspectRatio = (canvas: HTMLCanvasElement): number => {
  // control for off screen canvas type and division by zero scenarios
  const w = canvas?.clientWidth || 1
  const h = canvas?.clientHeight || 1

  return w / h
}
