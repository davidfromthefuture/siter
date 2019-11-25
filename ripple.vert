attribute vec2 aTexCoord;
attribute vec3 aPosition;
varying vec2 vTexCoord;

void main()
{	
	vTexCoord = aTexCoord;
	  // copy the position data into a vec4, using 1.0 as the w component
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 + 0.15;

  // send the vertex information on to the fragment shader
  gl_Position = positionVec4;
}