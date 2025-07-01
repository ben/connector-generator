import ts from 'typescript';
import fs from 'fs';
import path from 'path';
import esbuild from 'esbuild'

export async function compileToExpression(filePath: string): string {

	const result = await esbuild.build({
		bundle: true,
		format: "esm",
	})

	for (const err of result.errors) {
		console.log(err)
	}

	// Create a TypeScript program
	const program = ts.createProgram([filePath], {
		module: ts.ModuleKind.CommonJS,
		target: ts.ScriptTarget.ES5,
		noEmit: true
	});
	const emitResult = program.emit()
	console.log(emitResult)

	const allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics)
	console.error(allDiagnostics)

	return filePath
	// // Get the source file
	// const sourceFile = program.getSourceFile(filePath);
	// if (!sourceFile) {
	// 	throw new Error(`Source file not found: ${filePath}`);
	// }

	// Inline imports and transpile
	// const result = ts.transform(sourceFile, [
	//     context => rootNode => {
	//         function visit(node: ts.Node): ts.Node {
	//             if (ts.isImportDeclaration(node)) {
	//                 const importPath = (node.moduleSpecifier as ts.StringLiteral).text;
	//                 const resolvedPath = path.resolve(path.dirname(filePath), importPath + '.ts');
	//                 const importedCode = fs.readFileSync(resolvedPath, 'utf-8');
	//                 const importedSourceFile = ts.createSourceFile(
	//                     resolvedPath,
	//                     importedCode,
	//                     ts.ScriptTarget.ES5
	//                 );
	//                 return ts.visitEachChild(importedSourceFile, visit, context);
	//             }
	//             return ts.visitEachChild(node, visit, context);
	//         }
	//         return ts.visitNode(rootNode, visit);
	//     },
	// ]);

	// // Emit the JavaScript code
	// const printer = ts.createPrinter();
	// const transpiledCode = printer.printFile(result.transformed[0]);

	// // Clean up the transformation result
	// result.dispose();

	// return transpiledCode;
}
