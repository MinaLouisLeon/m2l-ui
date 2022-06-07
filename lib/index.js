'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('@emotion/styled');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;
/////////////////////////////////////////////////////
// table props
// operations (true | false) => default : false
// enableDeleteRow (true | false) => default : false (if true will enable operations automatically)
// enableEdit (true | false) => default : true (if operations is true)
// enableAddRow (true | false) => default : true (if operations is true)
// enableInsertRow (true | false) => defaut : false (if true will enable operations automatically)
// columns (array of objects)
// dataSource (array of objects)
// onDataChange (function retun new data)
//      usage : onDataChange={(value) => console.log(value)}
//operationss (Object)
////////////////////////////////////////////////////
// const operations = true;
// const columns = [
//   {
//     name: "Item Name",
//     dataIndex: "name",
//   },
//   {
//     name: "Quantity",
//     dataIndex: "quantity",
//   },
//   {
//     name: "Cost",
//     dataIndex: "cost",
//   },
//   {
//     name: "Sale",
//     dataIndex: "sale",
//   },
// ];
// const dataSource = [
//   {
//     name: "item 1",
//     quantity: 10,
//     cost: 10,
//     sale: 15,
//   },
//   {
//     name: "item 2",
//     quantity: 10,
//     cost: 20,
//     sale: 30,
//   },
// ];
////////////////////////////////////////////////////////////////////////
//add row container styling

var AddRowContainer = styled__default["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding: 5px;\n"]))); // add row button styling

var AddRowButton = styled__default["default"].button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: #3880ff8f;\n  padding: 7px;\n  border-radius: 4px;\n"]))); //table styling

var Table = styled__default["default"].table(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border: solid;\n  border-width: thin;\n  width: 100%;\n  height: 100%;\n"]))); // header cells styling

var HeaderCell = styled__default["default"].th(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border: solid;\n  border-width: thin;\n"]))); //content cell styling

var ContentCell = styled__default["default"].td(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  border: solid;\n  border-width: thin;\n  text-align: center;\n"])));
var ContentEditableCell = styled__default["default"].input(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background-color: #f0f8ff;\n  border: none;\n  width: 100%;\n  height: 100%;\n"]))); // operations save button styling

var SubmitForm = styled__default["default"].button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  color: #3880ff;\n"])));
var SubmitFormIcon = styled__default["default"].svg(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  color: green;\n  width: 20px;\n  margin-top: 3px;\n  margin-right: 3px;\n  cursor: pointer;\n"]))); // operations cancel button styling

var CancelForm = styled__default["default"].button(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  color: #3880ff;\n"])));
var CancelFormIcon = styled__default["default"].svg(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-top: 3px;\n  width: 20px;\n  color: red;\n  cursor: pointer;\n"]))); //operations edit button styling

var EditForm = styled__default["default"].button(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  color: ", ";\n  cursor: ", ";\n"])), function (props) {
  return !props.enable ? "#3880ff" : "#bfbfbf";
}, function (props) {
  return !props.enable ? "pointer" : "default";
});
var EditFormIcon = styled__default["default"].svg(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 20px;\n  color: ", ";\n  cursor: ", ";\n  margin-right: 3px;\n  margin-top: 3px;\n"])), function (props) {
  return !props.enable ? "blue" : "#bfbfbf";
}, function (props) {
  return !props.enable ? "pointer" : "default";
}); //opertaions delete button styling

var DeleteButton = styled__default["default"].button(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  color: ", ";\n  cursor: ", ";\n"])), function (props) {
  return !props.enable ? "red" : "#bfbfbf";
}, function (props) {
  return !props.enable ? "pointer" : "default";
});
var DeleteIcon = styled__default["default"].svg(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 20px;\n  color: ", ";\n  cursor: ", ";\n  margin-right: 3px;\n  margin-top: 3px;\n"])), function (props) {
  return !props.enable ? "red" : "#bfbfbf";
}, function (props) {
  return !props.enable ? "pointer" : "default";
}); // operations insert row button styling

var InsertRowButton = styled__default["default"].button(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  color: ", ";\n  cursor: ", ";\n"])), function (props) {
  return !props.enable ? "#00a900" : "#bfbfbf";
}, function (props) {
  return !props.enable ? "pointer" : "default";
});
var InsertRowIcon = styled__default["default"].svg(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 20px;\n  color: ", ";\n  cursor: ", ";\n  margin-right: 3px;\n  margin-top: 3px;\n"])), function (props) {
  return !props.enable ? "green" : "#bfbfbf";
}, function (props) {
  return !props.enable ? "pointer" : "default";
}); // map the coulmns to create object to be used for the form input state

var inputStateObj = {};

var TableComp = function TableComp(_ref) {
  var operations = _ref.operations,
      columns = _ref.columns,
      dataSource = _ref.dataSource,
      onDataChange = _ref.onDataChange,
      enableDeleteRow = _ref.enableDeleteRow,
      enableInsertRow = _ref.enableInsertRow,
      enableAddRow = _ref.enableAddRow,
      enableEditRow = _ref.enableEditRow,
      enableIcons = _ref.enableIcons;

  if (operations) {
    enableDeleteRow = true;
    enableInsertRow = true;
    enableAddRow = true;
    enableEditRow = true;
  }

  if (enableAddRow) {
    enableEditRow = true;
    enableDeleteRow = true;
  }

  if (enableDeleteRow || enableInsertRow || enableAddRow || enableEditRow) {
    operations = true;
  } //map function to init inputStateObj for creating the input state to accept form values


  columns.map(function (item) {
    inputStateObj = _objectSpread2(_objectSpread2({}, inputStateObj), {}, _defineProperty({}, item.dataIndex, ""));
  }); //state for enable editding per row

  var _useState = React.useState({
    isEditEnabled: false,
    rowIndex: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      enableEditState = _useState2[0],
      setEnableEditState = _useState2[1]; //counter to refresh the table


  var _useState3 = React.useState(dataSource.length),
      _useState4 = _slicedToArray(_useState3, 2),
      rowCounter = _useState4[0],
      setRowCounter = _useState4[1]; //form input state


  var _useState5 = React.useState(inputStateObj),
      _useState6 = _slicedToArray(_useState5, 2),
      inputState = _useState6[0],
      setInputState = _useState6[1];

  var _useState7 = React.useState(dataSource),
      _useState8 = _slicedToArray(_useState7, 2),
      dataSourceState = _useState8[0],
      setDataSourceState = _useState8[1]; //function to handle the table content


  var handleTableContent = function handleTableContent() {
    //map the data to access each object in the array
    return dataSourceState.map(function (dataItem, index) {
      //check if this row is editable or not to render form input
      if (enableEditState.isEditEnabled && enableEditState.rowIndex === index) {
        return /*#__PURE__*/React__default["default"].createElement("tr", null, columns.map(function (colItem) {
          //pass data object and current columns data with editable true
          return handleRowContent(dataItem, colItem, true);
        }), /*#__PURE__*/React__default["default"].createElement(ContentCell, null, enableIcons ? /*#__PURE__*/React__default["default"].createElement(SubmitFormIcon, {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: "{2}",
          onClick: handleSubmit
        }, /*#__PURE__*/React__default["default"].createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
        })) : /*#__PURE__*/React__default["default"].createElement(SubmitForm, {
          type: "submit"
        }, "Save"), /*#__PURE__*/React__default["default"].createElement("span", null, " "), enableIcons ? /*#__PURE__*/React__default["default"].createElement(CancelFormIcon, {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: "{2}",
          onClick: function onClick() {
            return handleCancel();
          }
        }, /*#__PURE__*/React__default["default"].createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        })) : /*#__PURE__*/React__default["default"].createElement(CancelForm, {
          type: "button",
          onClick: function onClick() {
            return handleCancel();
          }
        }, "Cancel")));
      } else {
        // render normal table cell
        return /*#__PURE__*/React__default["default"].createElement("tr", {
          id: "colNum" + index
        }, columns.map(function (colItem) {
          ////pass data object and current columns data with editable false
          return handleRowContent(dataItem, colItem, false);
        }), operations ? /*#__PURE__*/React__default["default"].createElement(ContentCell, null, enableEditRow && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, enableIcons ? /*#__PURE__*/React__default["default"].createElement(EditFormIcon, {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: "{2}",
          enable: enableEditState.isEditEnabled,
          onClick: function onClick() //check if any other row is in edit state then disable all other edit buttons
          {
            !enableEditState.isEditEnabled ? handleEdit(index) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
          }
        }, /*#__PURE__*/React__default["default"].createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        })) : /*#__PURE__*/React__default["default"].createElement(EditForm, {
          type: "button",
          enable: enableEditState.isEditEnabled,
          onClick: function onClick() //check if any other row is in edit state then disable all other edit buttons
          {
            !enableEditState.isEditEnabled ? handleEdit(index) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
          }
        }, "Edit")), enableInsertRow && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, enableIcons ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(InsertRowIcon, {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: "{2}",
          enable: enableEditState.isEditEnabled,
          onClick: function onClick() {
            !enableEditState.isEditEnabled ? handleInsertRow(index, "after") : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
          }
        }, /*#__PURE__*/React__default["default"].createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
        })), /*#__PURE__*/React__default["default"].createElement(InsertRowIcon, {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: "{2}",
          enable: enableEditState.isEditEnabled,
          onClick: function onClick() {
            !enableEditState.isEditEnabled ? handleInsertRow(index, "before") : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
          }
        }, /*#__PURE__*/React__default["default"].createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
        }))) : /*#__PURE__*/React__default["default"].createElement(InsertRowButton, {
          type: "button",
          enable: enableEditState.isEditEnabled,
          onClick: function onClick() {
            !enableEditState.isEditEnabled ? handleInsertRow(index, "after") : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
          }
        }, "Insert Row")), enableDeleteRow && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, enableIcons ? /*#__PURE__*/React__default["default"].createElement(DeleteIcon, {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          strokeWidth: "{2}",
          enable: enableEditState.isEditEnabled,
          onClick: function onClick() {
            !enableEditState.isEditEnabled ? handleDelete(index) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
          }
        }, /*#__PURE__*/React__default["default"].createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        })) : /*#__PURE__*/React__default["default"].createElement(DeleteButton, {
          type: "button",
          enable: enableEditState.isEditEnabled,
          onClick: function onClick() {
            !enableEditState.isEditEnabled ? handleDelete(index) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null);
          }
        }, "Delete"))) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null));
      }
    });
  }; //function to handle row content


  var handleRowContent = function handleRowContent(dataItem, colItem, enableEditValue) {
    //check if this row is editable
    if (enableEditValue) {
      //render form input
      return /*#__PURE__*/React__default["default"].createElement(ContentCell, null, Object.keys(dataItem).map(function (dataKey) {
        return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, dataKey === colItem.dataIndex ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ContentEditableCell, {
          value: inputState[dataKey],
          onChange: function onChange(e) {
            return setInputState(_objectSpread2(_objectSpread2({}, inputState), {}, _defineProperty({}, dataKey, e.target.value)));
          }
        })) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null));
      }));
    } else {
      //render normal table cells
      return /*#__PURE__*/React__default["default"].createElement(ContentCell, null, Object.keys(dataItem).map(function (dataKey) {
        return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, dataKey === colItem.dataIndex ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, dataItem[dataKey]) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null));
      }));
    }
  };

  var handleEdit = function handleEdit(rowIndex) {
    setInputState(dataSourceState[rowIndex]);
    setEnableEditState({
      isEditEnabled: true,
      rowIndex: rowIndex
    });
  }; //function to handle submit


  var handleSubmit = function handleSubmit(e) {
    //prevent default submit action
    e.preventDefault(); //generate new data array

    if (window.confirm("Confirm Save Edited Fields ?")) {
      var dataSourceArr = dataSourceState;
      dataSourceArr[enableEditState.rowIndex] = inputState;
      setDataSourceState(dataSourceArr); // TODO manage new data generated

      onDataChange(dataSourceState); //clear input state and enable state

      setInputState(inputStateObj);
      setEnableEditState({
        isEditEnabled: false,
        rowIndex: null
      });
    }
  }; //function to handle cancel form button


  var handleCancel = function handleCancel() {
    //empty input state values
    if (window.confirm("Confirm Cancel Editing fileds ?")) {
      setInputState(inputStateObj);
      setEnableEditState({
        isEditEnabled: false,
        rowIndex: null
      });
    }
  }; //function to handle add new row


  var handleAddRow = function handleAddRow() {
    var Arr = dataSourceState;
    Arr.push(inputStateObj);
    setDataSourceState(Arr);
    setEnableEditState({
      isEditEnabled: true,
      rowIndex: dataSourceState.length - 1
    });
    setRowCounter(dataSourceState.length);
  }; //function to handle Delete row


  var handleDelete = function handleDelete(index) {
    console.log("delete index : ", index);

    if (window.confirm("Confirm Delete Row ?")) {
      var Arr = dataSourceState;
      Arr.splice(index, 1);
      setDataSourceState(Arr);
      setRowCounter(dataSourceState.length);
      onDataChange(dataSourceState);
    }
  }; //function ti handle Insert Row


  var handleInsertRow = function handleInsertRow(index, place) {
    if (place === "after") {
      var Arr = dataSourceState;
      Arr.splice(index + 1, 0, inputStateObj);
      setDataSourceState(Arr);
      setRowCounter(dataSourceState.length);
      handleEdit(index + 1);
    } else if (place === "before") {
      var _Arr = dataSourceState;

      _Arr.splice(index, 0, inputStateObj);

      setDataSourceState(_Arr);
      setRowCounter(dataSourceState.length);
      handleEdit(index);
    }
  };

  return /*#__PURE__*/React__default["default"].createElement("form", {
    onSubmit: handleSubmit
  }, rowCounter && /*#__PURE__*/React__default["default"].createElement(Table, null, /*#__PURE__*/React__default["default"].createElement("thead", null, /*#__PURE__*/React__default["default"].createElement("tr", null, columns.map(function (item) {
    return /*#__PURE__*/React__default["default"].createElement(HeaderCell, {
      key: item.dataIndex
    }, item.name);
  }), operations ? /*#__PURE__*/React__default["default"].createElement(HeaderCell, null, "operationss") : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null))), /*#__PURE__*/React__default["default"].createElement("tbody", null, handleTableContent())), enableAddRow && /*#__PURE__*/React__default["default"].createElement(AddRowContainer, null, /*#__PURE__*/React__default["default"].createElement(AddRowButton, {
    type: "button",
    onClick: function onClick() {
      return handleAddRow();
    }
  }, "add Row")));
};

exports.TableComp = TableComp;
