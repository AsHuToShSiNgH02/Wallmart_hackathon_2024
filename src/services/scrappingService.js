import puppeteer from 'puppeteer';

const scrapeProductPrice = async (url) => {
    try {
        // Launch Puppeteer browser instance
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        // Navigate to the Amazon product page
        await page.goto(url, {
            visible: true, // Ensure the page is fully loaded
            timeout: 60000 // Set timeout to 60 seconds
        });
        
        // Wait for the price selector to be present
        await page.waitForSelector('.priceToPay');
        
        // Extract price information
        const priceInformation = await page.evaluate(() => {
            // Query for the amount, currency symbol, and fractional part
            const amountElement = document.querySelector('.a-price-whole');
            // const currencyElement = document.querySelector('.a-price-symbol');
            // const fractionElement = document.querySelector('.a-price-fraction'); // Assuming fraction part may be present
            
            // Function to clean and trim strings
            const stripString = (rawString) => rawString ? rawString.trim() : '';
            
            // Extract and process product information
            return  {
                amount: amountElement ? amountElement.textContent : null,
                // currency: currencyElement ? currencyElement.textContent : null
            };
        });
        
        // Log the extracted price information
        console.log('Price Information:', priceInformation.amount);
        return priceInformation.amount;
        
        // Close the browser instance
        await browser.close();
    } catch (error) {
        console.error('Error scraping the product price:', error);
    }
};

export default scrapeProductPrice;