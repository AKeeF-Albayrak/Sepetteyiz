import {
  type User,
  type Product,
  type Category,
  type Order,
  type OrderItem,
  type Cart,
  type CartItem,
  type Address,
  type ProductImage,
  UserRole,
  OrderStatus
} from './types';

// ==========================================
// MOCK USERS
// ==========================================

export const mockUsers: User[] = [
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-123456789012',
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    passwordHash: '$2b$10$hashedpassword1',
    role: UserRole.USER,
    createdAt: new Date('2024-01-15')
  },
  {
    id: 'b2c3d4e5-f6g7-8901-bcde-234567890123',
    name: 'Fatma Kaya',
    email: 'fatma@example.com',
    passwordHash: '$2b$10$hashedpassword2',
    role: UserRole.SELLER,
    createdAt: new Date('2024-02-20')
  },
  {
    id: 'c3d4e5f6-g7h8-9012-cdef-345678901234',
    name: 'Mehmet Admin',
    email: 'admin@sepetteyiz.com',
    passwordHash: '$2b$10$hashedpassword3',
    role: UserRole.ADMIN,
    createdAt: new Date('2024-01-01')
  }
];

// ==========================================
// MOCK CATEGORIES
// ==========================================

export const mockCategories: Category[] = [
  { id: 1, name: 'Elektronik' },
  { id: 2, name: 'Giyim' },
  { id: 3, name: 'Ev & Yaşam' },
  { id: 4, name: 'Kitap' },
  { id: 5, name: 'Spor & Outdoor' }
];

// ==========================================
// MOCK PRODUCTS
// ==========================================

export const mockProducts: Product[] = [
  {
    id: 'd4e5f6g7-h8i9-0123-defg-456789012345',
    name: 'iPhone 15 Pro',
    description: 'Apple iPhone 15 Pro 128GB, Titanyum mavi renk. En son teknoloji A17 Pro çip ile güçlendirilmiş.',
    price: 54999.99,
    stock: 25,
    imageUrl: 'https://example.com/iphone15pro.jpg',
    sellerId: 'b2c3d4e5-f6g7-8901-bcde-234567890123',
    categoryId: 1,
    createdAt: new Date('2024-03-01')
  },
  {
    id: 'e5f6g7h8-i9j0-1234-efgh-567890123456',
    name: 'MacBook Air M3',
    description: 'Apple MacBook Air 13" M3 çip 8GB RAM 256GB SSD. Sessiz ve güçlü performans.',
    price: 42999.99,
    stock: 15,
    imageUrl: 'https://example.com/macbook-air-m3.jpg',
    sellerId: 'b2c3d4e5-f6g7-8901-bcde-234567890123',
    categoryId: 1,
    createdAt: new Date('2024-03-05')
  },
  {
    id: 'f6g7h8i9-j0k1-2345-fghi-678901234567',
    name: 'Kot Pantolon',
    description: 'Slim fit erkek kot pantolon, %100 pamuk. Koyu mavi renk, modern kesim.',
    price: 299.99,
    stock: 100,
    imageUrl: 'https://example.com/kot-pantolon.jpg',
    sellerId: 'b2c3d4e5-f6g7-8901-bcde-234567890123',
    categoryId: 2,
    createdAt: new Date('2024-03-10')
  },
  {
    id: 'g7h8i9j0-k1l2-3456-ghij-789012345678',
    name: 'Kahve Makinesi',
    description: 'Otomatik espresso kahve makinesi. 15 bar basınç ile mükemmel kahve deneyimi.',
    price: 2499.99,
    stock: 8,
    imageUrl: 'https://example.com/kahve-makinesi.jpg',
    sellerId: 'b2c3d4e5-f6g7-8901-bcde-234567890123',
    categoryId: 3,
    createdAt: new Date('2024-03-12')
  },
  {
    id: 'h8i9j0k1-l2m3-4567-hijk-890123456789',
    name: 'JavaScript: The Good Parts',
    description: 'Douglas Crockford\'un JavaScript programlama dili hakkındaki klasik kitabı.',
    price: 149.99,
    stock: 50,
    imageUrl: 'https://example.com/js-book.jpg',
    sellerId: 'b2c3d4e5-f6g7-8901-bcde-234567890123',
    categoryId: 4,
    createdAt: new Date('2024-03-15')
  }
];

// ==========================================
// MOCK PRODUCT IMAGES
// ==========================================

export const mockProductImages: ProductImage[] = [
  {
    id: 'img1-2345-6789-abcd-123456789012',
    productId: 'd4e5f6g7-h8i9-0123-defg-456789012345',
    imageUrl: 'https://example.com/iphone15pro-1.jpg',
    isMain: true
  },
  {
    id: 'img2-3456-7890-bcde-234567890123',
    productId: 'd4e5f6g7-h8i9-0123-defg-456789012345',
    imageUrl: 'https://example.com/iphone15pro-2.jpg',
    isMain: false
  },
  {
    id: 'img3-4567-8901-cdef-345678901234',
    productId: 'e5f6g7h8-i9j0-1234-efgh-567890123456',
    imageUrl: 'https://example.com/macbook-air-m3-1.jpg',
    isMain: true
  }
];

// ==========================================
// MOCK ADDRESSES
// ==========================================

export const mockAddresses: Address[] = [
  {
    id: 'addr1-234-5678-9abc-123456789012',
    userId: 'a1b2c3d4-e5f6-7890-abcd-123456789012',
    title: 'Ev',
    addressLine: 'Atatürk Mahallesi, Cumhuriyet Caddesi, No: 123, Daire: 5',
    city: 'İstanbul',
    district: 'Kadıköy',
    zipCode: '34710',
    country: 'Türkiye',
    createdAt: new Date('2024-01-20')
  },
  {
    id: 'addr2-345-6789-0bcd-234567890123',
    userId: 'a1b2c3d4-e5f6-7890-abcd-123456789012',
    title: 'İş',
    addressLine: 'Maslak Mahallesi, Büyükdere Caddesi, No: 456, Kat: 15',
    city: 'İstanbul',
    district: 'Şişli',
    zipCode: '34485',
    country: 'Türkiye',
    createdAt: new Date('2024-02-10')
  }
];

// ==========================================
// MOCK CARTS
// ==========================================

export const mockCarts: Cart[] = [
  {
    id: 'cart1-345-6789-abcd-123456789012',
    userId: 'a1b2c3d4-e5f6-7890-abcd-123456789012',
    createdAt: new Date('2024-03-20')
  }
];

export const mockCartItems: CartItem[] = [
  {
    id: 'cartitem1-456-789a-bcde-123456789012',
    cartId: 'cart1-345-6789-abcd-123456789012',
    productId: 'd4e5f6g7-h8i9-0123-defg-456789012345',
    quantity: 1
  },
  {
    id: 'cartitem2-567-890b-cdef-234567890123',
    cartId: 'cart1-345-6789-abcd-123456789012',
    productId: 'f6g7h8i9-j0k1-2345-fghi-678901234567',
    quantity: 2
  }
];

// ==========================================
// MOCK ORDERS
// ==========================================

export const mockOrders: Order[] = [
  {
    id: 'order1-567-890a-bcde-123456789012',
    userId: 'a1b2c3d4-e5f6-7890-abcd-123456789012',
    addressId: 'addr1-234-5678-9abc-123456789012',
    totalAmount: 55599.97,
    status: OrderStatus.PAID,
    createdAt: new Date('2024-03-18'),
    paidAt: new Date('2024-03-18')
  },
  {
    id: 'order2-678-901b-cdef-234567890123',
    userId: 'a1b2c3d4-e5f6-7890-abcd-123456789012',
    addressId: 'addr2-345-6789-0bcd-234567890123',
    totalAmount: 2949.97,
    status: OrderStatus.PENDING,
    createdAt: new Date('2024-03-22')
  }
];

export const mockOrderItems: OrderItem[] = [
  {
    id: 'orderitem1-789-012c-defg-123456789012',
    orderId: 'order1-567-890a-bcde-123456789012',
    productId: 'd4e5f6g7-h8i9-0123-defg-456789012345',
    quantity: 1,
    unitPrice: 54999.99,
    totalPrice: 54999.99
  },
  {
    id: 'orderitem2-890-123d-efgh-234567890123',
    orderId: 'order1-567-890a-bcde-123456789012',
    productId: 'f6g7h8i9-j0k1-2345-fghi-678901234567',
    quantity: 2,
    unitPrice: 299.99,
    totalPrice: 599.98
  },
  {
    id: 'orderitem3-901-234e-fghi-345678901234',
    orderId: 'order2-678-901b-cdef-234567890123',
    productId: 'g7h8i9j0-k1l2-3456-ghij-789012345678',
    quantity: 1,
    unitPrice: 2499.99,
    totalPrice: 2499.99
  },
  {
    id: 'orderitem4-012-345f-ghij-456789012345',
    orderId: 'order2-678-901b-cdef-234567890123',
    productId: 'h8i9j0k1-l2m3-4567-hijk-890123456789',
    quantity: 3,
    unitPrice: 149.99,
    totalPrice: 449.97
  }
];

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

export const getUserById = (id: string): User | undefined => {
  return mockUsers.find(user => user.id === id);
};

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};

export const getCategoryById = (id: number): Category | undefined => {
  return mockCategories.find(category => category.id === id);
};

export const getProductsByCategory = (categoryId: number): Product[] => {
  return mockProducts.filter(product => product.categoryId === categoryId);
};

export const getProductsBySeller = (sellerId: string): Product[] => {
  return mockProducts.filter(product => product.sellerId === sellerId);
};

export const getCartByUserId = (userId: string): Cart | undefined => {
  return mockCarts.find(cart => cart.userId === userId);
};

export const getCartItems = (cartId: string): CartItem[] => {
  return mockCartItems.filter(item => item.cartId === cartId);
};

export const getOrdersByUserId = (userId: string): Order[] => {
  return mockOrders.filter(order => order.userId === userId);
};

export const getOrderItems = (orderId: string): OrderItem[] => {
  return mockOrderItems.filter(item => item.orderId === orderId);
};

export const getUserAddresses = (userId: string): Address[] => {
  return mockAddresses.filter(address => address.userId === userId);
};

// ==========================================
// CALCULATED VALUES
// ==========================================

export const getCartTotal = (cartId: string): number => {
  const items = getCartItems(cartId);
  return items.reduce((total, item) => {
    const product = getProductById(item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
};

export const getCartItemCount = (cartId: string): number => {
  const items = getCartItems(cartId);
  return items.reduce((count, item) => count + item.quantity, 0);
};

// ==========================================
// EXPORT ALL MOCK DATA
// ==========================================

export const mockData = {
  users: mockUsers,
  products: mockProducts,
  categories: mockCategories,
  productImages: mockProductImages,
  addresses: mockAddresses,
  carts: mockCarts,
  cartItems: mockCartItems,
  orders: mockOrders,
  orderItems: mockOrderItems
};

export default mockData; 