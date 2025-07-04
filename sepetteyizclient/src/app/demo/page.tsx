import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export default function DemoPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Shadcn/UI Demo</h1>
        <p className="text-muted-foreground">Tüm componentler başarıyla eklendi!</p>
      </div>

      <Alert>
        <CheckCircle2 className="h-4 w-4" />
        <AlertDescription>
          45+ shadcn/ui componenti başarıyla projenize eklendi.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Form Components</CardTitle>
            <CardDescription>Çeşitli form elementleri</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="email@example.com" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Şartları kabul ediyorum</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Bildirimleri aç</Label>
            </div>
            <Button className="w-full">Gönder</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Display Components</CardTitle>
            <CardDescription>Görsel elementler</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">john@example.com</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Badge>Yeni</Badge>
              <Badge variant="secondary">Popüler</Badge>
              <Badge variant="destructive">Hata</Badge>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">İlerleme</span>
                <span className="text-sm">75%</span>
              </div>
              <Progress value={75} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feedback</CardTitle>
            <CardDescription>Geri bildirim componentleri</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Bu bir bilgi mesajıdır.
              </AlertDescription>
            </Alert>
            
            <div className="space-y-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary" className="w-full">Secondary</Button>
              <Button variant="outline" className="w-full">Outline</Button>
              <Button variant="ghost" className="w-full">Ghost</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Kullanılabilir Componentler</CardTitle>
          <CardDescription>Projenizde artık şu componentleri kullanabilirsiniz:</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-sm">
            {[
              "Accordion", "Alert", "Alert Dialog", "Aspect Ratio", "Avatar", "Badge",
              "Breadcrumb", "Button", "Calendar", "Card", "Carousel", "Chart",
              "Checkbox", "Collapsible", "Command", "Context Menu", "Dialog", "Drawer",
              "Dropdown Menu", "Form", "Hover Card", "Input", "Input OTP", "Label",
              "Menubar", "Navigation Menu", "Pagination", "Popover", "Progress",
              "Radio Group", "Resizable", "Scroll Area", "Select", "Separator",
              "Sheet", "Sidebar", "Skeleton", "Slider", "Sonner", "Switch",
              "Table", "Tabs", "Textarea", "Toggle", "Toggle Group", "Tooltip"
            ].map((component) => (
              <Badge key={component} variant="outline" className="justify-center">
                {component}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 