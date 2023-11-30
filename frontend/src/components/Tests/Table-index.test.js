import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomTable from '../Tabela/index';

describe('CustomTable', () => {
  const mockData = [
    {
      id: 1,
      name: 'John',
      age: 25,
    }
  ];

  const mockColumns = [
    { head: 'ID', accessor: 'id' },
    { head: 'Name', accessor: 'name' },
    { head: 'Age', accessor: 'age' },
    {
      head: 'Action',
      isActionButton: true,
      onActionClick: jest.fn(),
    },
  ];

  it('calls onActionClick when action button is clicked', () => {
    const { getByRole } = render(
      <CustomTable data={mockData} columns={mockColumns} />
    );
    
    const actionButton = getByRole('button', { name: 'Action' });
    fireEvent.click(actionButton);

    expect(mockColumns[3].onActionClick).toHaveBeenCalledWith(mockData[0]);
  });
});