//@ts-ignore
import getDomJs from './getDomJs'
import getDomContent from './puppeteer'

const getDocument = async (url: string, startSelector: string) => {
  const domContent = await getDomContent(url, startSelector)
  const document = getDomJs(domContent) as Document
  return document
}

export default getDocument
