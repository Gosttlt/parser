import puppeteer from 'puppeteer'
import {errorColor} from '../../../utils/errorColor'

const getDomContent = async (url: string, selector: string) => {
  try {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto(url)
    await page.setViewport({
      width: 1920,
      height: 1080,
    })
    await page.waitForSelector(selector)
    const content = await page.content()
    browser.close()
    return content
  } catch (error) {
    throw errorColor(
      'элемент не найден, возможные ошибки: 1) Элемент указан не верно 2) Нужно отключить безголовый режим puppeteer.launch({headless: false})  3) Увеличить время ожидания',
    )
  }
}
export default getDomContent
