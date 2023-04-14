import welcomeScreen from '../screens/WelcomeScreen.js';
import addPlansScreen from '../screens/AddPlansScreen.js';
describe('Add option test', () => {
    it('Add view', async () => {
        await welcomeScreen.skipInitialConfig();
        await welcomeScreen.skipHints();
        await addPlansScreen.openAdd();
        expect(await addPlansScreen.closeButton).toBeDisplayed();
    });

    it('Should display menu view', async () => {
        await welcomeScreen.skipInitialConfig();
        await welcomeScreen.skipHints();
        await addPlansScreen.openAdd();
        expect(await addPlansScreen.diningButton).toBeDisplayed();
        expect(await addPlansScreen.diningButton).toBeEnabled();
    });
});