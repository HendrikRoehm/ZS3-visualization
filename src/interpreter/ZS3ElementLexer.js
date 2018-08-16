// Generated from src/interpreter/ZS3Element.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0007(\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004\u001b\n\u0004\u0003\u0005\u0006\u0005\u001e\n\u0005\r\u0005\u000e",
    "\u0005\u001f\u0003\u0006\u0006\u0006#\n\u0006\r\u0006\u000e\u0006$\u0003",
    "\u0006\u0003\u0006\u0002\u0002\u0007\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\u0003\u0002\u0006\u0004\u0002--//\u0004\u0002g",
    "gvv\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002-\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0003\r\u0003\u0002\u0002\u0002\u0005\u000f",
    "\u0003\u0002\u0002\u0002\u0007\u001a\u0003\u0002\u0002\u0002\t\u001d",
    "\u0003\u0002\u0002\u0002\u000b\"\u0003\u0002\u0002\u0002\r\u000e\u0007",
    ",\u0002\u0002\u000e\u0004\u0003\u0002\u0002\u0002\u000f\u0010\t\u0002",
    "\u0002\u0002\u0010\u0006\u0003\u0002\u0002\u0002\u0011\u001b\t\u0003",
    "\u0002\u0002\u0012\u0013\u0007v\u0002\u0002\u0013\u001b\u0007v\u0002",
    "\u0002\u0014\u001b\u0007u\u0002\u0002\u0015\u0016\u0007u\u0002\u0002",
    "\u0016\u001b\u0007v\u0002\u0002\u0017\u0018\u0007u\u0002\u0002\u0018",
    "\u0019\u0007v\u0002\u0002\u0019\u001b\u0007v\u0002\u0002\u001a\u0011",
    "\u0003\u0002\u0002\u0002\u001a\u0012\u0003\u0002\u0002\u0002\u001a\u0014",
    "\u0003\u0002\u0002\u0002\u001a\u0015\u0003\u0002\u0002\u0002\u001a\u0017",
    "\u0003\u0002\u0002\u0002\u001b\b\u0003\u0002\u0002\u0002\u001c\u001e",
    "\t\u0004\u0002\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e\u001f",
    "\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f ",
    "\u0003\u0002\u0002\u0002 \n\u0003\u0002\u0002\u0002!#\t\u0005\u0002",
    "\u0002\"!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$\"\u0003",
    "\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002",
    "&\'\b\u0006\u0002\u0002\'\f\u0003\u0002\u0002\u0002\u0006\u0002\u001a",
    "\u001f$\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ZS3ElementLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ZS3ElementLexer.prototype = Object.create(antlr4.Lexer.prototype);
ZS3ElementLexer.prototype.constructor = ZS3ElementLexer;

Object.defineProperty(ZS3ElementLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

ZS3ElementLexer.EOF = antlr4.Token.EOF;
ZS3ElementLexer.T__0 = 1;
ZS3ElementLexer.SIGN = 2;
ZS3ElementLexer.BASIS = 3;
ZS3ElementLexer.INTEGER = 4;
ZS3ElementLexer.WS = 5;

ZS3ElementLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ZS3ElementLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ZS3ElementLexer.prototype.literalNames = [ null, "'*'" ];

ZS3ElementLexer.prototype.symbolicNames = [ null, null, "SIGN", "BASIS", 
                                            "INTEGER", "WS" ];

ZS3ElementLexer.prototype.ruleNames = [ "T__0", "SIGN", "BASIS", "INTEGER", 
                                        "WS" ];

ZS3ElementLexer.prototype.grammarFileName = "ZS3Element.g4";



exports.ZS3ElementLexer = ZS3ElementLexer;

