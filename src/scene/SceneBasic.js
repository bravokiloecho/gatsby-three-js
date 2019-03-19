
const CreateSphere = function () {
  const geometry = new THREE.SphereGeometry( 5, 32, 32 );
  const material = new THREE.MeshBasicMaterial( {
    color: 0x000000,
    wireframe: true
  });
  return new THREE.Mesh( geometry, material );
};

export { CreateSphere };