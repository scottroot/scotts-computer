import React, { useState } from 'react';

import { usePapaParse } from 'react-papaparse';

export default function ReadString({csvStringProp}) {
  const { readString } = usePapaParse();
  const [csvRead, setCsvRead] = useState("");
  const handleReadString = () => {
    const csvString = {csvStringProp};
    readString(csvString, {
        worker: true,
        header: true,
        complete: (results) => {
          console.log('---------------------------');
          console.log(results);
          setCsvRead(results)
          console.log('---------------------------');
        },
      });
  };

  return csvRead;
}