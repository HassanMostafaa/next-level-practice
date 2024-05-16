export type TreeNode = {
  name: string;
  children?: TreeNode[];
};

export const tree: TreeNode[] = [
  {
    name: "A",
    children: [
      {
        name: "A1",
        children: [
          {
            name: "A1.1",
            children: [
              {
                name: "A1.1.1",
              },
              {
                name: "A1.1.2",
              },
            ],
          },
          {
            name: "A1.2",
            children: [
              {
                name: "A1.2.1",
              },
            ],
          },
        ],
      },
      {
        name: "A2",
        children: [
          {
            name: "A2.1",
          },
          {
            name: "A2.2",
            children: [
              {
                name: "A2.2.1",
              },
              {
                name: "A2.2.2",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "B",
    children: [
      {
        name: "B1",
        children: [
          {
            name: "B1.1",
            children: [
              {
                name: "B1.1.1",
              },
            ],
          },
        ],
      },
      {
        name: "B2",
        children: [
          {
            name: "B2.1",
          },
          {
            name: "B2.2",
            children: [
              {
                name: "B2.2.1",
              },
              {
                name: "B2.2.2",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "C",
    children: [
      {
        name: "C1",
        children: [
          {
            name: "C1.1",
            children: [
              {
                name: "C1.1.1",
              },
              {
                name: "C1.1.2",
              },
            ],
          },
          {
            name: "C1.2",
            children: [
              {
                name: "C1.2.1",
              },
            ],
          },
        ],
      },
    ],
  },
];
