import chrome from "chrome-aws-lambda"

export default async function screenshot(url: string, width: number = 2388, height: number = 1768) {
  const executablePath = await chrome.executablePath
  const hasServerlessChromium = Boolean(executablePath)

  if (hasServerlessChromium) {
    const puppeteer = await import("puppeteer-core")
    const browser = await puppeteer.launch({
      args: chrome.args || ["--no-sandbox", "--disable-setuid-sandbox"],
      defaultViewport: { width, height },
      executablePath,
      headless: chrome.headless ?? true,
      ignoreHTTPSErrors: true,
    })

    const page = await browser.newPage()
    await page.goto(url, { waitUntil: "networkidle2" })
    const buffer = await page.screenshot({ type: "jpeg" })
    await browser.close()
    return buffer
  }

  const puppeteer = await import("puppeteer")
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: { width, height },
  })
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: "networkidle2" })
  const buffer = await page.screenshot({ type: "jpeg" })
  await browser.close()
  return buffer
}
