import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ProductListGrid from '../ListaProdutosGrid/index';

describe('ProductListGrid Component', () => {
  const mockProduct = {
    id: 1,
    nome: 'Produto 1',
    preco: 10,
    estoque: 5,
    quantidade: 1,
  };
  
  const mockOnProductClicked = jest.fn();

  it('renders product card correctly', () => {
    render(
      <ProductListGrid data={[mockProduct]} onProductClicked={mockOnProductClicked} />
    );

    expect(screen.getByText('Produto 1')).toBeInTheDocument();

    const addToCartButton = screen.getByRole('button', { name: 'Adicionar ao carrinho' });
    expect(addToCartButton).toBeInTheDocument();
  });

  it('calls onProductClicked when the "Adicionar ao carrinho" button is clicked for an available product', async () => {
    render(
      <ProductListGrid data={[mockProduct]} onProductClicked={mockOnProductClicked} />
    );

    const addToCartButton = screen.getByRole('button', { name: 'Adicionar ao carrinho' });

    fireEvent.click(addToCartButton);
    expect(mockOnProductClicked).toHaveBeenCalledWith(mockProduct);
  });
});