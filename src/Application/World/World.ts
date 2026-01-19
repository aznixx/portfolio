import Application from '../Application';
import Resources from '../Utils/Resources';
import Computer from './Computer'; // Changed from ComputerSetup to Computer
import Environment from './Environment';

import MonitorScreen from './MonitorScreen'; // Added import

export default class World {
    application: Application;
    scene: THREE.Scene;
    resources: Resources;

    // Objects in the scene
    environment: Environment;
    computer: Computer; // Changed from computerSetup to computer
    monitorScreen: MonitorScreen; // Added property

    constructor() {
        this.application = new Application();
        this.scene = this.application.scene;
        this.resources = this.application.resources;
        // Wait for resources
        this.resources.on('ready', () => {
            // Setup
            this.environment = new Environment();
            this.computer = new Computer(); // Changed from computerSetup to computer
            this.monitorScreen = new MonitorScreen(); // Added instantiation
        });
    }

    update() {
        if (this.environment) this.environment.update();
        if (this.monitorScreen) this.monitorScreen.update();
    }
}
