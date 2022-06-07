react table component with edit,delete,add and insert rows fumctions

### Enable all operations
```jsx
import TableComp from './TableComp';

const columns = [
  {
    name: "First Name",
    dataIndex: "first",
  },
  {
    name: "Second Name",
    dataIndex: "second",
  },
  {
    name: "Last Name",
    dataIndex: "last",
  },
  {
    name: "Phone Number",
    dataIndex: "phone",
  },
];
const dataSource = [];

for(let i=0;i<5;i++){
  dataSource.push({
    first : "first" + i.toString(),
    second : "second" + i.toString(),
    last : "last" + i.toString(),
    phone : i
  })  
}

<TableComp columns={columns} dataSource={dataSource} operations={true} onDataChange={(data) => console.log(data)}/>
```

### Enable All with Icons

```jsx
import TableComp from './TableComp';

const columns = [
  {
    name: "First Name",
    dataIndex: "first",
  },
  {
    name: "Second Name",
    dataIndex: "second",
  },
  {
    name: "Last Name",
    dataIndex: "last",
  },
  {
    name: "Phone Number",
    dataIndex: "phone",
  },
];
const dataSource = [];

for(let i=0;i<5;i++){
  dataSource.push({
    first : "first" + i.toString(),
    second : "second" + i.toString(),
    last : "last" + i.toString(),
    phone : i
  })  
}

<TableComp columns={columns} dataSource={dataSource} operations={true} enableIcons={true} onDataChange={(data) => console.log(data)}/>
```

### opertaions props
```jsx
import TableComp from './TableComp';

const columns = [
  {
    name: "First Name",
    dataIndex: "first",
  },
  {
    name: "Second Name",
    dataIndex: "second",
  },
  {
    name: "Last Name",
    dataIndex: "last",
  },
  {
    name: "Phone Number",
    dataIndex: "phone",
  },
];
const dataSource = [];

for(let i=0;i<5;i++){
  dataSource.push({
    first : "first" + i.toString(),
    second : "second" + i.toString(),
    last : "last" + i.toString(),
    phone : i
  })  
}

<TableComp 
  columns={columns} 
  dataSource={dataSource} 
  enableIcons={true}
  enableEditRow={true}
  enableDeleteRow={true}
  enableInsertRow={true}
  onDataChange={(data) => console.log(data)}
/>
```