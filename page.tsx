import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Wifi, Smartphone, Shield, Zap, Home, Settings, Monitor } from "lucide-react"

export default function DomoticaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Home className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">SmartHome Pro</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                Perfil
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Proyectos
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                <Settings className="h-16 w-16 text-primary" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                <Wifi className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Especialista en <span className="text-primary">Domótica</span> e IoT
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Transformo hogares tradicionales en espacios inteligentes, conectados y eficientes mediante tecnología de
            automatización avanzada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Ver Proyectos
            </Button>
            <Button size="lg" variant="outline">
              Contactar
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sobre Mí</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ingeniero especializado en automatización residencial con más de 8 años de experiencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <h4 className="text-2xl font-semibold text-foreground">Mi Experiencia</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Soy un ingeniero especializado en domótica e Internet de las Cosas (IoT) con una pasión por crear
                    soluciones inteligentes que mejoren la calidad de vida. Mi experiencia abarca desde sistemas de
                    iluminación automatizada hasta complejas redes de sensores y actuadores.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    He trabajado con las principales plataformas de automatización como Home Assistant, OpenHAB, y
                    sistemas propietarios, integrando dispositivos de marcas líderes en el mercado.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <CardContent className="space-y-2">
                  <Smartphone className="h-8 w-8 text-primary mx-auto" />
                  <h5 className="font-semibold">Control Móvil</h5>
                  <p className="text-sm text-muted-foreground">Apps personalizadas</p>
                </CardContent>
              </Card>

              <Card className="p-4 text-center">
                <CardContent className="space-y-2">
                  <Shield className="h-8 w-8 text-primary mx-auto" />
                  <h5 className="font-semibold">Seguridad</h5>
                  <p className="text-sm text-muted-foreground">Sistemas integrados</p>
                </CardContent>
              </Card>

              <Card className="p-4 text-center">
                <CardContent className="space-y-2">
                  <Zap className="h-8 w-8 text-primary mx-auto" />
                  <h5 className="font-semibold">Eficiencia</h5>
                  <p className="text-sm text-muted-foreground">Ahorro energético</p>
                </CardContent>
              </Card>

              <Card className="p-4 text-center">
                <CardContent className="space-y-2">
                  <Monitor className="h-8 w-8 text-primary mx-auto" />
                  <h5 className="font-semibold">Monitoreo</h5>
                  <p className="text-sm text-muted-foreground">24/7 en tiempo real</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Proyectos Destacados</h3>
            <p className="text-muted-foreground text-lg">
              Algunos de mis trabajos más recientes en automatización residencial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Home className="h-16 w-16 text-primary" />
              </div>
              <CardHeader>
                <CardTitle>Casa Inteligente Completa</CardTitle>
                <CardDescription>
                  Automatización integral de una residencia de 300m² con 50+ dispositivos IoT
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Home Assistant</Badge>
                  <Badge variant="secondary">Zigbee</Badge>
                  <Badge variant="secondary">WiFi 6</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sistema completo de iluminación, climatización, seguridad y entretenimiento controlado por voz y app
                  móvil.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <Shield className="h-16 w-16 text-primary" />
              </div>
              <CardHeader>
                <CardTitle>Sistema de Seguridad IoT</CardTitle>
                <CardDescription>Red de cámaras y sensores con IA para detección inteligente</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">OpenCV</Badge>
                  <Badge variant="secondary">MQTT</Badge>
                  <Badge variant="secondary">PoE</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Detección facial, alertas inteligentes y grabación automática con almacenamiento en la nube.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-muted/40 flex items-center justify-center">
                <Zap className="h-16 w-16 text-primary" />
              </div>
              <CardHeader>
                <CardTitle>Gestión Energética</CardTitle>
                <CardDescription>Optimización del consumo eléctrico con paneles solares y baterías</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Solar</Badge>
                  <Badge variant="secondary">Tesla Powerwall</Badge>
                  <Badge variant="secondary">Modbus</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Reducción del 60% en costos eléctricos mediante automatización inteligente del consumo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contacto</h3>
            <p className="text-muted-foreground text-lg">
              ¿Listo para hacer tu hogar más inteligente? Hablemos sobre tu proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-6">Información de Contacto</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">contacto@smarthomepro.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">+34 600 123 456</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Madrid, España</span>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <CardContent className="space-y-4">
                  <h5 className="font-semibold text-foreground">Servicios Disponibles</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Consultoría en domótica</li>
                    <li>• Diseño de sistemas IoT</li>
                    <li>• Instalación y configuración</li>
                    <li>• Mantenimiento y soporte</li>
                    <li>• Integración de dispositivos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Envíame un Mensaje</CardTitle>
                <CardDescription>Cuéntame sobre tu proyecto y te responderé en menos de 24 horas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Nombre</label>
                    <Input placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Asunto</label>
                  <Input placeholder="¿En qué puedo ayudarte?" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Mensaje</label>
                  <Textarea placeholder="Describe tu proyecto de domótica..." className="min-h-[120px]" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Enviar Mensaje</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Home className="h-6 w-6 text-primary" />
            <span className="font-semibold text-foreground">SmartHome Pro</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 SmartHome Pro. Especialista en Domótica e IoT. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
