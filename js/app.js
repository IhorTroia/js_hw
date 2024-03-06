const domSelectors = {
  table: '[data-users-table]',
  loader: '.loader',
  tableContent: '.content',
  viewModalSelector: '#userView',
  editModalSelector: '#userEdit',
  deleteModalSelector: '#userDelete',
};

const fieldsToOutput = ['id', 'name', 'email', 'phone', 'website'];

new Controller('https://jsonplaceholder.typicode.com/users', domSelectors, fieldsToOutput);
