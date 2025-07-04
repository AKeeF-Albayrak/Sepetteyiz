import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Palette, Zap, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sepetteyiz Client
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            45+ Shadcn/UI componenti ile güçlendirilmiş modern Next.js uygulaması
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg">
              <Link href="/products">
                <Palette className="mr-2 h-5 w-5" />
                Ürünleri Görüntüle
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link href="/demo">
                <Code className="mr-2 h-5 w-5" />
                UI Componentleri
              </Link>
            </Button>
          </div>

          <div className="flex justify-center">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <CheckCircle2 className="mr-1 h-4 w-4" />
              Kurulum Tamamlandı
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>45+ Component</CardTitle>
              <CardDescription>
                Modern UI tasarımı için gereken tüm componentler
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Form elementleri (Input, Button, Select)</li>
                <li>• Layout componentleri (Card, Dialog, Sheet)</li>
                <li>• Navigasyon (Breadcrumb, Pagination)</li>
                <li>• Veri görselleştirme (Chart, Table)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Modern Tasarım</CardTitle>
              <CardDescription>
                Tailwind CSS ve CSS değişkenleri ile tam özelleştirilebilir
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Dark/Light mod desteği</li>
                <li>• Responsive tasarım</li>
                <li>• Accessibility odaklı</li>
                <li>• Radix UI primitives</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Developer Ready</CardTitle>
              <CardDescription>
                TypeScript ve modern React patterns ile geliştirildi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Full TypeScript desteği</li>
                <li>• React 19 uyumlu</li>
                <li>• Next.js 15 ile optimize</li>
                <li>• ESLint ve Prettier kurulu</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            Geliştirmeye başlamak için{" "}
            <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
              npm run dev
            </code>{" "}
            komutunu çalıştırın
          </p>
        </div>
      </div>
    </div>
  );
}
