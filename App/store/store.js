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
        title: "Other Pages",
        checked: true,
        subpages: [
          {
            title: "Second Page",
            to: "/cmseditor/secondPage/",
            checked: true
          },
          {
            title: "Third Page",
            to: "/cmseditor/thirdPage/",
            checked: true
          },
          {
            title: "Fourth Page",
            to: "/cmseditor/fourthpage/",
            checked: true
          }
        ]
      }
    ],
    styleLink: 'https://ovkoyfman.github.io/netcore-vue/css/style.css'
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
    },
    transformToEditable: function(state, parentIndex) {
      state.dataForTheForm.components[parentIndex].disabled = false;
    },
    addCategory: function(state, component){
      state.dataForTheForm.components.push(component);
    },
    removeCategory: function(state, index){
      state.dataForTheForm.components.splice(index, 1);
    },
    addRow: function(state, [parentIndex, roomsObject]){
      state.dataForTheForm.components[parentIndex].children.push(roomsObject);
    },
     removeRow: function(state,[parentIndex, index]) {
      state.dataForTheForm.components[parentIndex].children.splice(index, 1);
     },
    dropElement: function(state, [incomingParent, incomingChild, destinationParent, destinationChild]){
      let rowToMove = JSON.parse(
        JSON.stringify(
          state.dataForTheForm.components[incomingParent].children[incomingChild]
        )
      );
      state.dataForTheForm.components[incomingParent].children.splice(incomingChild, 1);
      state.dataForTheForm.components[destinationParent].children.splice(
        destinationChild,
        0,
        rowToMove
      );
      if (!state.dataForTheForm.components[incomingParent].children.length) {
        state.dataForTheForm.components.splice(incomingParent, 1);
       }
    },
    saveForm: function(state, parentIndex){
      state.dataForTheForm.components[parentIndex].disabled = true;
    }
  }
});
