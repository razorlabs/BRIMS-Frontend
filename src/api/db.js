module.exports = {
  patients: [
    {
      id: '1',
      pid: '222-aaa',
      externalid: '501-42-444',
      specimen: {
        id: '4',
        type: 'Dried Blood Spot',
        collectdate: '2018-04-26',
        collecttime: '23:20',
        volume: '10ml',
        aliquot: {
          id: '5',
          visit: 'week1',
          collecttime: '2018-04-04',
          volume: '5ml',
          notes: 'some example notes',
        },
      },
    },
  ],
};
