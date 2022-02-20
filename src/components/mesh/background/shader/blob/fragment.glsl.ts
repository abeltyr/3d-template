const fragmentShader = /* glsl */ `
#define ITERATIONS 1
#define PI 3.141592653589793238462643383279502884197

varying vec2 vUv;
uniform float uAnimation; 

void main() {
  
    float angle = atan(vUv.x - 0.5, vUv.y - 0.5);
    angle /= 2.0 * PI;
    angle += 0.5;
    angle = sin(uAnimation * angle);
    float value = cos(angle);
	gl_FragColor = vec4(vec3(value), 1.0);
}


`;

export default fragmentShader;
