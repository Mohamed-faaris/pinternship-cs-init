import { render, screen, fireEvent } from '@testing-library/react';
import CommentBox from '../components/CommentBox';

test('renders input and Post button', () => {
  const mockOnPost = jest.fn();
  render(<CommentBox onPost={mockOnPost} />);
  
  expect(screen.getByTestId('comment-input')).toBeInTheDocument();
  expect(screen.getByTestId('post-button')).toBeInTheDocument();
  expect(screen.getByText('Post')).toBeInTheDocument();
});

test('calls onPost with input value when Post is clicked', () => {
  const mockOnPost = jest.fn();
  render(<CommentBox onPost={mockOnPost} />);
  
  const input = screen.getByTestId('comment-input');
  fireEvent.change(input, { target: { value: 'Test comment' } });
  
  const button = screen.getByTestId('post-button');
  fireEvent.click(button);
  
  expect(mockOnPost).toHaveBeenCalledWith('Test comment');
});

test('clears input after posting', () => {
  const mockOnPost = jest.fn();
  render(<CommentBox onPost={mockOnPost} />);
  
  const input = screen.getByTestId('comment-input') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'Test comment' } });
  expect(input.value).toBe('Test comment');
  
  const button = screen.getByTestId('post-button');
  fireEvent.click(button);
  
  expect(input.value).toBe('');
});

test('does not call onPost with empty input', () => {
  const mockOnPost = jest.fn();
  render(<CommentBox onPost={mockOnPost} />);
  
  const button = screen.getByTestId('post-button');
  fireEvent.click(button);
  
  expect(mockOnPost).not.toHaveBeenCalled();
});
