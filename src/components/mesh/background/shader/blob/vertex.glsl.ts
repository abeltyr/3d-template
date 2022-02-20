const vertexShader = /* glsl */ `
 
varying vec3 vPosition;
//varying vec2 texCoordVarying;

uniform float uAnimation;

void main() {
    float PI = 3.14159;
    //float deltaY = pow(data.z,2.0);

    float distFromCenter = length(position);

    vec3 posFinal = position * sin(uAnimation * 0.05);

    float pulsateDist = 1.5 + sin(distFromCenter*(2.0 + sin(uAnimation*0.2)*0.5) + uAnimation*0.3);
    float offsetX = pulsateDist * 0.5 *  0.9 * position.x  + sin(uAnimation*0.7) ;
    float offsetY = pulsateDist * 0.5 *  0.9 * position.y  + cos(uAnimation*0.7);
    posFinal.x += offsetX;
    posFinal.y += offsetY;


    vPosition = posFinal;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( posFinal, 1.0 );
}`;

export default vertexShader;
