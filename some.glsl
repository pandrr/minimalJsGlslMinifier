uniform float a;
uniform float b, c;

void main()
{
    {{MODULE_COLOR}}

    #ifdef DISCARDTRANS
        if(col.a<0.2) discard; // hallo! was?
    #endif

    outColor = col;
    gl_FragColor = col;
}
