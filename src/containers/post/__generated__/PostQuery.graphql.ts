/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type OperatorKindEnum = "GTE" | "LIKE" | "LTE" | "NE" | "%future added value";
export type SortOrderEnum = "ASC" | "DESC" | "%future added value";
export type PageQueryOptions = {
    paginate?: PaginateOptions | null;
    slice?: SliceOptions | null;
    sort?: Array<SortOptions | null> | null;
    operators?: Array<OperatorOptions | null> | null;
    search?: SearchOptions | null;
};
export type PaginateOptions = {
    page?: number | null;
    limit?: number | null;
};
export type SliceOptions = {
    start?: number | null;
    end?: number | null;
    limit?: number | null;
};
export type SortOptions = {
    field?: string | null;
    order?: SortOrderEnum | null;
};
export type OperatorOptions = {
    kind?: OperatorKindEnum | null;
    field?: string | null;
    value?: string | null;
};
export type SearchOptions = {
    q?: string | null;
};
export type PostQueryVariables = {
    options?: PageQueryOptions | null;
};
export type PostQueryResponse = {
    readonly posts: {
        readonly data: ReadonlyArray<{
            readonly id: string | null;
            readonly title: string | null;
        } | null> | null;
        readonly meta: {
            readonly totalCount: number | null;
        } | null;
    } | null;
};
export type PostQuery = {
    readonly response: PostQueryResponse;
    readonly variables: PostQueryVariables;
};



/*
query PostQuery(
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title
    }
    meta {
      totalCount
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "options"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "options",
        "variableName": "options"
      }
    ],
    "concreteType": "PostsPage",
    "kind": "LinkedField",
    "name": "posts",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "data",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PageMetadata",
        "kind": "LinkedField",
        "name": "meta",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6c735eab19667a8f02ca906ef6eca73c",
    "id": null,
    "metadata": {},
    "name": "PostQuery",
    "operationKind": "query",
    "text": "query PostQuery(\n  $options: PageQueryOptions\n) {\n  posts(options: $options) {\n    data {\n      id\n      title\n    }\n    meta {\n      totalCount\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1367f6d39ad01e742ede3efb882ebb8b';
export default node;
