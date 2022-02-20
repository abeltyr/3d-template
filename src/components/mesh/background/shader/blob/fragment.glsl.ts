const fragmentShader = /* glsl */ `
varying vec3 vPosition;
varying vec4 vColor;

uniform float uRate;
//uniform float time;

void main() {
   vec2 pos = (vPosition.yz + 12.0) /24.0;

  gl_FragColor = vec4(uRate, pos , 1.0);

}

`;

export default fragmentShader;
