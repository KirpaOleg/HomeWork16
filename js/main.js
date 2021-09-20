
let simpleNumBool;
for ( let i = 1; i < 10000; i++ ) {
	simpleNumBool = true;

	for ( let divi = 2; divi < i; divi++ ) {
		if ( i % divi == 0) {
			simpleNumBool = false;
		};
	};

	if ((i + 1) % 8 == 0) { 
			 console.log(i)
		  	} 
}