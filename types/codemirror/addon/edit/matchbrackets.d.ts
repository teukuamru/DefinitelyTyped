// Type definitions for codemirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: Sixin Li <https://github.com/sixinli>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_matchbrackets

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface MatchBrackets {
        /**
         * Only use the character after the start position, never the one before it.
         */
        afterCursor?: boolean;

        /**
         * Causes only matches where both brackets are at the same side of the start position to be considered.
         */
        strict?: boolean;

        /**
         * Stop after scanning this amount of lines without a successful match. Defaults to 1000.
         */
        maxScanLines?: number;

        /**
         * Ignore lines longer than this. Defaults to 10000.
         */
        maxScanLineLength?: number;

        /**
         * Don't highlight a bracket in a line longer than this. Defaults to 1000.
         */
        maxHighlightLineLength?: number;
    }

    interface EditorConfiguration {
        //  When set to true or an options object, causes matching brackets to be highlighted whenever the cursor is next to them.
        matchBrackets?: MatchBrackets | boolean;
    }
}
