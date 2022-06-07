import styled from "@emotion/styled";
import React ,{ useState } from "react";
//usage
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
const AddRowContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 5px;
`;
// add row button styling
const AddRowButton = styled.button`
  background-color: #3880ff8f;
  padding: 7px;
  border-radius: 4px;
`;
//table styling
const Table = styled.table`
  border: solid;
  border-width: thin;
  width: 100%;
  height: 100%;
`;
// header cells styling
const HeaderCell = styled.th`
  border: solid;
  border-width: thin;
`;
//content cell styling
const ContentCell = styled.td`
  border: solid;
  border-width: thin;
  text-align: center;
`;
const ContentEditableCell = styled.input`
  background-color: #f0f8ff;
  border: none;
  width: 100%;
  height: 100%;
`;
// operations save button styling
const SubmitForm = styled.button`
  background-color: transparent;
  color: #3880ff;
`;
const SubmitFormIcon = styled.svg`
  color: green;
  width: 20px;
  margin-top: 3px;
  margin-right: 3px;
  cursor: pointer;
`;
// operations cancel button styling
const CancelForm = styled.button`
  background-color: transparent;
  color: #3880ff;
`;
const CancelFormIcon = styled.svg`
  margin-top: 3px;
  width: 20px;
  color: red;
  cursor: pointer;
`;
//operations edit button styling
const EditForm = styled.button`
  background-color: transparent;
  color: ${(props) => (!props.enable ? "#3880ff" : "#bfbfbf")};
  cursor: ${(props) => (!props.enable ? "pointer" : "default")};
`;
const EditFormIcon = styled.svg`
  width: 20px;
  color: ${(props) => (!props.enable ? "blue" : "#bfbfbf")};
  cursor: ${(props) => (!props.enable ? "pointer" : "default")};
  margin-right: 3px;
  margin-top: 3px;
`;
//opertaions delete button styling
const DeleteButton = styled.button`
  background-color: transparent;
  color: ${(props) => (!props.enable ? "red" : "#bfbfbf")};
  cursor: ${(props) => (!props.enable ? "pointer" : "default")};
`;
const DeleteIcon = styled.svg`
  width: 20px;
  color: ${(props) => (!props.enable ? "red" : "#bfbfbf")};
  cursor: ${(props) => (!props.enable ? "pointer" : "default")};
  margin-right: 3px;
  margin-top: 3px;
`;
// operations insert row button styling
const InsertRowButton = styled.button`
  background-color: transparent;
  color: ${(props) => (!props.enable ? "#00a900" : "#bfbfbf")};
  cursor: ${(props) => (!props.enable ? "pointer" : "default")};
`;
const InsertRowIcon = styled.svg`
  width: 20px;
  color: ${(props) => (!props.enable ? "green" : "#bfbfbf")};
  cursor: ${(props) => (!props.enable ? "pointer" : "default")};
  margin-right: 3px;
  margin-top: 3px;
`;
// map the coulmns to create object to be used for the form input state
let inputStateObj = {};
const TableComp = ({
  operations,
  columns,
  dataSource,
  onDataChange,
  enableDeleteRow,
  enableInsertRow,
  enableAddRow,
  enableEditRow,
  enableIcons,
}) => {
  if (operations) {
    enableDeleteRow = true;
    enableInsertRow = true;
    enableAddRow = true;
    enableEditRow = true;
  }
  if(enableAddRow){
    enableEditRow = true;
    enableDeleteRow = true;
  }
  if (enableDeleteRow || enableInsertRow || enableAddRow || enableEditRow) {
    operations = true;
  }
  //map function to init inputStateObj for creating the input state to accept form values
  columns.map((item) => {
    inputStateObj = {
      ...inputStateObj,
      [item.dataIndex]: "",
    };
  });
  //state for enable editding per row
  const [enableEditState, setEnableEditState] = useState({
    isEditEnabled: false,
    rowIndex: null,
  });
  //counter to refresh the table
  const [rowCounter, setRowCounter] = useState(dataSource.length);
  //form input state
  const [inputState, setInputState] = useState(inputStateObj);
  const [dataSourceState, setDataSourceState] = useState(dataSource);
  //function to handle the table content
  const handleTableContent = () => {
    //map the data to access each object in the array
    return dataSourceState.map((dataItem, index) => {
      //check if this row is editable or not to render form input
      if (enableEditState.isEditEnabled && enableEditState.rowIndex === index) {
        return (
          <tr>
            {columns.map((colItem) => {
              //pass data object and current columns data with editable true
              return handleRowContent(dataItem, colItem, true);
            })}
            {/* operations buttons rendering save => submit form , cancel disable editing  */}
            <ContentCell>
              {enableIcons ? (
                <SubmitFormIcon
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="{2}"
                  onClick={handleSubmit}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </SubmitFormIcon>
              ) : (
                <SubmitForm type="submit">Save</SubmitForm>
              )}
              <span> </span>
              {enableIcons ? (
                <CancelFormIcon
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="{2}"
                  onClick={() => handleCancel()}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </CancelFormIcon>
              ) : (
                <CancelForm type="button" onClick={() => handleCancel()}>
                  Cancel
                </CancelForm>
              )}
            </ContentCell>
          </tr>
        );
      } else {
        // render normal table cell
        return (
          <tr id={"colNum" + index}>
            {columns.map((colItem) => {
              ////pass data object and current columns data with editable false
              return handleRowContent(dataItem, colItem, false);
            })}
            {/* operations buttons rendering edit => enable row editing  */}
            {operations ? (
              <ContentCell>
                {enableEditRow && (
                  <>
                    {enableIcons ? (
                      <EditFormIcon
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="{2}"
                        enable={enableEditState.isEditEnabled}
                        onClick={() =>
                          //check if any other row is in edit state then disable all other edit buttons
                          {
                            !enableEditState.isEditEnabled ? (
                              handleEdit(index)
                            ) : (
                              <></>
                            );
                          }
                        }
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </EditFormIcon>
                    ) : (
                      <EditForm
                        type="button"
                        enable={enableEditState.isEditEnabled}
                        onClick={() =>
                          //check if any other row is in edit state then disable all other edit buttons
                          {
                            !enableEditState.isEditEnabled ? (
                              handleEdit(index)
                            ) : (
                              <></>
                            );
                          }
                        }
                      >
                        Edit
                      </EditForm>
                    )}
                  </>
                )}
                {enableInsertRow && (
                  <>
                    {enableIcons ? (
                      <>
                        <InsertRowIcon
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="{2}"
                          enable={enableEditState.isEditEnabled}
                          onClick={() => {
                            !enableEditState.isEditEnabled ? (
                              handleInsertRow(index, "after")
                            ) : (
                              <></>
                            );
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                          />
                        </InsertRowIcon>
                        <InsertRowIcon
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="{2}"
                          enable={enableEditState.isEditEnabled}
                          onClick={() => {
                            !enableEditState.isEditEnabled ? (
                              handleInsertRow(index, "before")
                            ) : (
                              <></>
                            );
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                          />
                        </InsertRowIcon>
                      </>
                    ) : (
                      <InsertRowButton
                        type="button"
                        enable={enableEditState.isEditEnabled}
                        onClick={() => {
                          !enableEditState.isEditEnabled ? (
                            handleInsertRow(index, "after")
                          ) : (
                            <></>
                          );
                        }}
                      >
                        Insert Row
                      </InsertRowButton>
                    )}
                  </>
                )}
                {enableDeleteRow && (
                  <>
                    {enableIcons ? (
                      <DeleteIcon
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="{2}"
                        enable={enableEditState.isEditEnabled}
                        onClick={() => {
                          !enableEditState.isEditEnabled ? (
                            handleDelete(index)
                          ) : (
                            <></>
                          );
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </DeleteIcon>
                    ) : (
                      <DeleteButton
                        type="button"
                        enable={enableEditState.isEditEnabled}
                        onClick={() => {
                          !enableEditState.isEditEnabled ? (
                            handleDelete(index)
                          ) : (
                            <></>
                          );
                        }}
                      >
                        Delete
                      </DeleteButton>
                    )}
                  </>
                )}
              </ContentCell>
            ) : (
              <></>
            )}
          </tr>
        );
      }
    });
  };
  //function to handle row content
  const handleRowContent = (dataItem, colItem, enableEditValue) => {
    //check if this row is editable
    if (enableEditValue) {
      //render form input
      return (
        <ContentCell>
          {Object.keys(dataItem).map((dataKey) => {
            return (
              <>
                {dataKey === colItem.dataIndex ? (
                  <>
                    {/* update input state with input change passing a copy of old state */}
                    <ContentEditableCell
                      value={inputState[dataKey]}
                      onChange={(e) =>
                        setInputState({
                          ...inputState,
                          [dataKey]: e.target.value,
                        })
                      }
                    />
                  </>
                ) : (
                  <></>
                )}
              </>
            );
          })}
        </ContentCell>
      );
    } else {
      //render normal table cells
      return (
        <ContentCell>
          {Object.keys(dataItem).map((dataKey) => {
            return (
              <>
                {dataKey === colItem.dataIndex ? (
                  <>{dataItem[dataKey]}</>
                ) : (
                  <></>
                )}
              </>
            );
          })}
        </ContentCell>
      );
    }
  };
  const handleEdit = (rowIndex) => {
    setInputState(dataSourceState[rowIndex]);
    setEnableEditState({
      isEditEnabled: true,
      rowIndex: rowIndex,
    });
  };
  //function to handle submit
  const handleSubmit = (e) => {
    //prevent default submit action
    e.preventDefault();
    //generate new data array
    if (window.confirm("Confirm Save Edited Fields ?")) {
      let dataSourceArr = dataSourceState;
      dataSourceArr[enableEditState.rowIndex] = inputState;
      setDataSourceState(dataSourceArr);
      // TODO manage new data generated
      onDataChange(dataSourceState);
      //clear input state and enable state
      setInputState(inputStateObj);
      setEnableEditState({ isEditEnabled: false, rowIndex: null });
    }
  };
  //function to handle cancel form button
  const handleCancel = () => {
    //empty input state values
    if (window.confirm("Confirm Cancel Editing fileds ?")) {
      setInputState(inputStateObj);
      setEnableEditState({ isEditEnabled: false, rowIndex: null });
    }
  };
  //function to handle add new row
  const handleAddRow = () => {
    let Arr = dataSourceState;
    Arr.push(inputStateObj);
    setDataSourceState(Arr);
    setEnableEditState({
      isEditEnabled: true,
      rowIndex: dataSourceState.length - 1,
    });
    setRowCounter(dataSourceState.length);
  };
  //function to handle Delete row
  const handleDelete = (index) => {
    console.log("delete index : ", index);
    if (window.confirm("Confirm Delete Row ?")) {
      let Arr = dataSourceState;
      Arr.splice(index, 1);
      setDataSourceState(Arr);
      setRowCounter(dataSourceState.length);
      onDataChange(dataSourceState);
    }
  };
  //function ti handle Insert Row
  const handleInsertRow = (index, place) => {
    if (place === "after") {
      let Arr = dataSourceState;
      Arr.splice(index + 1, 0, inputStateObj);
      setDataSourceState(Arr);
      setRowCounter(dataSourceState.length);
      handleEdit(index + 1);
    } else if (place === "before") {
      let Arr = dataSourceState;
      Arr.splice(index, 0, inputStateObj);
      setDataSourceState(Arr);
      setRowCounter(dataSourceState.length);
      handleEdit(index);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {rowCounter && (
        <Table>
          <thead>
            <tr>
              {columns.map((item) => {
                return (
                  <HeaderCell key={item.dataIndex}>{item.name}</HeaderCell>
                );
              })}
              {operations ? <HeaderCell>operationss</HeaderCell> : <></>}
            </tr>
          </thead>
          <tbody>{handleTableContent()}</tbody>
        </Table>
      )}
      {enableAddRow && (
        <AddRowContainer>
          <AddRowButton type="button" onClick={() => handleAddRow()}>
            add Row
          </AddRowButton>
        </AddRowContainer>
      )}
    </form>
  );
};

export default TableComp;
