export const sleep = (waitSeconds: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(() => null)
    }, waitSeconds * 1000)
  })
