import welcomeScreen from '../screens/WelcomeScreen.js';
import menuScreen from '../screens/MenuScreen.js';
import privacyLegalScreen from '../screens/PrivacyLegalScreen.js';

describe('Privacy and Legal test', () => {
    it('Should display menu view', async () => {
        await welcomeScreen.skipInitialConfig();
        await welcomeScreen.skipHints();
        await menuScreen.openMenu();
        await menuScreen.scrollSelector;
        expect(await menuScreen.myProfileButton).toBeDisplayed();
        expect(await menuScreen.propertyRulesButton).toBeDisplayed();
        expect(await menuScreen.linkAccountButton).toBeDisplayed();
        expect(await menuScreen.helpButton).toBeDisplayed();
        expect(await menuScreen.privacyButton).toBeDisplayed();
    });

    it('Should display privacy screen', async () => {
        await welcomeScreen.skipInitialConfig();
        await welcomeScreen.skipHints();
        await menuScreen.openMenu();
        await menuScreen.scrollSelector;
        await menuScreen.privacyButton.click();
        expect(await privacyLegalScreen.privacyLabel).toBeDisplayed();
    });

    it.only('Should display privacy screen', async () => {
        await welcomeScreen.skipInitialConfig();
        await welcomeScreen.skipHints();
        await menuScreen.openMenu();
        await menuScreen.scrollSelector;
        await menuScreen.privacyButton.click();
        expect(await privacyLegalScreen.privacyPolicyButton).toBeDisplayed();
        expect(await privacyLegalScreen.termsUseButton).toBeDisplayed();
        expect(await privacyLegalScreen.suplementalTermsButton).toBeDisplayed();
        expect(await privacyLegalScreen.legalNoticesButton).toBeDisplayed();
        expect(await privacyLegalScreen.propertyRulesButton).toBeDisplayed();
        expect(await privacyLegalScreen.electronicCommunicationsButton).toBeDisplayed();
    });
})