precision mediump float;
uniform float time; // time in seconds
uniform sampler2D tex0; // scene buffer
uniform float a;
varying vec2 vTexCoord;

void main(void)
{
  vec2 tc = vTexCoord;
  
  vec2 p = -1.0 + 2.0 * tc;
  float len = length(p + a*0.005);
  vec2 uv = tc - 0.2 + (p/len)*cos(len* (36.0 + a) - time*1.0) * 0.5;
   uv.y = 1.0 - uv.y;
  vec3 col = texture2D(tex0,uv).xyz;
  gl_FragColor = vec4(col,1.0);  
}



