// Generated from src/interpreter/ZS3Element.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ZS3ElementParser.

function ZS3ElementVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ZS3ElementVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ZS3ElementVisitor.prototype.constructor = ZS3ElementVisitor;

// Visit a parse tree produced by ZS3ElementParser#element.
ZS3ElementVisitor.prototype.visitElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ZS3ElementParser#signedscaledbasis.
ZS3ElementVisitor.prototype.visitSignedscaledbasis = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ZS3ElementParser#scaledbasis.
ZS3ElementVisitor.prototype.visitScaledbasis = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ZS3ElementParser#multiplier.
ZS3ElementVisitor.prototype.visitMultiplier = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ZS3ElementVisitor = ZS3ElementVisitor;