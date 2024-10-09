import log from "../../log";

import { RequestMessage } from "../../server";
import { documents, TextDocumentIdentifier } from "../../documents";
import { instructions } from "./instructions";
import { Position } from "../../types";

interface CompletionItemLabelDetails {
  detail?: string;
  description?: string;
}

namespace CompletionItemKind {
  export const Text = 1;
  export const Method = 2;
  export const Function = 3;
  export const Constructor = 4;
  export const Field = 5;
  export const Variable = 6;
  export const Class = 7;
  export const Interface = 8;
  export const Module = 9;
  export const Property = 10;
  export const Unit = 11;
  export const Value = 12;
  export const Enum = 13;
  export const Keyword = 14;
  export const Snippet = 15;
  export const Color = 16;
  export const File = 17;
  export const Reference = 18;
  export const Folder = 19;
  export const EnumMember = 20;
  export const Constant = 21;
  export const Struct = 22;
  export const Event = 23;
  export const Operator = 24;
  export const TypeParameter = 25;
}
type CompletionItemKind = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25;

namespace MarkupKind {
  export const PlainText: 'plaintext' = 'plaintext';
  export const Markdown: 'markdown' = 'markdown';
}
type MarkupKind = 'plaintext' | 'markdown';

interface MarkupContent {
  kind: MarkupKind;
  value: string;
}

export type CompletionItem = {
  label: string;
  labelDetails?: CompletionItemLabelDetails;
  kind?: CompletionItemKind;
  detail?: string;
  documentation?: string | MarkupContent;
}

interface CompletionList {
  isIncomplete: boolean;
  items: CompletionItem[];
}

interface TextDocumentPositionParams {
    textDocument: TextDocumentIdentifier;
    position: Position;
}

interface CompletionParams extends TextDocumentPositionParams {}

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

    return {
        isIncomplete: false,
        items: instructions.filter((instruction) => {
          return instruction.label.startsWith(currentPrefix);
      }),
    }
}