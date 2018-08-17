var antlr4 = require("antlr4");
var ZS3ElementLexer = require("./interpreter/ZS3ElementLexer").ZS3ElementLexer;
var ZS3ElementParser = require("./interpreter/ZS3ElementParser").ZS3ElementParser;
var ZS3ElementVisitor = require("./interpreter/ZS3ElementVisitor").ZS3ElementVisitor;

function ToCoeffVisitor() {
  ZS3ElementVisitor.call(this);
};

ToCoeffVisitor.prototype = Object.create(ZS3ElementVisitor.prototype);
ToCoeffVisitor.prototype.constructor = ToCoeffVisitor;

ToCoeffVisitor.prototype.visitElement = function(ctx) {
  var coeff = {};
  var children = this.visitChildren(ctx);
  children.forEach(function (child) {
    Object.keys(child).forEach(function (basis) {
      if (basis in coeff) {
        coeff[basis] += child[basis];
      } else {
        coeff[basis] = child[basis];
      }
    });
  });
  return coeff;
};

ToCoeffVisitor.prototype.visitSignedscaledbasis = function(ctx) {
  var sign = ctx.SIGN().getText();
  var coeff = this.visitScaledbasis(ctx.scaledbasis());
  if (sign === '-') {
    Object.keys(coeff).forEach(function (basis) {
      coeff[basis] *= -1;
    });
  }
  return coeff;
}

ToCoeffVisitor.prototype.visitScaledbasis = function(ctx) {
  var multCtx = ctx.multiplier();
  
  var basis = ctx.BASIS().getText();
  var mult = 1;
  if (multCtx) {
    mult = parseInt(multCtx.INTEGER().getText());
  }
  var coeff = {};
  coeff[basis] = mult;
  return coeff;
}


function CacheErrorListener() {
  antlr4.error.ErrorListener.call(this);
  this.cache = [];
  return this;
}

CacheErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
CacheErrorListener.prototype.constructor = CacheErrorListener;

CacheErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
  this.cache.push("column " + column + ": " + msg);
};

CacheErrorListener.prototype.getErrors = function() {
  return this.cache;
};

function coeffFrom(input) {
  var chars = new antlr4.InputStream(input);
  var lexer = new ZS3ElementLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new ZS3ElementParser(tokens);
  var listener = new CacheErrorListener();
  lexer.removeErrorListeners();
  lexer.addErrorListener(listener);
  parser.removeErrorListeners();
  parser.addErrorListener(listener);
  parser.buildParseTrees = true;
  var visitor = new ToCoeffVisitor();
  var tree = parser.element();
  var errors = listener.getErrors();
  if (errors.length > 0) {
    return {
      errors: errors
    };
  } else {
    return {
      coeff: visitor.visit(tree),
    }
  }
}

module.exports = coeffFrom;