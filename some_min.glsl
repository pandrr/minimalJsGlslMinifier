{{MODULES_HEAD}}
{{MODULE_COLOR}}
#ifdef DISCARDTRANS
if(col.a<0.2)discard;
#endif
outColor =col;
gl_FragColor=col;
}
