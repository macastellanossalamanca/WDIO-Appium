class PrivacyLegalScreen {
    get privacyLabel() { return $('android=new UiSelector().text("Privacy & Legal")') }
    get privacyPolicyButton() { return $('android=new UiSelector().text("Privacy Policy")') }
    get termsUseButton() { return $('android=new UiSelector().text("Terms of Use")') }
    get suplementalTermsButton() { return $('android=new UiSelector().text("Supplemental Terms and Conditions")') }
    get legalNoticesButton() { return $('android=new UiSelector().text("Legal Notices")') }
    get propertyRulesButton() { return $('android=new UiSelector().text("Property Rules")') }
    get electronicCommunicationsButton() { return $('android=new UiSelector().text("Electronic Communications Disclosure")') }

}
export default new PrivacyLegalScreen()