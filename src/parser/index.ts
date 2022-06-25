import getDocument from './utils/getDocument'
import getLinks from './utils/getLinks/getLinks'

const startSelector = '.ju6'
const linkSelector = startSelector
const url = 'https://www.ozon.ru/category/umnye-chasy-i-fitnes-braslety-1761/'

export const getStarted = async () => {
  const document = await getDocument(url, startSelector)
  const links = getLinks(document, 'j3r rj3 tile-hover-target')
  return links
}
