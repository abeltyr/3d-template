const fragmentShader = /* glsl */ `
#define ITERATIONS 1

varying vec2 vUv;
uniform float uAnimation;
varying vec2 vPosition;

float hashOld12(vec2 p) {
	return fract(sin(dot(p, vec2(18.9898, 78.233))) * 43758.5453);
    
    // This one is better, but it still stretches out quite quickly...
    // But it's really quite bad on my Mac(!)
    //return fract(sin(dot(p, vec2(1.0,113.0)))*43758.5453123);

}

void main() {
  
  float a = 0.0, b = a;
  for (int t = 0; t < ITERATIONS; t++)
  {
      float v = float(t+100)*0.5;
      vec2 pos = (vUv * v + sin(uAnimation * 75.0) / 75.0  );
      a += hashOld12(pos);
    b += hashOld12(pos);
  }
  vec3 col = vec3(mix( a,b, step(vUv.x, .5)));
  // col = vec3(0.4, 0.0, 0.0);
  // mix(vec3(0.4, 0.0, 0.0), col, smoothstep(.5, .495, vUv.x) + smoothstep(.5, .505, vUv.x));
	gl_FragColor = vec4(col, 1.0);
}






`;

export default fragmentShader;
