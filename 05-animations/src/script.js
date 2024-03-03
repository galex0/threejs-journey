import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Clock
const clock = new THREE.Clock()

gsap.to(mesh.position, { duration: 1, delay: 1, x: 10 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })

// Time
// let time = Date.now()

// Animations
const tick = () =>
{
    // Clock
    const deltaTime = clock.getElapsedTime()
    
    // Time
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time
    // time = currentTime
    // console.log(deltaTime)

    // Update objects
    //mesh.position.y = Math.sin(deltaTime) * 4
    //mesh.position.z = Math.cos(deltaTime) * 4
    //camera.position.x = Math.sin(deltaTime) * 10
    //camera.position.z = Math.cos(deltaTime) * 10
    //camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()