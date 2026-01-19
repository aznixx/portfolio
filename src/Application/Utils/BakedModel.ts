import * as THREE from 'three';

/**
 * Applies a baked texture to a GLTF model.
 * 
 * "Baked" lighting means the light and shadow information is already painted 
 * into the texture image itself. To display this correctly, we must:
 * 1. Use MeshBasicMaterial (which ignores scene lights).
 * 2. Set the texture on that material.
 * 
 * @param model The loaded GLTF model object
 * @param texture The loaded texture image
 * @param scale Optional scale to apply to the model
 * @returns The model's scene with the new material applied
 */
export default function setupBakedModel(model: LoadedModel, texture: LoadedTexture, scale?: number): THREE.Group {
    // 1. Configure the texture to look correct
    texture.flipY = false;
    texture.encoding = THREE.sRGBEncoding;

    // 2. Create a "Basic" material that displays the texture exactly as is,
    // ignoring any lighting in the 3D scene (since lighting is already "baked" in).
    const material = new THREE.MeshBasicMaterial({
        map: texture,
    });

    // 3. Apply this material to every part of the model
    model.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            // Apply scale if provided
            if (scale) child.scale.set(scale, scale, scale);

            // Override the default material with our baked material
            child.material = material;
        }
    });

    return model.scene;
}
