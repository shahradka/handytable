import * as React from 'react';
import ReactDOM from 'react-dom';
// import { Popover, Whisper, Toggle, Grid, Button, ButtonGroup, Checkbox } from 'rsuite';
// import clone from 'lodash/clone';
// import isFunction from 'lodash/isFunction';
// import get from 'lodash/get';
// import without from 'lodash/without';
// import Examples from './Examples';
//import './less/index.less';
//import './rsuiteThem.css';
//import './babel.min.js';
import Table from './Table';
import HeaderCell from './HeaderCell';
import Cell from './Cell';
import Column from './Column';
// import { Table, Column, Cell, HeaderCell, ColumnGroup } from '../src';
import fakeData from './data/users';
// import fakeTreeData from './data/treeData';
// import fakeDataForColSpan from './data/usersForColSpan';
// import fakeLargeData from './data/fakeLargeData.json';
// import fakeObjectDataListStore, { createFakeRowObjectData } from './data/fakeObjectDataListStore';
// import { useDrag, useDrop, DndProvider } from 'react-dnd';
// import Backend from 'react-dnd-html5-backend';

function App() {
  return (
    <div>
      <h1>rsuite-table</h1>
      <p>A React table component</p>
      <p>
        <a href="https://github.com/rsuite/rsuite-table">https://github.com/rsuite/rsuite-table</a>
      </p>
      <hr />
      <Table
        height={400}
        autoHeight
        affixHeader
        data={fakeData}
        onRowClick={data => {
          console.log(data);
        }}
      >
        <Column width={70} align="center" resizable>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>
      </Table>
    </div>
  );
}

/*
if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}
*/

ReactDOM.render(<App />, document.getElementById('app'));
