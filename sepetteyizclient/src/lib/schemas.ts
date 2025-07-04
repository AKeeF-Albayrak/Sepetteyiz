import { z } from 'zod';
import {
  UserRole,
  OrderStatus,
  PaymentMethod,
  PaymentProvider,
  PaymentStatus,
  MessageSender,
  RecommendationSource,
  ReturnStatus
} from './types';

// ==========================================
// ENUM SCHEMAS
// ==========================================

export const UserRoleSchema = z.nativeEnum(UserRole);
export const OrderStatusSchema = z.nativeEnum(OrderStatus);
export const PaymentMethodSchema = z.nativeEnum(PaymentMethod);
export const PaymentProviderSchema = z.nativeEnum(PaymentProvider);
export const PaymentStatusSchema = z.nativeEnum(PaymentStatus);
export const MessageSenderSchema = z.nativeEnum(MessageSender);
export const RecommendationSourceSchema = z.nativeEnum(RecommendationSource);
export const ReturnStatusSchema = z.nativeEnum(ReturnStatus);

// ==========================================
// BASE SCHEMAS
// ==========================================

export const GUIDSchema = z.string().uuid();
export const EmailSchema = z.string().email();
export const PasswordSchema = z.string().min(6, 'Şifre en az 6 karakter olmalıdır');
export const PhoneSchema = z.string().regex(/^[+]?[0-9\s\-\(\)]{10,}$/, 'Geçerli telefon numarası giriniz');
export const UrlSchema = z.string().url('Geçerli URL giriniz');
export const PriceSchema = z.number().positive('Fiyat pozitif olmalıdır');
export const QuantitySchema = z.number().int().positive('Miktar pozitif tam sayı olmalıdır');

// ==========================================
// MAIN ENTITY SCHEMAS
// ==========================================

export const UserSchema = z.object({
  id: GUIDSchema,
  name: z.string().min(1, 'Ad gereklidir').max(100, 'Ad çok uzun'),
  email: EmailSchema,
  passwordHash: z.string(),
  role: UserRoleSchema,
  createdAt: z.date()
});

export const ProductSchema = z.object({
  id: GUIDSchema,
  name: z.string().min(1, 'Ürün adı gereklidir').max(200, 'Ürün adı çok uzun'),
  description: z.string().min(10, 'Açıklama en az 10 karakter olmalıdır').max(2000, 'Açıklama çok uzun'),
  price: PriceSchema,
  stock: z.number().int().min(0, 'Stok negatif olamaz'),
  imageUrl: UrlSchema,
  sellerId: GUIDSchema,
  categoryId: z.number().int().positive(),
  createdAt: z.date()
});

export const ProductImageSchema = z.object({
  id: GUIDSchema,
  productId: GUIDSchema,
  imageUrl: UrlSchema,
  isMain: z.boolean()
});

export const CategorySchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1, 'Kategori adı gereklidir').max(100, 'Kategori adı çok uzun')
});

export const CartSchema = z.object({
  id: GUIDSchema,
  userId: GUIDSchema,
  createdAt: z.date()
});

export const CartItemSchema = z.object({
  id: GUIDSchema,
  cartId: GUIDSchema,
  productId: GUIDSchema,
  quantity: QuantitySchema
});

export const OrderSchema = z.object({
  id: GUIDSchema,
  userId: GUIDSchema,
  addressId: GUIDSchema,
  totalAmount: PriceSchema,
  status: OrderStatusSchema,
  createdAt: z.date(),
  paidAt: z.date().optional()
});

export const OrderItemSchema = z.object({
  id: GUIDSchema,
  orderId: GUIDSchema,
  productId: GUIDSchema,
  quantity: QuantitySchema,
  unitPrice: PriceSchema,
  totalPrice: PriceSchema
});

export const PaymentSchema = z.object({
  id: GUIDSchema,
  orderId: GUIDSchema,
  method: PaymentMethodSchema,
  provider: PaymentProviderSchema,
  amount: PriceSchema,
  status: PaymentStatusSchema,
  transactionId: z.string().min(1, 'Transaction ID gereklidir'),
  paidAt: z.date().optional(),
  createdAt: z.date()
});

export const AddressSchema = z.object({
  id: GUIDSchema,
  userId: GUIDSchema,
  title: z.string().min(1, 'Adres başlığı gereklidir').max(50, 'Adres başlığı çok uzun'),
  addressLine: z.string().min(10, 'Adres detayı en az 10 karakter olmalıdır').max(300, 'Adres detayı çok uzun'),
  city: z.string().min(1, 'Şehir gereklidir').max(50, 'Şehir adı çok uzun'),
  district: z.string().min(1, 'İlçe gereklidir').max(50, 'İlçe adı çok uzun'),
  zipCode: z.string().min(5, 'Posta kodu en az 5 karakter olmalıdır').max(10, 'Posta kodu çok uzun'),
  country: z.string().min(1, 'Ülke gereklidir').max(50, 'Ülke adı çok uzun'),
  createdAt: z.date()
});

export const MessageSchema = z.object({
  id: GUIDSchema,
  userId: GUIDSchema,
  sender: MessageSenderSchema,
  content: z.string().min(1, 'Mesaj içeriği gereklidir').max(1000, 'Mesaj çok uzun'),
  createdAt: z.date()
});

export const RefreshTokenSchema = z.object({
  id: GUIDSchema,
  userId: GUIDSchema,
  token: z.string().uuid(),
  expiresAt: z.date(),
  revokedAt: z.date().optional(),
  createdAt: z.date(),
  ipAddress: z.string().ip().optional(),
  deviceInfo: z.string().max(200).optional()
});

// ==========================================
// AI & UX FOCUSED SCHEMAS
// ==========================================

export const RecommendationSchema = z.object({
  userId: GUIDSchema,
  productId: GUIDSchema,
  source: RecommendationSourceSchema,
  score: z.number().min(0).max(1).optional(),
  createdAt: z.date()
});

export const ProductViewSchema = z.object({
  userId: GUIDSchema,
  productId: GUIDSchema,
  viewedAt: z.date()
});

export const SearchLogSchema = z.object({
  id: GUIDSchema,
  userId: GUIDSchema.optional(),
  query: z.string().min(1, 'Arama sorgusu gereklidir').max(200, 'Arama sorgusu çok uzun'),
  resultsCount: z.number().int().min(0).optional(),
  createdAt: z.date()
});

export const ReturnSchema = z.object({
  id: GUIDSchema,
  orderItemId: GUIDSchema,
  reason: z.string().min(10, 'İade sebebi en az 10 karakter olmalıdır').max(500, 'İade sebebi çok uzun'),
  status: ReturnStatusSchema,
  requestedAt: z.date(),
  resolvedAt: z.date().optional(),
  refundAmount: PriceSchema.optional()
});

export const WishlistSchema = z.object({
  userId: GUIDSchema,
  productId: GUIDSchema,
  createdAt: z.date()
});

export const ProductEmbeddingLogSchema = z.object({
  productId: GUIDSchema,
  textVector: z.array(z.number()).optional(),
  imageVector: z.array(z.number()).optional(),
  updatedAt: z.date()
});

export const EmotionFeedbackSchema = z.object({
  id: GUIDSchema,
  userId: GUIDSchema,
  productId: GUIDSchema,
  score: z.number().int().min(1, 'Puan en az 1 olmalıdır').max(5, 'Puan en fazla 5 olmalıdır'),
  feedbackText: z.string().max(500, 'Geri bildirim metni çok uzun').optional(),
  createdAt: z.date()
});

export const ReferralCodeSchema = z.object({
  id: GUIDSchema,
  code: z.string().min(3, 'Referans kodu en az 3 karakter olmalıdır').max(20, 'Referans kodu çok uzun'),
  userId: GUIDSchema,
  usedByUserId: GUIDSchema.optional(),
  discountAmount: PriceSchema.optional(),
  discountPercentage: z.number().min(0).max(100).optional(),
  createdAt: z.date(),
  usedAt: z.date().optional()
});

export const UserDeviceSchema = z.object({
  id: GUIDSchema,
  userId: GUIDSchema,
  deviceInfo: z.string().min(1, 'Cihaz bilgisi gereklidir').max(200, 'Cihaz bilgisi çok uzun'),
  ipAddress: z.string().ip(),
  lastUsedAt: z.date(),
  isActive: z.boolean()
});

export const AuditLogSchema = z.object({
  id: GUIDSchema,
  userId: GUIDSchema.optional(),
  action: z.string().min(1, 'Aksiyon gereklidir').max(100, 'Aksiyon çok uzun'),
  tableName: z.string().min(1, 'Tablo adı gereklidir').max(50, 'Tablo adı çok uzun'),
  recordId: z.string().min(1, 'Kayıt ID gereklidir'),
  oldValues: z.record(z.unknown()).optional(),
  newValues: z.record(z.unknown()).optional(),
  timestamp: z.date()
});

export const TagSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1, 'Etiket adı gereklidir').max(50, 'Etiket adı çok uzun'),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, 'Geçerli hex renk kodu giriniz').optional()
});

export const ProductTagSchema = z.object({
  productId: GUIDSchema,
  tagId: z.number().int().positive()
});

// ==========================================
// API RESPONSE SCHEMAS
// ==========================================

export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema.optional(),
    error: z.string().optional(),
    message: z.string().optional()
  });

export const PaginatedResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    items: z.array(itemSchema),
    totalCount: z.number().int().min(0),
    pageNumber: z.number().int().positive(),
    pageSize: z.number().int().positive(),
    totalPages: z.number().int().min(0),
    hasNextPage: z.boolean(),
    hasPreviousPage: z.boolean()
  });

// ==========================================
// REQUEST SCHEMAS
// ==========================================

export const LoginRequestSchema = z.object({
  email: EmailSchema,
  password: z.string().min(1, 'Şifre gereklidir')
});

export const RegisterRequestSchema = z.object({
  name: z.string().min(1, 'Ad gereklidir').max(100, 'Ad çok uzun'),
  email: EmailSchema,
  password: PasswordSchema,
  role: UserRoleSchema.optional()
});

export const CreateProductRequestSchema = z.object({
  name: z.string().min(1, 'Ürün adı gereklidir').max(200, 'Ürün adı çok uzun'),
  description: z.string().min(10, 'Açıklama en az 10 karakter olmalıdır').max(2000, 'Açıklama çok uzun'),
  price: PriceSchema,
  stock: z.number().int().min(0, 'Stok negatif olamaz'),
  imageUrl: UrlSchema,
  categoryId: z.number().int().positive(),
  tagIds: z.array(z.number().int().positive()).optional()
});

export const UpdateProductRequestSchema = CreateProductRequestSchema.partial().extend({
  id: GUIDSchema
});

export const AddToCartRequestSchema = z.object({
  productId: GUIDSchema,
  quantity: QuantitySchema
});

export const CreateOrderRequestSchema = z.object({
  addressId: GUIDSchema,
  items: z.array(z.object({
    productId: GUIDSchema,
    quantity: QuantitySchema
  })).min(1, 'En az bir ürün seçmelisiniz'),
  paymentMethod: PaymentMethodSchema,
  paymentProvider: PaymentProviderSchema
});

export const CreateAddressRequestSchema = z.object({
  title: z.string().min(1, 'Adres başlığı gereklidir').max(50, 'Adres başlığı çok uzun'),
  addressLine: z.string().min(10, 'Adres detayı en az 10 karakter olmalıdır').max(300, 'Adres detayı çok uzun'),
  city: z.string().min(1, 'Şehir gereklidir').max(50, 'Şehir adı çok uzun'),
  district: z.string().min(1, 'İlçe gereklidir').max(50, 'İlçe adı çok uzun'),
  zipCode: z.string().min(5, 'Posta kodu en az 5 karakter olmalıdır').max(10, 'Posta kodu çok uzun'),
  country: z.string().min(1, 'Ülke gereklidir').max(50, 'Ülke adı çok uzun')
});

export const SearchProductsRequestSchema = z.object({
  query: z.string().max(200, 'Arama sorgusu çok uzun').optional(),
  categoryId: z.number().int().positive().optional(),
  minPrice: PriceSchema.optional(),
  maxPrice: PriceSchema.optional(),
  tagIds: z.array(z.number().int().positive()).optional(),
  sortBy: z.enum(['price', 'name', 'createdAt', 'popularity']).optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
  pageNumber: z.number().int().positive().optional(),
  pageSize: z.number().int().min(1).max(100).optional()
});

// ==========================================
// VALIDATION HELPERS
// ==========================================

export const validateEmail = (email: string): boolean => {
  return EmailSchema.safeParse(email).success;
};

export const validatePassword = (password: string): boolean => {
  return PasswordSchema.safeParse(password).success;
};

export const validateGUID = (guid: string): boolean => {
  return GUIDSchema.safeParse(guid).success;
};

export const validatePrice = (price: number): boolean => {
  return PriceSchema.safeParse(price).success;
};

export const validateUrl = (url: string): boolean => {
  return UrlSchema.safeParse(url).success;
};

// ==========================================
// TYPE INFERENCE FROM SCHEMAS
// ==========================================

// Bu şemalardan TypeScript tiplerini çıkarmak için:
export type UserSchemaType = z.infer<typeof UserSchema>;
export type ProductSchemaType = z.infer<typeof ProductSchema>;
export type OrderSchemaType = z.infer<typeof OrderSchema>;
export type LoginRequestSchemaType = z.infer<typeof LoginRequestSchema>;
export type RegisterRequestSchemaType = z.infer<typeof RegisterRequestSchema>;
export type CreateProductRequestSchemaType = z.infer<typeof CreateProductRequestSchema>;
export type SearchProductsRequestSchemaType = z.infer<typeof SearchProductsRequestSchema>;

// Bu şekilde hem TypeScript tiplerini hem de Zod validasyonunu aynı yerden yönetebilirsiniz

// ==========================================
// API SCHEMA HELPERS
// ==========================================

// API response'ları için özel şemalar
export const UserApiResponseSchema = ApiResponseSchema(UserSchema);
export const ProductApiResponseSchema = ApiResponseSchema(ProductSchema);
export const ProductsApiResponseSchema = ApiResponseSchema(PaginatedResponseSchema(ProductSchema));
export const OrderApiResponseSchema = ApiResponseSchema(OrderSchema);
export const OrdersApiResponseSchema = ApiResponseSchema(PaginatedResponseSchema(OrderSchema));

// API'den gelen string date'leri parse etmek için
export const parseApiDates = {
  user: (user: Record<string, unknown>) => ({
    ...user,
    createdAt: new Date(user.createdAt as string)
  }),
  product: (product: Record<string, unknown>) => ({
    ...product,
    createdAt: new Date(product.createdAt as string)
  }),
  order: (order: Record<string, unknown>) => ({
    ...order,
    createdAt: new Date(order.createdAt as string),
    paidAt: order.paidAt ? new Date(order.paidAt as string) : undefined
  })
}; 