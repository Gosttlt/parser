import chalk from 'chalk'

export const errorColor = (text: string): string => {
  const desc = chalk.bgRed('ОПИСАНИЕ ОШИБКИ:')
  const content = chalk.red(text.toUpperCase())
  return `${desc} ${content}`
}
