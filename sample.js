var vertexShader = ` // glsl
  attribute vec3 position;
  attribute float time;
  uniform float clock;
  varying float age;
  void main() {
    age = clock - time;
    gl_Position = vec4(position, 1.0);
  }
`

var fragmentShader = `// glsl
  varying float age;
  void main() {
    if (age < 0) { discard; }
    vec3 color = vec3(fract(age));
    gl_FragColor = vec4(color, 1.0);
  }
`

var justAComment = `//glsl vec3 blah;`;

// FIXME: these strings should be highlighted
var program = {
  vs: ` // glsl
    attribute vec3 position;
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  ` ,
  fs: `//glsl
    void main() {
      gl_FragColor = vec4(1.0);
    }
  `,
};

// For this common case, we don't need the //glsl comment directive:
var material = new THREE.ShaderMaterial({
  vertexShader: `
    attribute vec3 position;
    void main() {
      vec3 offset = vec3(1.0, 1.0); // FIXME: vec3 should be highlighted
      gl_Position = vec4(position + offset, 1.0);
    }
  `,
  fragmentShader: `
    const float pi = 3.14;
    uniform float u_clock;
    void main() {
      float brightness = sin(pi * u_clock) * 0.5 + 0.5; // FIXME: float should be highlighted
      gl_FragColor = vec4(brightness, brightness, brightness, 1.0)
    }
  `,
});

function foo() {
  var x = 0;
  for (var i = 0; i < 10; i++) {
    x += i;
  }
  console.log(i);
}
