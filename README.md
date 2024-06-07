Three js website with interactable model
------------------------------------------------------------

HTML: 
https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/index.html#L1-L31
- https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/index.html#L10-L17
  - The script block sets up paths for the Three.js library for later use in the project.
- https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/index.html#L18
  - Using type module to use import.
- https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/index.html#L24-L26
  - Set up the canvas for the model to modify the background with CSS more easily and display the model.

----------------------------------------------------------------------------------------------------------- 
JS:
https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/script.js#L1-L128
- https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/script.js#L1-L3
  - Importing the three js, GLTFLoader to load the model and OrbitControl to use them later as a feature for the model.
- https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/script.js#L5-L8
  - Creating variables for later use in the project, it's important to mention the isMouseDown variable, it manages mouse interaction and stores the previous mouse position for rotating the model.
- https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/script.js#L13-L65
  - https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/script.js#L15-L16
    - Setting up the scene.
  - https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/script.js#L19-L20
    - Setting up the camera with the point of view (POV) of 75 degrees, aspect ratio based on the window dimensions, and the rest of it is base values (https://threejs.org/docs/#api/en/cameras/PerspectiveCamera), camera position was adjusted based on the model position.
  - https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/script.js#L23-L25
    - Setting up the render for the model, getting the canvas from HTML by its ID, rendering the scene on the canvas (https://threejs.org/docs/#api/en/renderers/WebGLRenderer.antialias) and setting the size of the scene.
  - https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/script.js#L27-L36
    - Setting up the lighting for the scene, using ambient and hemispherical light because the directional light model after rotation would have spots with no light. (https://threejs.org/docs/index.html?q=ligh#api/en/lights/AmbientLight), (https://threejs.org/docs/index.html?q=ligh#api/en/lights/HemisphereLight), (https://threejs.org/docs/index.html?q=ligh#api/en/lights/DirectionalLight)
  - https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/script.js#L39-L49
      - Loading the GLTF model (the model was downloaded from https://sketchfab.com/3d-models/minecraft-lobster-1801fbf645244e69851ec17f76242209), and scaling it appropriately. (https://threejs.org/docs/index.html?q=load#manual/en/introduction/Loading-3D-models)
  - https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/script.js#L52-L57
    - OrbitControl to rotate and zoom in on the model. (https://threejs.org/docs/index.html#examples/en/controls/OrbitControls)
  - https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/script.js#L60-L64
    - Adding event listeners to manipulate the object, those event listeners are using functions that will be explained later on.
  - https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/script.js#L67-L72
    - Function is responsible for adjusting the aspect ratio of the camera and resizing the renderer to fit the canvas when the window is resized. Used some stackoverflow for the help (https://discourse.threejs.org/t/resize-canvas-with-different-aspect-ratio/42439)
  - https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/script.js#L74-L105
    - These functions enable rotation of the model when the mouse is pressed (isMouseDown value changes to true), this was a difficult part, but I used some help from the forum (https://discourse.threejs.org/t/rotate-gltf-model-with-mouse-move/49425/2) and also help from a peer with more experience.
  - https://github.com/witzakr/3JS/blob/463d152bad1f9b22e06a0cb134dcded1fc11c88e/script.js#L107-L110
    - This a function for the spin button that allows to spin the model around the Y-axis and it also toggles the text on the button
