const domSelectors = {
  table: '[data-users-table]',
  loader: '.loader',
  tableContent: '.content',
  viewModalSelector: '#userView',
  editModalSelector: null,
  deleteModalSelector: null,
};

const fieldsToOutput = ['id', 'name', 'email', 'phone', 'website'];

new Controller('https://jsonplaceholder.typicode.com/users', domSelectors, fieldsToOutput);
