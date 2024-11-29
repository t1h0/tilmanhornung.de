export function getAnimationDelay(index: number, delayAmount: number = 300) {
  const delay = index * delayAmount
  return delay < 1000 ? '0' + delay : delay
}
