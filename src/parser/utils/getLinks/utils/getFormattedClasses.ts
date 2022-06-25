const getFormattedClasses = (classes: string): string => {
  return classes
    .split(' ')
    .map(el => {
      return `.${el}`
    })
    .join(', ')
}

export default getFormattedClasses
