import "./styles.css"; // keep this here!

// Let's write (or copy-paste 😏) our code below this line ↓

import {
  Engine,
  Scene,
  UniversalCamera,
  MeshBuilder,
  StandardMaterial,
  DirectionalLight,
  SceneLoader,
  Vector3,
  Color3
} from "@babylonjs/core";

// Get the canvas element and resize it to cover the full window
const canvas = document.getElementById("renderCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// In the previous examples this was called "renderer"
const engine = new Engine(canvas, true);

// Create the scene
const scene = new Scene(engine);

// Add a camera called "Camera" 🤓, and move it back 5 units
const camera = new UniversalCamera("Camera", new Vector3(0, 0.8, -100), scene);
//const camera = new UniversalCamera("Camera", 0, 0.8, 100, Vector3.Zero(), scene);
// Point the camera towards the scene origin
camera.setTarget(Vector3.Zero());

// And finally attach it to the canvas
camera.attachControl(canvas, true);

const light = new DirectionalLight(
  "DirectionalLight",
  new Vector3(1, 1, 1),
  scene
);
SceneLoader.ImportMesh("", "public/", "skull.babylon", scene, function (
  newMeshes
) {
  // Set the target of the camera to the first imported mesh
  camera.target = newMeshes[0];
});

// Our beforeRender function
scene.registerBeforeRender(function () {});

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
  scene.render();
});
