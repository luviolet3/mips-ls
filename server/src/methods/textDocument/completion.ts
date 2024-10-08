import * as fs from "fs"

import { RequestMessage } from "../../server";
import { documents, TextDocumentIdentifier } from "../../documents";
import words from "./completion.json"
import log from "../../log";


type CompletionItem = {
    label: string;
}

interface CompletionList {
	isIncomplete: boolean;
	items: CompletionItem[];
}

interface Position {
    line: number;
    character: number;
}

interface TextDocumentPositionParams {
    textDocument: TextDocumentIdentifier;
    position: Position;
}

interface CompletionParams extends TextDocumentPositionParams {

}

export const completion = (messgae: RequestMessage): CompletionList | null => {
    const params = messgae.params as CompletionParams;
    const content = documents.get(params.textDocument.uri);

    if (!content) return null;

    const currentLine = content.split("\n")[params.position.line]
    const lineUntilCursor = currentLine.slice(0, params.position.character);
    const currentPrefix = lineUntilCursor.replace(/.*\W(.*?)/, "$1");

    log.write({
        completion: {
            currentLine,
            lineUntilCursor,
            currentWord: currentPrefix,
        },
    })

    const items = words.filter((word) => {
        return word.label.startsWith(currentPrefix);
    })

    return {
        isIncomplete: false,
        items,
    }
}