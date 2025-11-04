const range = (start, end, step) => {
  return  Array.from(
        { length: Math.ceil(end - start / step) },
        (_, i) => start + i * step
    )
}


console.log(range(0, 10, 1));