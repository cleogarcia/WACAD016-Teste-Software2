import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ConfirmationModal from '../Modals/Confirmacao/index'; // Corrigindo o caminho do import

describe('ConfirmationModal', () => {
  const mockProps = {
    isShow: true,
    title: 'Confirmation Modal',
    message: 'Are you sure you want to proceed?',
    onConfirm: jest.fn(),
    onCancel: jest.fn(),
  };

  it('calls onConfirm when Confirm button is clicked', () => {
    const { getByText } = render(
      <ConfirmationModal {...mockProps} />
    );

    const confirmButton = getByText('Confirmar');
    fireEvent.click(confirmButton);

    expect(mockProps.onConfirm).toHaveBeenCalled();
    expect(mockProps.onCancel).not.toHaveBeenCalled();
  });
});