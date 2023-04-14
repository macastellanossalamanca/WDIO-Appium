class AddPlansScreen {
    get addButton() { return $('android=new UiSelector().resourceIdMatches(".*tab_animated_icon").descriptionMatches(".*Buy.*")') }
    get closeButton() { return $('android=new UiSelector().resourceIdMatches(".*btnCloseActionSheet")') }
    get diningButton() { return $('android=new UiSelector().resourceIdMatches(".*actionSheetItemText").text("Check Dining Availability")') }

    async openAdd() {
        await this.addButton.click()
    }

}
export default new AddPlansScreen()