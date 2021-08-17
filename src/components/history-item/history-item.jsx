import React from 'react';

function HistoryItem({historyItem}) {
  const {date, from, to} = historyItem;

  return (
    <li>
      <span>
        {date}
      </span>
      <span>
        {from}
      </span>
      <span>
        {to}
      </span>
    </li>
  );
}

export default HistoryItem;
