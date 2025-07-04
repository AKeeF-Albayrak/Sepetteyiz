import {
  type ApiResponse,
  type Product,
  type LoginRequest,
  type RegisterRequest,
  type CreateProductRequest,
  type SearchProductsRequest,
  type AddToCartRequest
} from './types';

// Basit API client
export const api = {
  login: async (_credentials: LoginRequest): Promise<ApiResponse<{ token: string }>> => {
    // Mock implementation
    return { success: true, data: { token: 'mock-token' } };
  },

  register: async (_userData: RegisterRequest): Promise<ApiResponse<{ token: string }>> => {
    // Mock implementation
    return { success: true, data: { token: 'mock-token' } };
  },

  getProducts: async (_params?: SearchProductsRequest): Promise<ApiResponse<Product[]>> => {
    // Mock implementation - gerçek projede API çağrısı yapılacak
    const { mockProducts } = await import('./mock-data');
    return { success: true, data: mockProducts };
  },

  getProduct: async (id: string): Promise<ApiResponse<Product>> => {
    // Mock implementation
    const { getProductById } = await import('./mock-data');
    const product = getProductById(id);
    if (product) {
      return { success: true, data: product };
    }
    return { success: false, error: 'Product not found' };
  },

  createProduct: async (data: CreateProductRequest): Promise<ApiResponse<Product>> => {
    // Mock implementation
    console.log('Creating product:', data);
    return { success: true, data: data as Product };
  },

  addToCart: async (item: AddToCartRequest): Promise<ApiResponse<void>> => {
    // Mock implementation
    console.log('Adding to cart:', item);
    return { success: true };
  }
};

export default api; 