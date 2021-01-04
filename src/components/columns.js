/* 1- Creating our Mockup data using Mockaroo that we want to display */
/* 2- Define the columns for our table */
/* 3- Use the data and columns defined to create a table instance using react-table */
/* 4- Define a basic table structure using plain HTML */
/* 5- Use the table instance created in step 3 to bring life to the HTML defined in step 4 */
/* 6- Include the desired CSS or UI libraries as desired */

export const COLUMNS =[
    {
        Header:'Id',
        accessor: 'id'
    },
    {
        Header:'First Name',
        accessor: 'first_name'
    },
    {
        Header:'Last Name',
        accessor: 'last_name'
    },
    {
        Header:'Date of Birth',
        accessor: 'date_of_birth'
    },
    {
        Header:'Country',
        accessor: 'country'
    },
    {
        Header:'Phone',
        accessor: 'phone'
    },
]