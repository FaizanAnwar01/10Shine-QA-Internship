exports.SearchResultsPage = class SearchResultsPage {
    constructor(page) {
        this.page = page;
        this.minPrice = page.getByPlaceholder('Min');
        this.maxPrice = page.getByPlaceholder('Max');
        // We deleted the priceSubmitBtn entirely! We don't need it.
    }

    async applyBrandFilter(brandName) {
        await this.page.locator(`text=${brandName}`).click();
        await this.page.waitForTimeout(2000); 
    }

    async applyPriceFilter(min, max) {
        await this.minPrice.fill(min.toString());
        await this.maxPrice.fill(max.toString());
        
        // THE HACK: Just press the Enter key on the keyboard!
        await this.maxPrice.press('Enter');
        
        await this.page.waitForTimeout(2000); 
    }

    async countProducts() {
        const products = this.page.locator('[data-qa-locator="product-item"]');
        await products.first().waitFor({ state: 'visible' });
        const count = await products.count();
        return count;
    }
    async getFirstProductUrl() {
        // Find the first product card, then find the first hyperlink <a> inside it
        const firstProductLink = this.page.locator('[data-qa-locator="product-item"] a').first();
        
        // Extract the raw URL
        let href = await firstProductLink.getAttribute('href');
        
        // Daraz often uses relative URLs starting with '//'. We need to add 'https:'
        if (href.startsWith('//')) {
            href = 'https:' + href;
        }
        return href;
    }
}