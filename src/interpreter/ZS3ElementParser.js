// Generated from src/interpreter/ZS3Element.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ZS3ElementVisitor = require('./ZS3ElementVisitor').ZS3ElementVisitor;

var grammarFileName = "ZS3Element.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0007!\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0005\u0002\r\n\u0002",
    "\u0003\u0002\u0007\u0002\u0010\n\u0002\f\u0002\u000e\u0002\u0013\u000b",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0005\u0004\u0019",
    "\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0005\u0005",
    "\u001f\n\u0005\u0003\u0005\u0002\u0002\u0006\u0002\u0004\u0006\b\u0002",
    "\u0002\u0002 \u0002\f\u0003\u0002\u0002\u0002\u0004\u0014\u0003\u0002",
    "\u0002\u0002\u0006\u0018\u0003\u0002\u0002\u0002\b\u001c\u0003\u0002",
    "\u0002\u0002\n\r\u0005\u0006\u0004\u0002\u000b\r\u0005\u0004\u0003\u0002",
    "\f\n\u0003\u0002\u0002\u0002\f\u000b\u0003\u0002\u0002\u0002\r\u0011",
    "\u0003\u0002\u0002\u0002\u000e\u0010\u0005\u0004\u0003\u0002\u000f\u000e",
    "\u0003\u0002\u0002\u0002\u0010\u0013\u0003\u0002\u0002\u0002\u0011\u000f",
    "\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0003",
    "\u0003\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0014\u0015",
    "\u0007\u0004\u0002\u0002\u0015\u0016\u0005\u0006\u0004\u0002\u0016\u0005",
    "\u0003\u0002\u0002\u0002\u0017\u0019\u0005\b\u0005\u0002\u0018\u0017",
    "\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u001a",
    "\u0003\u0002\u0002\u0002\u001a\u001b\u0007\u0005\u0002\u0002\u001b\u0007",
    "\u0003\u0002\u0002\u0002\u001c\u001e\u0007\u0006\u0002\u0002\u001d\u001f",
    "\u0007\u0003\u0002\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001e\u001f",
    "\u0003\u0002\u0002\u0002\u001f\t\u0003\u0002\u0002\u0002\u0006\f\u0011",
    "\u0018\u001e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'*'" ];

var symbolicNames = [ null, null, "SIGN", "BASIS", "INTEGER", "WS" ];

var ruleNames =  [ "element", "signedscaledbasis", "scaledbasis", "multiplier" ];

function ZS3ElementParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ZS3ElementParser.prototype = Object.create(antlr4.Parser.prototype);
ZS3ElementParser.prototype.constructor = ZS3ElementParser;

Object.defineProperty(ZS3ElementParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ZS3ElementParser.EOF = antlr4.Token.EOF;
ZS3ElementParser.T__0 = 1;
ZS3ElementParser.SIGN = 2;
ZS3ElementParser.BASIS = 3;
ZS3ElementParser.INTEGER = 4;
ZS3ElementParser.WS = 5;

ZS3ElementParser.RULE_element = 0;
ZS3ElementParser.RULE_signedscaledbasis = 1;
ZS3ElementParser.RULE_scaledbasis = 2;
ZS3ElementParser.RULE_multiplier = 3;

function ElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZS3ElementParser.RULE_element;
    return this;
}

ElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementContext.prototype.constructor = ElementContext;

ElementContext.prototype.scaledbasis = function() {
    return this.getTypedRuleContext(ScaledbasisContext,0);
};

ElementContext.prototype.signedscaledbasis = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SignedscaledbasisContext);
    } else {
        return this.getTypedRuleContext(SignedscaledbasisContext,i);
    }
};

ElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ZS3ElementVisitor ) {
        return visitor.visitElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ZS3ElementParser.ElementContext = ElementContext;

ZS3ElementParser.prototype.element = function() {

    var localctx = new ElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ZS3ElementParser.RULE_element);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ZS3ElementParser.BASIS:
        case ZS3ElementParser.INTEGER:
            this.state = 8;
            this.scaledbasis();
            break;
        case ZS3ElementParser.SIGN:
            this.state = 9;
            this.signedscaledbasis();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 15;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ZS3ElementParser.SIGN) {
            this.state = 12;
            this.signedscaledbasis();
            this.state = 17;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SignedscaledbasisContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZS3ElementParser.RULE_signedscaledbasis;
    return this;
}

SignedscaledbasisContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SignedscaledbasisContext.prototype.constructor = SignedscaledbasisContext;

SignedscaledbasisContext.prototype.SIGN = function() {
    return this.getToken(ZS3ElementParser.SIGN, 0);
};

SignedscaledbasisContext.prototype.scaledbasis = function() {
    return this.getTypedRuleContext(ScaledbasisContext,0);
};

SignedscaledbasisContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ZS3ElementVisitor ) {
        return visitor.visitSignedscaledbasis(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ZS3ElementParser.SignedscaledbasisContext = SignedscaledbasisContext;

ZS3ElementParser.prototype.signedscaledbasis = function() {

    var localctx = new SignedscaledbasisContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ZS3ElementParser.RULE_signedscaledbasis);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.match(ZS3ElementParser.SIGN);
        this.state = 19;
        this.scaledbasis();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ScaledbasisContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZS3ElementParser.RULE_scaledbasis;
    return this;
}

ScaledbasisContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScaledbasisContext.prototype.constructor = ScaledbasisContext;

ScaledbasisContext.prototype.BASIS = function() {
    return this.getToken(ZS3ElementParser.BASIS, 0);
};

ScaledbasisContext.prototype.multiplier = function() {
    return this.getTypedRuleContext(MultiplierContext,0);
};

ScaledbasisContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ZS3ElementVisitor ) {
        return visitor.visitScaledbasis(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ZS3ElementParser.ScaledbasisContext = ScaledbasisContext;

ZS3ElementParser.prototype.scaledbasis = function() {

    var localctx = new ScaledbasisContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ZS3ElementParser.RULE_scaledbasis);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ZS3ElementParser.INTEGER) {
            this.state = 21;
            this.multiplier();
        }

        this.state = 24;
        this.match(ZS3ElementParser.BASIS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MultiplierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZS3ElementParser.RULE_multiplier;
    return this;
}

MultiplierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplierContext.prototype.constructor = MultiplierContext;

MultiplierContext.prototype.INTEGER = function() {
    return this.getToken(ZS3ElementParser.INTEGER, 0);
};

MultiplierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ZS3ElementVisitor ) {
        return visitor.visitMultiplier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ZS3ElementParser.MultiplierContext = MultiplierContext;

ZS3ElementParser.prototype.multiplier = function() {

    var localctx = new MultiplierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ZS3ElementParser.RULE_multiplier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.match(ZS3ElementParser.INTEGER);
        this.state = 28;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ZS3ElementParser.T__0) {
            this.state = 27;
            this.match(ZS3ElementParser.T__0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ZS3ElementParser = ZS3ElementParser;
