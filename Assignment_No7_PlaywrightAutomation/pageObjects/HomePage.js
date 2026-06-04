exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        // Robust locator for the main search bar
        this.searchInput = page.locator('input[type="search"]'); 
    }

    async navigate() {
        await this.page.goto('https://www.daraz.pk/');
        // Wait for the page to fully load its network resources
        await this.page.waitForLoadState('networkidle');
    }

    async searchForProduct(keyword) {
        await this.searchInput.fill(keyword);
        // Pressing Enter is much safer than trying to find a dynamic search button class
        await this.searchInput.press('Enter'); 
        await this.page.waitForLoadState('domcontentloaded');
    }
}