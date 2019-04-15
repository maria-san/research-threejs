var example = (function() {

    "use strict";

    var scene = new THREE.Scene(),
        // renderer = window.WebGLRendererContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(),
        renderer = new THREE.WebGLRenderer(),
        light = new THREE.AmbientLight(0xffffff),
        camera,
        box;

    function initScene() {
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById("webgl-container").appendChild(renderer.domElement);

        scene.add(light);

        camera = new THREE.PerspectiveCamera(
            35, // fov
            window.innerWidth / window.innerHeight, // aspect ratio
            1, // near range
            1000 // far range
        );

        camera.position.z = 100;
        scene.add(camera);

        box = new THREE.Mesh(
            new THREE.BoxGeometry(20, 20, 20),
            new THREE.MeshBasicMaterial({ color: 0xFF0000 })
        );
        box.name = "box";

        scene.add(box);

        render();
    }

    function render() {
        renderer.render(scene, camera);
        requestAnimationFrame(render);

        box.rotation.y += 0.01;
    }

    window.onload = initScene;

    return {
    	scene : scene
    }

})();