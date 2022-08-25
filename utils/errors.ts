export function cleanErrors(e: any) {
  // Suppress error message if user rejected tx request (code 4001)
  if (e.code === 4001) {
    return undefined
  }
  return e.message
}

