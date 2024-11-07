import { defineStore } from 'pinia'
import { getCanvasFromId } from '@/utils/canvas'
import { getContextOrAlert, resetRenderingContext } from '@/utils/webgl'

export const useWebGLStore = defineStore('webgl', () => {
  const canvases: Record<string, HTMLCanvasElement> = reactive({})
  const contexts: Record<string, WebGLRenderingContext> = reactive({})

  const start = (targetCanvasId: string): [HTMLCanvasElement, WebGLRenderingContext] => {
    const canvas: HTMLCanvasElement = getCanvasFromId(targetCanvasId)
    const context: WebGLRenderingContext = getContextOrAlert(canvas)

    // init context // ***
    resetRenderingContext(context)

    // add canvas and context to state
    canvases[targetCanvasId] = canvas
    contexts[targetCanvasId] = context

    return [canvas, context]
  }

  return { canvases, contexts, start }
})
