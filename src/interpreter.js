var antlr4 = require("antlr4");
var ZS3ElementLexer = require("./interpreter/ZS3ElementLexer").ZS3ElementLexer;
var ZS3ElementParser = require("./interpreter/ZS3ElementParser").ZS3ElementParser;
var ZS3ElementVisitor = require("./interpreter/ZS3ElementVisitor").ZS3ElementVisitor;

class ToCoeffVisitor extends ZS3ElementVisitor {
  visitElement(ctx) {
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
  }

  visitSignedscaledbasis(ctx) {
    var sign = ctx.SIGN().getText();
    var coeff = this.visitScaledbasis(ctx.scaledbasis());
    if (sign === '-') {
      Object.keys(coeff).forEach(function (basis) {
        coeff[basis] *= -1;
      });
    }
    return coeff;
  }

  visitScaledbasis(ctx) {
    var mult = ctx.multiplier();
    var basis = ctx.BASIS().getText();
    var factor = 1;
    if (mult) {
      factor = parseInt(mult.INTEGER().getText());
    }
    var coeff = {};
    coeff[basis] = factor;
    return coeff;
  }
}

function coeffFrom(input) {
  var chars = new antlr4.InputStream(input);
  var lexer = new ZS3ElementLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new ZS3ElementParser(tokens);
  var visitor = new ToCoeffVisitor();
  parser.buildParseTrees = true;
  var tree = parser.element();
  return visitor.visit(tree);
}

module.exports = coeffFrom;