const tokenString = require('glsl-tokenizer/string')
const fs = require('fs')



const tokens = tokenString(fs.readFileSync('some.glsl'))

console.log(tokens);

let str="";
for(let i=0;i<tokens.length-1;i++)
{
	const token=tokens[i];

	if(i>0)
	{
		if(token.type=="line-comment") continue;

		if(token.type=="whitespace")
		{
			token.data=token.data.replaceAll("\n\n","\n");
			token.data=token.data.replaceAll("\n\n","\n");
			token.data=token.data.replaceAll("\t"," ");
		 	token.data=token.data.replaceAll("  ","");
		 	token.data=token.data.replaceAll("\n\n","\n");
		}

		if(token.type=="float")
			while(token.data.indexOf(".")>0 && token.data.endsWith("0"))
				token.data=token.data.substring(0, token.data.length-1)

		if(token.type=="whitespace" && token.data==" " )
		{
			if(tokens[i-1].type=="ident" && tokens[i+1].type=="ident") continue;
			if(tokens[i-1].type=="operator" && tokens[i+1].type=="ident") continue;
			if(tokens[i-1].type=="operator" && tokens[i+1].type=="float") continue;
			if(tokens[i-1].type=="operator" && tokens[i+1].type=="keyword") continue;
			if(tokens[i-1].type=="operator" && tokens[i+1].type=="operator") continue;
			if(tokens[i+1].type!="ident" && tokens[i+1].type!="keyword" && tokens[i-1].type!="ident" && tokens[i-1].type!="keyword" ) continue;
		} 
	}

	str+=token.data;
}


console.log("str",str)

fs.writeFileSync("some_min.glsl",str);