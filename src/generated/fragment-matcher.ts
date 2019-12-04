/* eslint-disable */
/* tslint:disable */



      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "INTERFACE",
        "name": "Node",
        "possibleTypes": [
          {
            "name": "Area"
          },
          {
            "name": "Artist"
          },
          {
            "name": "Recording"
          },
          {
            "name": "Release"
          },
          {
            "name": "Disc"
          },
          {
            "name": "Label"
          },
          {
            "name": "Collection"
          },
          {
            "name": "Event"
          },
          {
            "name": "Instrument"
          },
          {
            "name": "Place"
          },
          {
            "name": "ReleaseGroup"
          },
          {
            "name": "Series"
          },
          {
            "name": "Work"
          },
          {
            "name": "URL"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Entity",
        "possibleTypes": [
          {
            "name": "Area"
          },
          {
            "name": "Artist"
          },
          {
            "name": "Recording"
          },
          {
            "name": "Release"
          },
          {
            "name": "Track"
          },
          {
            "name": "Label"
          },
          {
            "name": "Collection"
          },
          {
            "name": "Event"
          },
          {
            "name": "Instrument"
          },
          {
            "name": "Place"
          },
          {
            "name": "ReleaseGroup"
          },
          {
            "name": "Series"
          },
          {
            "name": "Work"
          },
          {
            "name": "URL"
          }
        ]
      }
    ]
  }
};
      export default result;
    