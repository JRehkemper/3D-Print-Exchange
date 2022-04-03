<template>
    <div id="3dAnchor">
    </div>
</template>
<script>
import * as THREE from 'three';
import * as STLLoader from 'three-stl-loader'
export default {
    data() {
        return {

        }
    },
    mounted() {
        var divElement = document.getElementById("3dAnchor")
        console.log(divElement)
        console.log(divElement.parentElement.parentElement.parentElement)
        console.log(divElement.parentElement.parentElement.parentElement.clientWidth)
        var parentWidth = divElement.parentElement.parentElement.parentElement.clientWidth
        var parentHight = parentWidth/2
        console.log(parentWidth)
        // Three JS
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, parentWidth/parentHight, 0.1, 1000 );

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( parentWidth, parentHight );

        divElement.appendChild( renderer.domElement );

        //var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        //var cube = new THREE.Mesh( geometry, material );
        //scene.add( cube );

        camera.position.z = 5;

        var animate = function () {
            requestAnimationFrame( animate );

            //cube.rotation.x += 0.01;
            //cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        };

        let loader = new STLLoader()
        loader.load('../../SampleFiles/HerzPlaekHalter.stl', function(geometry) {
            var mesh = new THREE.Mesh(geometry, material)
            scene.add(mesh)
        })

        animate();
    }
}




</script>