import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dropClassValue: "",
    dataForTheForm: {
      template: {
        component: "room-block",
        category: "Type Category Name",
        disabled: true,
        totalValue: 0,
        summary: [
          {
            "10-02-2018": 0
          },
          {
            "10-03-2018": 0
          },
          {
            "10-04-2018": 0
          },
          {
            "10-05-2018": 0
          }
        ],
        children: [
          {
            rooms: [
              {
                label: "Room Type",
                component: "select-element",
                options: [
                  { text: "Single" },
                  { text: "Double" },
                  { text: "Master" }
                ],
                fieldName: "RoomType"
              },
              {
                date: "10-02-2018"
              },
              {
                label: "Rate",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              },
              {
                label: "Qty",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              },
              {
                date: "10-03-2018"
              },
              {
                label: "Rate",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              },
              {
                label: "Qty",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              },
              {
                date: "10-04-2018"
              },
              {
                label: "Rate",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              },
              {
                label: "Qty",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              },
              {
                date: "10-05-2018"
              },
              {
                label: "Rate",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              },
              {
                label: "Qty",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "0"
              }
            ]
          }
        ]
      },
      components: [
        {
          component: "room-block",
          category: "Type Category Name",
          disabled: true,
          totalValue: 0,
          summary: [
            {
              "10-02-2018": 0
            },
            {
              "10-03-2018": 0
            },
            {
              "10-04-2018": 0
            },
            {
              "10-05-2018": 0
            }
          ],
          children: [
            {
              rooms: [
                {
                  label: "Room Type",
                  component: "select-element",
                  options: [
                    { text: "Single" },
                    { text: "Double" },
                    { text: "Master" }
                  ],
                  fieldName: "RoomType"
                },
                {
                  date: "10-02-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-03-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-04-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-05-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                }
              ]
            },
            {
              rooms: [
                {
                  label: "Room Type",
                  component: "select-element",
                  options: [
                    { text: "Single" },
                    { text: "Double" },
                    { text: "Master" }
                  ],
                  fieldName: "RoomType"
                },
                {
                  date: "10-02-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-03-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-04-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-05-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                }
              ]
            }
          ]
        },
        {
          component: "room-block",
          category: "Type Category Name",
          disabled: true,
          totalValue: 0,
          summary: [
            {
              "10-02-2018": 0
            },
            {
              "10-03-2018": 0
            },
            {
              "10-04-2018": 0
            },
            {
              "10-05-2018": 0
            }
          ],
          children: [
            {
              rooms: [
                {
                  label: "Room Type",
                  component: "select-element",
                  options: [
                    { text: "Single" },
                    { text: "Double" },
                    { text: "Master" }
                  ],
                  fieldName: "RoomType"
                },
                {
                  date: "10-02-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-03-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-04-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-05-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                }
              ]
            },
            {
              rooms: [
                {
                  label: "Room Type",
                  component: "select-element",
                  options: [
                    { text: "Single" },
                    { text: "Double" },
                    { text: "Master" }
                  ],
                  fieldName: "RoomType"
                },
                {
                  date: "10-02-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-03-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-04-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  date: "10-05-2018"
                },
                {
                  label: "Rate",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                },
                {
                  label: "Qty",
                  component: "input-element",
                  fieldType: "text",
                  fieldValue: "0",
                  fieldName: "0"
                }
              ]
            }
          ]
        }
      ]
    },
    dataForCreateProposal: {
      components: [
        [
          {
            component: "input-element",
            fieldValue: "Fedex Annual Sales Retreat"
          },
          {
            element: "select"
          },
          {}
        ]
      ]
    },
    menuData: [
      {
        title: "Welcome",
        to: "/cmseditor/welcome/",
        checked: true,
        disabled: true,
        subpages: [
          {
            title: "Your Proposal",
            to: "/cmseditor/welcome/",
            checked: true,
            disabled: true
          }
        ]
      },
      {
        title: "Second Page",
        to: "/cmseditor/secondPage/",
        checked: true,
        subpages: [
          {
            title: "SubPage 1",
            to: "/cmseditor/secondPage/",
            checked: true
          },
          {
            title: "SubPage 2",
            to: "/cmseditor/thirdPage/",
            checked: true
          }
        ]
      }
    ]
  },
  mutations: {
    outlineDropFieldsOnTheForm: function(state, value) {
      state.dropClassValue = value;
    },
    transformToNotEditable: function(state) {
      Array.prototype.forEach.call(state.dataForTheForm.components, function(
        item
      ) {
        item.disabled = true;
      });
    }
  }
});
