type Resource =
    | TextureResource
    | ModelResource;

declare interface StyleSheetCSS {
    [key: string]: React.CSSProperties;
}

type TextureResource = {
    name: string;
    type: 'texture';
    path: string;
};

type ModelResource = {
    name: string;
    type: 'gltfModel';
    path: string;
};

type EnclosingPlane = {
    size: THREE.Vector2;
    position: THREE.Vector3;
    rotation: THREE.Euler;
};

type CameraKeyframe = {
    position: THREE.Vector3;
    focalPoint: THREE.Vector3;
};

type LoadedResource =
    | LoadedTexture
    | LoadedModel;

type LoadedTexture = THREE.Texture;

type LoadedModel = import('three/examples/jsm/loaders/GLTFLoader').GLTF;

type ResourceType = 'texture' | 'gltfModel';
