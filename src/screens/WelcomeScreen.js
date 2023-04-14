class WelcomeScreen {
    get getStartedButton() { return $('android=new UiSelector().resourceIdMatches(".*permission_primary_btn").text("Get Started")') }
    get continueButton() { return $('android=new UiSelector().resourceIdMatches(".*permission_primary_btn").text("Continue")') }
    get okButton() { return $('android=new UiSelector().resourceIdMatches(".*android:id/button1")') }
    get allowButton() { return $('android=new UiSelector().resourceIdMatches(".*permission_allow_button").text("Allow")') }
    get sharedLocation() { return $('android=new UiSelector().resourceIdMatches(".*permission_primary_btn").text("Share Location")') }
    get whileUsingButton() { return $('android=new UiSelector().resourceIdMatches(".*permission_allow_foreground_only_button").text("While using the app")') }
    get nextButton() { return $('android=new UiSelector().className("android.view.View").index(1)') }
    get dismissButton() { return $('android=new UiSelector().resourceId("dismiss-icon")') }

    async skipInitialConfig() {
        await this.getStartedButton.click();
        await this.continueButton.click();
        await this.okButton.click();
        await this.allowButton.click();
        await this.sharedLocation.click();
        await this.okButton.click();
        await this.whileUsingButton.click();
        await this.continueButton.click();
        await this.okButton.click();
        await this.allowButton.click();
    }

    async skipHints() {
        await this.dismissButton.click();
    }
}
export default new WelcomeScreen()