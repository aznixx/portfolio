import * as THREE from 'three';
import Application from '../Application';
import setupBakedModel from '../Utils/BakedModel';
import Resources from '../Utils/Resources';

export default class Computer {
    application: Application;
    scene: THREE.Scene;
    resources: Resources;

    constructor() {
        this.application = new Application();
        this.scene = this.application.scene;
        this.resources = this.application.resources;

        this.setModel();
    }

    setModel() {
        const model = setupBakedModel(
            this.resources.items.gltfModel.computerSetupModel,
            this.resources.items.texture.computerSetupTexture,
            900
        );
        this.scene.add(model);
    }
}
