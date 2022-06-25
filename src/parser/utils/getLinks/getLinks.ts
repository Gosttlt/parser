import getFormattedClasses from './utils/getFormattedClasses'

const getLinks = (container: HTMLElement | Document, selector: string) => {
  const links: string[] = []
  let selectors = selector
  if (selector.split(' ').length > 1) {
    selectors = getFormattedClasses(selector)
  }

  const nodeList = container.querySelectorAll(selectors)
  nodeList.forEach((node, i) => {
    const link = node.getAttribute('href')
    if (link) {
      links.push(`${i}) ${link}`)
    }
  })
  return links
}
export default getLinks
