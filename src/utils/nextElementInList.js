const nextElementInList = (list, val) => {
  let currentValueIndex = list.indexOf(val)
  return list[(currentValueIndex + 1) % list.length]
}

export default nextElementInList
