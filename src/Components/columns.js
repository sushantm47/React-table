export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'char_id',
    disableFilters: true,
    
  },
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'name',
    sticky: 'left'
  },
  {
    Header: 'Birthday',
    Footer: 'Phone',
    accessor: 'birthday'
  },
  {
    Header: 'Nickname',
    Footer: 'username',
    accessor: 'nickname',
    sticky: 'left'
  },
  {
    Header: 'Status',
    Footer: 'email',
    accessor: 'status',
  },
  {
    Header: 'Portrayed By',
    Footer: 'Phone',
    accessor: 'portrayed'
  },
  {
    Header: 'Appearance',
    Footer: 'Website',
    accessor: 'category'
  }
]


export const GROUPED_COLUMNS = [
    {
      Header: 'Id',
      Footer: 'Id',
      accessor: 'id'
    },
    {
      Header: 'Name',
      Footer: 'Name',
      columns: [
        {
          Header: 'First Name',
          Footer: 'First Name',
          accessor: 'first_name'
        },
        {
          Header: 'Last Name',
          Footer: 'Last Name',
          accessor: 'last_name'
        }
      ]
    },
    {
      Header: 'Info',
      Footer: 'Info',
      columns: [
        {
          Header: 'Date of Birth',
          Footer: 'Date of Birth',
          accessor: 'date_of_birth'
        },
        {
          Header: 'Country',
          Footer: 'Country',
          accessor: 'country'
        },
        {
          Header: 'Phone',
          Footer: 'Phone',
          accessor: 'phone'
        }
      ]
    }
  ]