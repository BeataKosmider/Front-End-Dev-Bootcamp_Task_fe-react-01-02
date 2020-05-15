import React from 'react';
import TableHead from './TableHead';
import TableFoot from './TableFoot';
import TableBody from './TableBody';

function Table() {
  return (
    <table>
      <TableHead></TableHead>
      <TableBody></TableBody>
      <TableFoot></TableFoot>
    </table>
  )
}

export default Table;
