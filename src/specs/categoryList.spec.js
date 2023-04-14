import welcomeScreen from '../screens/WelcomeScreen.js';
import mapScreen from '../screens/MapScreen.js';

describe('smoke test', () => {
    it('Should display map view', async () => {
        await welcomeScreen.skipInitialConfig();
        await welcomeScreen.skipHints();
        await mapScreen.openMap();
        expect(await mapScreen.map).toBeDisplayed();
    });

    it('Should atractions be default option', async () => {
        await welcomeScreen.skipInitialConfig();
        await welcomeScreen.skipHints();
        await mapScreen.openMap();
        await mapScreen.openAtractions();
        expect(await mapScreen.atractionsCategory).toHaveAttr('index', '0');
    });

    it('Should hotels option be availible', async () => {
        await welcomeScreen.skipInitialConfig();
        await welcomeScreen.skipHints();
        await mapScreen.openMap();
        await mapScreen.openAtractions();
        expect(await mapScreen.hotelsCategory).toBeDisplayed();
        expect(await mapScreen.hotelsCategory).toBeEnabled();
    });
})