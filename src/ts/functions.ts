export function getAnimationDelay(index: number, delayAmount: number = 300) {
  const delay = index * delayAmount
  return delay < 1000 ? '0' + delay : delay
}

export function validateObject(e: any) {
  return typeof e === 'object' && !Array.isArray(e)
}
