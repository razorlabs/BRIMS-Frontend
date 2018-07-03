module.exports = {
  patients: [
    {
      id: '1',
      pid: '222-aaa',
      externalid: '501-42-444',
    },
    {
      id: '2',
      pid: '222-bbb',
      externalid: '501-42-555',
    },
  ],
  specimens: [
    {
      id: '4',
      patientid: '1',
      type: 'Dried Blood Spot',
      collectdate: '2018-04-26',
      collecttime: '23:20',
      volume: '10ml',
    },
    {
      id: '5',
      patientid: '1',
      type: 'Lung',
      collectdate: '2018-07-03',
      collecttime: '23:10',
      volume: '10p',
    },
    {
      id: '6',
      patientid: '1',
      type: 'Blood',
      collectdate: '2018-07-03',
      collecttime: '09:40',
      volume: '40g',
    },
  ],
};
