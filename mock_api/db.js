module.exports = {
  patients: [
    {
      id: '1',
      pid: '222-2a2',
      external_id: '501-42-444',
      specimen: {
        id: '4',
        type: 'Dried Blood Spot',
        collect_date: '2018-04-26',
        collect_time: '23:20',
        volume: '10ml',
        aliquot: {
          id: '5',
          visit: 'week1',
          collect_time: '2018-04-04',
          volume: '5ml',
          notes: 'some example notes',
        },
      },
    },
  ],
};
