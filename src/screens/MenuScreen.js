class MenuScreen {
    get menuButton() { return $('android=new UiSelector().resourceIdMatches(".*tab_icon").descriptionMatches(".*More Options.*")') }
    get myProfileButton() { return $('android=new UiSelector().descriptionMatches(".*My Profile button.*")') }
    get propertyRulesButton() { return $('android=new UiSelector().descriptionMatches(".*Property Rules.*")') }
    get linkAccountButton() { return $('android=new UiSelector().descriptionMatches(".*Link to Account.*")') }
    get helpButton() { return $('android=new UiSelector().descriptionMatches(".*Help.*")') }
    get privacyButton() { return $('android=new UiSelector().descriptionMatches(".*Privacy.*")') }
    get scrollSelector() { return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().descriptionMatches(".*Privacy.*"))') }

    async openMenu() {
        await this.menuButton.click()
    }

}

export default new MenuScreen()