import {JSDOM} from 'jsdom'

const getDomJs = domContent => {
  const document = new JSDOM(domContent).window.document
  return document
}
export default getDomJs
