grammar ZS3Element;

element  : (scaledbasis|signedscaledbasis) (signedscaledbasis)*;
signedscaledbasis: SIGN scaledbasis ;
scaledbasis: multiplier? BASIS;
multiplier: INTEGER '*'? ;

SIGN: '+' | '-' ;
BASIS: 'e' | 't' | 'tt' | 's' | 'st' | 'stt' ;
INTEGER : [0-9]+ ;
WS : [ \t\r\n]+ -> skip ;
