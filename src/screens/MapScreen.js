class MapScreen {
    get mapButton() { return $('android=new UiSelector().resourceIdMatches(".*tab_icon").descriptionMatches(".*Map.*")') }
    get map() { return $('android=new UiSelector().resourceIdMatches(".*/bottomSheetContainer")') }
    get atractionsButton() { return $('android=new UiSelector().resourceIdMatches(".*/categoryTitle")') }
    get atractionsCategory() { return $('android=new UiSelector().descriptionMatches(".*Attractions, Category.*")') }
    get hotelsCategory() { return $('android=new UiSelector().descriptionMatches(".*Hotels, Category.*")') }

    async openMap() {
        await this.mapButton.click()
    }
}

export default new MapScreen()