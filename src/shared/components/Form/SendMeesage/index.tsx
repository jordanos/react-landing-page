import React, { FormEvent, useEffect, useState } from 'react';
import SendMessageUi from './SendMessageUi';

const initData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const SendMessage: React.FC = () => {
  const [data, setData] = useState(initData);

  const updateData = (field: string, value: any) => {
    setData((prev: any) => ({ ...prev, [field]: value }));
  };

  useEffect(() => setData(initData), [initData]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('message sent');

    // mutate({
    //   ...task,
    //   assignedTo: '622de5fed3f42ebf99d1b5de',
    //   date: task.date.toString(),
    // });
  };

  return (
    <SendMessageUi
      data={data}
      updateData={updateData}
      handleSubmit={handleSubmit}
      loading={false}
    />
  );
};

export default SendMessage;
