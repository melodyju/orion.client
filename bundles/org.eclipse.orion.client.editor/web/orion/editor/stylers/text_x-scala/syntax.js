/*******************************************************************************
 * @license
 * Copyright (c) 2014 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: IBM Corporation - initial API and implementation
 ******************************************************************************/

/*global define*/

define("orion/editor/stylers/text_x-scala/syntax", ["orion/editor/stylers/lib/syntax"], function(mLib) { //$NON-NLS-1$ //$NON-NLS-0$
	var keywords = [
		"abstract", //$NON-NLS-0$
		"case", "catch", "class", //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"def", "do", //$NON-NLS-1$ //$NON-NLS-0$
		"else", "extends", //$NON-NLS-1$ //$NON-NLS-0$
		"false", "final", "finally", "for", "forSome", //$NON-NLS-4$ //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"if", "implicit", "import", //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"lazy", //$NON-NLS-0$
		"match", //$NON-NLS-0$
		"new", "null", //$NON-NLS-1$ //$NON-NLS-0$
		"object", "override", //$NON-NLS-1$ //$NON-NLS-0$
		"package", "private", "protected", //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"return", //$NON-NLS-0$
		"sealed", "super", //$NON-NLS-1$ //$NON-NLS-0$
		"this", "throw", "trait", "type", "true", "try", //$NON-NLS-5$ //$NON-NLS-4$ //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"val", "var", //$NON-NLS-1$ //$NON-NLS-0$
		"while", "with", //$NON-NLS-1$ //$NON-NLS-0$
		"yield", //$NON-NLS-0$
		"-", ":", "=", "=>", "<-", //$NON-NLS-4$ //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
		"<:", "<%", ">:", "#", "@" //$NON-NLS-4$ //$NON-NLS-3$ //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
	];

	var grammars = mLib.grammars;
	grammars.push({
		id: "orion.scala", //$NON-NLS-0$
		contentTypes: ["text/x-scala"], //$NON-NLS-0$
		patterns: [
			{include: "orion.lib#string_doubleQuote"}, //$NON-NLS-0$
			{include: "orion.lib#string_singleQuote"}, //$NON-NLS-0$
			{include: "orion.c-like#comment_singleLine"}, //$NON-NLS-0$
			{include: "orion.lib#doc_block"}, //$NON-NLS-0$
			{include: "orion.c-like#comment_block"}, //$NON-NLS-0$
			{include: "orion.lib#brace_open"}, //$NON-NLS-0$
			{include: "orion.lib#brace_close"}, //$NON-NLS-0$
			{include: "orion.lib#bracket_open"}, //$NON-NLS-0$
			{include: "orion.lib#bracket_close"}, //$NON-NLS-0$
			{include: "orion.lib#parenthesis_open"}, //$NON-NLS-0$
			{include: "orion.lib#parenthesis_close"}, //$NON-NLS-0$
			{include: "orion.lib#number_decimal"}, //$NON-NLS-0$
			{include: "orion.lib#number_hex"}, //$NON-NLS-0$
			{
				match: "\\b(?:" + keywords.join("|") + ")\\b", //$NON-NLS-2$ //$NON-NLS-1$ //$NON-NLS-0$
				name: "keyword.control.scala" //$NON-NLS-0$
			}
		]
	});
	return {
		id: grammars[grammars.length - 1].id,
		grammars: grammars,
		keywords: keywords
	};
});
