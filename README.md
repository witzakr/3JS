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
