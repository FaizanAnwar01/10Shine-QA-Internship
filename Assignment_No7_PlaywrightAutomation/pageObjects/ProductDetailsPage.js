exports.ProductDetailsPage = class ProductDetailsPage {
    constructor(page) {
        this.page = page;
    }

    async checkFreeShipping() {
        // Wait for the delivery section to load
        await this.page.waitForSelector('.delivery-option-item', { timeout: 10000 });
        
        // Grab the entire text of the page body to check for Free Shipping indicators
        const bodyText = await this.page.locator('body').innerText();
        
        // Return true if it finds free delivery text, false otherwise
        if (bodyText.includes('Free Delivery') || bodyText.includes('Free Shipping')) {
            return true;
        }
        return false;
    }
}