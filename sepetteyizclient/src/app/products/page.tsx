'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Search, ShoppingCart, Star, Package } from 'lucide-react';

// Tip güvenli import'lar
import { 
  type Product, 
  type Category, 
  type SearchProductsRequest
} from '@/lib/types';
import { 
  mockProducts, 
  mockCategories, 
  getProductsByCategory
} from '@/lib/mock-data';
import { SearchProductsRequestSchema } from '@/lib/schemas';

export default function ProductsPage() {
  // Type-safe state management
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useState<SearchProductsRequest>({
    query: '',
    categoryId: undefined,
    sortBy: 'createdAt',
    sortOrder: 'desc',
    pageNumber: 1,
    pageSize: 12
  });
  const [validationError, setValidationError] = useState<string>('');

  // Mock data yükleme (gerçek uygulamada API çağrısı olacak)
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setCategories(mockCategories);
      setProducts(mockProducts);
      setLoading(false);
    };

    loadData();
  }, []);

  // Arama parametreleri değiştiğinde ürünleri filtrele
  useEffect(() => {
    if (!loading) {
      filterProducts();
    }
  }, [searchParams, loading]); // eslint-disable-line react-hooks/exhaustive-deps

  const filterProducts = () => {
    let filteredProducts = [...mockProducts];

    // Kategori filtresi
    if (searchParams.categoryId) {
      filteredProducts = getProductsByCategory(searchParams.categoryId);
    }

    // Arama sorgusu filtresi
    if (searchParams.query) {
      const query = searchParams.query.toLowerCase();
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }

    // Fiyat filtresi
    if (searchParams.minPrice) {
      filteredProducts = filteredProducts.filter(product => product.price >= searchParams.minPrice!);
    }
    if (searchParams.maxPrice) {
      filteredProducts = filteredProducts.filter(product => product.price <= searchParams.maxPrice!);
    }

    // Sıralama
    if (searchParams.sortBy) {
      filteredProducts.sort((a, b) => {
        switch (searchParams.sortBy) {
          case 'price':
            return searchParams.sortOrder === 'desc' 
              ? b.price - a.price 
              : a.price - b.price;
          case 'name':
            return searchParams.sortOrder === 'desc'
              ? b.name.localeCompare(a.name, 'tr')
              : a.name.localeCompare(b.name, 'tr');
          case 'createdAt':
            return searchParams.sortOrder === 'desc'
              ? b.createdAt.getTime() - a.createdAt.getTime()
              : a.createdAt.getTime() - b.createdAt.getTime();
          default:
            return 0;
        }
      });
    }

    setProducts(filteredProducts);
  };

  const handleSearch = (query: string) => {
    // Zod ile validasyon
    const newParams = { ...searchParams, query };
    const validation = SearchProductsRequestSchema.safeParse(newParams);
    
    if (!validation.success) {
      setValidationError(validation.error.errors.map(e => e.message).join(', '));
      return;
    }
    
    setValidationError('');
    setSearchParams(newParams);
  };

  const handleCategoryFilter = (categoryId: string) => {
    const newParams = {
      ...searchParams,
      categoryId: categoryId === 'all' ? undefined : parseInt(categoryId)
    };
    setSearchParams(newParams);
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(price);
  };

  const addToCart = async (product: Product) => {
    // Gerçek uygulamada API çağrısı yapılacak
    console.log('Adding to cart:', product.name);
    // Mock notification
    alert(`${product.name} sepete eklendi!`);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Ürünler</h1>
          <div className="flex gap-4 mb-6">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 w-48" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i}>
              <Skeleton className="h-48 w-full" />
              <CardHeader>
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-10 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Ürünler</h1>
        
        {/* Arama ve Filtreler */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Ürün ara..."
              value={searchParams.query || ''}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select
            value={searchParams.categoryId?.toString() || 'all'}
            onValueChange={handleCategoryFilter}
          >
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Kategori seç" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tüm Kategoriler</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id.toString()}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Validasyon Hatası */}
        {validationError && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{validationError}</AlertDescription>
          </Alert>
        )}

        {/* Sonuç Sayısı */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            {products.length} ürün bulundu
          </p>
          <Select
            value={`${searchParams.sortBy}-${searchParams.sortOrder}`}
            onValueChange={(value) => {
              const [sortBy, sortOrder] = value.split('-');
              setSearchParams({
                ...searchParams,
                sortBy: sortBy as 'price' | 'name' | 'createdAt',
                sortOrder: sortOrder as 'asc' | 'desc'
              });
            }}
          >
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="createdAt-desc">En Yeni</SelectItem>
              <SelectItem value="price-asc">Fiyat (Düşük-Yüksek)</SelectItem>
              <SelectItem value="price-desc">Fiyat (Yüksek-Düşük)</SelectItem>
              <SelectItem value="name-asc">İsim (A-Z)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Ürün Listesi */}
      {products.length === 0 ? (
        <div className="text-center py-12">
          <Package className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Ürün bulunamadı</h3>
          <p className="text-muted-foreground">Arama kriterlerinizi değiştirmeyi deneyin</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            const category = categories.find(c => c.id === product.categoryId);
            
            return (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
                  <Package className="h-12 w-12 text-muted-foreground" />
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                    <Badge variant="secondary" className="ml-2 shrink-0">
                      {category?.name}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(product.price)}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">4.5</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">
                      Stok: {product.stock} adet
                    </span>
                    <Badge variant={product.stock > 10 ? 'default' : 'destructive'}>
                      {product.stock > 10 ? 'Stokta' : 'Son fırsat'}
                    </Badge>
                  </div>
                  
                  <Button 
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                    className="w-full"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {product.stock === 0 ? 'Stokta Yok' : 'Sepete Ekle'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
} 