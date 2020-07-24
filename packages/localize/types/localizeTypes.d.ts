export interface StringToStringMap {
  [key: string]: string;
}

export interface StringToObjectMap {
  [key: string]: Object;
}

export interface StringToStringArrayMap {
  [key: string]: string[];
}

export interface StringToFunctionMap {
  [key: string]: Function;
}

export interface FormatNumberPart {
  type: string;
  value: string;
}

export type ObjectOrVoid = Object | void;

export type FunctionOrNull = Function | null;

export type RegExpOrString = RegExp | string;

export type NamespaceObject = StringToFunctionMap | string;

export type ObjectPromise = Promise<Object>;

export type VoidPromise = Promise<void>;
