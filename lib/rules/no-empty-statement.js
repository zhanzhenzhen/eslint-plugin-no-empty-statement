/**
 * @fileoverview Rule to flag use of empty statement as the body of `if`, `for`, etc.
 * @author Zhenzhen Zhan
 */

"use strict";

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow empty statement as the body of `if`, `for`, etc.",
            category: "Possible Errors",
            recommended: true,
            url: "https://www.npmjs.com/package/eslint-plugin-no-empty-statement"
        },

        schema: [
            {
                enum: [
                    "ignore-statement-list-item",
                    "all"
                ]
            }
        ],

        messages: {
            unexpected: "Confusing semicolon."
        }
    },

    create(context) {
        function report(nodeOrToken) {
            context.report({
                node: nodeOrToken,
                messageId: "unexpected"
            });
        }

        const all = context.options[0] === "all";

        return {
            EmptyStatement(node) {
                const parent = node.parent;

                if (all) {
                    report(node);
                } else {
                    if (
                        typeof parent.consequent === "object" &&
                        !Array.isArray(parent.consequent)
                    ) {
                        report(node);
                    }
                }
            }
        };
    }
};
