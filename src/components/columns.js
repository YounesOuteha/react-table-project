/* 1- Creating our Mockup data using Mockaroo that we want to display */
/* 2- Define the columns for our table */
/* 3- Use the data and columns defined to create a table instance using react-table */
/* 4- Define a basic table structure using plain HTML */
/* 5- Use the table instance created in step 3 to bring life to the HTML defined in step 4 */
/* 6- Include the desired CSS or UI libraries as desired */

import { format } from 'date-fns'

export const COLUMNS =[
    {
        Header:'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header:'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
    },
    {
        Header:'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
    },
    {
        Header:'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
        Cell: ({ value }) => {return format(new Date(value), 'dd/MM/yyyy')}
    },
    {
        Header:'Country',
        Footer: 'Country',
        accessor: 'country'
    },
    {
        Header:'Phone',
        Footer: 'Phone',
        accessor: 'phone'
    },
]

export const GROUPED_COLUMNS = [
    {
        Header:'Id',
        Footer: 'Id',
        accessor: 'id'
    },
    {
        Header:'Name',
        Footer: 'Name',
        columns:[
            {
                Header:'First Name',
                Footer: 'First Name',
                accessor: 'first_name'
            },
            {
                Header:'Last Name',
                Footer: 'Last Name',
                accessor: 'last_name'
            },
        ]
    },
    {
        Header:'Info',
        Footer: 'Info',
        columns:[
            {
                Header:'Date of Birth',
                Footer: 'Date of Birth',
                accessor: 'date_of_birth',
                Cell: ({ value }) => {return format(new Date(value), 'dd/MM/yyyy')}
            },
            {
                Header:'Country',
                Footer: 'Country',
                accessor: 'country'
            },
            {
                Header:'Phone',
                Footer: 'Phone',
                accessor: 'phone'
            },
        ]
    }
]