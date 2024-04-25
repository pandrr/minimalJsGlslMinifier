uniform float a;
uniform float b, c;

void main()
{
    {{MODULE_COLOR}}

vec4 a=vec4(1.0, 0.0, 0.,1.000000)

    #ifdef DISCARDTRANS
        if(col.a<0.2) discard; // hallo! was?
    #endif

    outColor = col;
    gl_FragColor = col;
}
