export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export function stringToSeconds(str) {
  const parts = str.split(':')
  let seconds = 0
  if (parts.length === 2) {
    let [m, s] = parts.map((el) => parseInt(el))
    seconds = m * 60 + s
  }
  if (parts.length === 3) {
    let [h, m, s] = parts.map((el) => parseInt(el))
    seconds = h * 60 * 60 + m * 60 + s
  }
  return seconds
}

export function secondsToString(seconds) {
  return [Math.floor(seconds / 60), seconds % 60].map((num) => num.toString().padStart(2, '0')).join(':')
}
