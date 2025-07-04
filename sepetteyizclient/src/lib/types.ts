// ==========================================
// ENUM TYPES
// ==========================================

export enum UserRole {
  USER = 'User',
  SELLER = 'Seller',
  ADMIN = 'Admin'
}

export enum OrderStatus {
  PENDING = 'Pending',
  PAID = 'Paid',
  SHIPPED = 'Shipped',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled',
  REFUNDED = 'Refunded'
}

export enum PaymentMethod {
  CREDIT_CARD = 'CreditCard',
  BANK_TRANSFER = 'BankTransfer',
  DIGITAL_WALLET = 'DigitalWallet'
}

export enum PaymentProvider {
  STRIPE = 'Stripe',
  IYZICO = 'Iyzico',
  PAYPAL = 'PayPal'
}

export enum PaymentStatus {
  PAID = 'Paid',
  FAILED = 'Failed',
  PENDING = 'Pending',
  REFUNDED = 'Refunded'
}

export enum MessageSender {
  USER = 'user',
  AGENT = 'agent'
}

export enum RecommendationSource {
  VIEWED_TOGETHER = 'ViewedTogether',
  BOUGHT_TOGETHER = 'BoughtTogether',
  SIMILAR_PRODUCTS = 'SimilarProducts',
  USER_BEHAVIOR = 'UserBehavior',
  AI_RECOMMENDATION = 'AIRecommendation'
}

export enum ReturnStatus {
  REQUESTED = 'Requested',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
  COMPLETED = 'Completed'
}

// ==========================================
// BASE TYPES
// ==========================================

export type GUID = string;

// ==========================================
// MAIN ENTITY TYPES
// ==========================================

export interface User {
  id: GUID;
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  createdAt: Date;
}

export interface Product {
  id: GUID;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  sellerId: GUID;
  categoryId: number;
  createdAt: Date;
  // Relations
  seller?: User;
  category?: Category;
  images?: ProductImage[];
  tags?: Tag[];
}

export interface ProductImage {
  id: GUID;
  productId: GUID;
  imageUrl: string;
  isMain: boolean;
  // Relations
  product?: Product;
}

export interface Category {
  id: number;
  name: string;
  // Relations
  products?: Product[];
}

export interface Cart {
  id: GUID;
  userId: GUID;
  createdAt: Date;
  // Relations
  user?: User;
  items?: CartItem[];
}

export interface CartItem {
  id: GUID;
  cartId: GUID;
  productId: GUID;
  quantity: number;
  // Relations
  cart?: Cart;
  product?: Product;
}

export interface Order {
  id: GUID;
  userId: GUID;
  addressId: GUID;
  totalAmount: number;
  status: OrderStatus;
  createdAt: Date;
  paidAt?: Date;
  // Relations
  user?: User;
  address?: Address;
  items?: OrderItem[];
  payments?: Payment[];
}

export interface OrderItem {
  id: GUID;
  orderId: GUID;
  productId: GUID;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  // Relations
  order?: Order;
  product?: Product;
}

export interface Payment {
  id: GUID;
  orderId: GUID;
  method: PaymentMethod;
  provider: PaymentProvider;
  amount: number;
  status: PaymentStatus;
  transactionId: string;
  paidAt?: Date;
  createdAt: Date;
  // Relations
  order?: Order;
}

export interface Address {
  id: GUID;
  userId: GUID;
  title: string;
  addressLine: string;
  city: string;
  district: string;
  zipCode: string;
  country: string;
  createdAt: Date;
  // Relations
  user?: User;
}

export interface Message {
  id: GUID;
  userId: GUID;
  sender: MessageSender;
  content: string;
  createdAt: Date;
  // Relations
  user?: User;
}

export interface RefreshToken {
  id: GUID;
  userId: GUID;
  token: string;
  expiresAt: Date;
  revokedAt?: Date;
  createdAt: Date;
  ipAddress?: string;
  deviceInfo?: string;
  // Relations
  user?: User;
}

// ==========================================
// AI & UX FOCUSED TYPES
// ==========================================

export interface Recommendation {
  userId: GUID;
  productId: GUID;
  source: RecommendationSource;
  score?: number;
  createdAt: Date;
  // Relations
  user?: User;
  product?: Product;
}

export interface ProductView {
  userId: GUID;
  productId: GUID;
  viewedAt: Date;
  // Relations
  user?: User;
  product?: Product;
}

export interface SearchLog {
  id: GUID;
  userId?: GUID;
  query: string;
  resultsCount?: number;
  createdAt: Date;
  // Relations
  user?: User;
}

export interface Return {
  id: GUID;
  orderItemId: GUID;
  reason: string;
  status: ReturnStatus;
  requestedAt: Date;
  resolvedAt?: Date;
  refundAmount?: number;
  // Relations
  orderItem?: OrderItem;
}

export interface Wishlist {
  userId: GUID;
  productId: GUID;
  createdAt: Date;
  // Relations
  user?: User;
  product?: Product;
}

export interface ProductEmbeddingLog {
  productId: GUID;
  textVector?: number[];
  imageVector?: number[];
  updatedAt: Date;
  // Relations
  product?: Product;
}

export interface EmotionFeedback {
  id: GUID;
  userId: GUID;
  productId: GUID;
  score: number; // 1-5
  feedbackText?: string;
  createdAt: Date;
  // Relations
  user?: User;
  product?: Product;
}

export interface ReferralCode {
  id: GUID;
  code: string;
  userId: GUID;
  usedByUserId?: GUID;
  discountAmount?: number;
  discountPercentage?: number;
  createdAt: Date;
  usedAt?: Date;
  // Relations
  user?: User;
  usedByUser?: User;
}

export interface UserDevice {
  id: GUID;
  userId: GUID;
  deviceInfo: string;
  ipAddress: string;
  lastUsedAt: Date;
  isActive: boolean;
  // Relations
  user?: User;
}

export interface AuditLog {
  id: GUID;
  userId?: GUID;
  action: string;
  tableName: string;
  recordId: string;
  oldValues?: Record<string, unknown>;
  newValues?: Record<string, unknown>;
  timestamp: Date;
  // Relations
  user?: User;
}

export interface Tag {
  id: number;
  name: string;
  color?: string;
  // Relations
  products?: Product[];
}

export interface ProductTag {
  productId: GUID;
  tagId: number;
  // Relations
  product?: Product;
  tag?: Tag;
}

// ==========================================
// API RESPONSE TYPES
// ==========================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export type ApiPaginatedResponse<T> = ApiResponse<PaginatedResponse<T>>;

// ==========================================
// REQUEST TYPES
// ==========================================

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role?: UserRole;
}

export interface CreateProductRequest {
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  categoryId: number;
  tagIds?: number[];
}

export interface UpdateProductRequest extends Partial<CreateProductRequest> {
  id: GUID;
}

export interface AddToCartRequest {
  productId: GUID;
  quantity: number;
}

export interface CreateOrderRequest {
  addressId: GUID;
  items: {
    productId: GUID;
    quantity: number;
  }[];
  paymentMethod: PaymentMethod;
  paymentProvider: PaymentProvider;
}

export interface CreateAddressRequest {
  title: string;
  addressLine: string;
  city: string;
  district: string;
  zipCode: string;
  country: string;
}

export interface SearchProductsRequest {
  query?: string;
  categoryId?: number;
  minPrice?: number;
  maxPrice?: number;
  tagIds?: number[];
  sortBy?: 'price' | 'name' | 'createdAt' | 'popularity';
  sortOrder?: 'asc' | 'desc';
  pageNumber?: number;
  pageSize?: number;
}

// ==========================================
// DASHBOARD & ANALYTICS TYPES
// ==========================================

export interface SalesAnalytics {
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  topSellingProducts: Product[];
  revenueByMonth: { month: string; revenue: number }[];
  ordersByStatus: { status: OrderStatus; count: number }[];
}

export interface UserAnalytics {
  totalUsers: number;
  newUsersThisMonth: number;
  activeUsers: number;
  usersByRole: { role: UserRole; count: number }[];
  topCustomers: User[];
}

export interface ProductAnalytics {
  totalProducts: number;
  lowStockProducts: Product[];
  mostViewedProducts: Product[];
  topRatedProducts: Product[];
  categoryDistribution: { category: Category; productCount: number }[];
}

// ==========================================
// UTILITY TYPES
// ==========================================

export type CreateEntity<T> = Omit<T, 'id' | 'createdAt'>;
export type UpdateEntity<T> = Partial<Omit<T, 'id' | 'createdAt'>> & { id: GUID };

// For API responses where dates come as strings
export type ApiEntity<T> = Omit<T, 'createdAt' | 'updatedAt' | 'paidAt' | 'viewedAt' | 'expiresAt' | 'revokedAt' | 'resolvedAt' | 'requestedAt' | 'usedAt' | 'lastUsedAt' | 'timestamp'> & {
  createdAt?: string;
  updatedAt?: string;
  paidAt?: string;
  viewedAt?: string;
  expiresAt?: string;
  revokedAt?: string;
  resolvedAt?: string;
  requestedAt?: string;
  usedAt?: string;
  lastUsedAt?: string;
  timestamp?: string;
};

export type ApiUser = ApiEntity<User>;
export type ApiProduct = ApiEntity<Product>;
export type ApiOrder = ApiEntity<Order>;
export type ApiPayment = ApiEntity<Payment>;
// ... diğer API entity tipleri gerektiğinde eklenebilir 