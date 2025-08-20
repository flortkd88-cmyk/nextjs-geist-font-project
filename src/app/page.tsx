"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "manicura",
    name: "Manicura",
    description: "Cuidado completo de manos y uñas con técnicas profesionales",
    duration: "60 min",
    price: "Consultar precio",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aaeda63b-1347-443b-b368-8e65f95e7abc.png"
  },
  {
    id: "peluqueria",
    name: "Peluquería",
    description: "Corte, peinado y tratamientos capilares personalizados",
    duration: "90 min",
    price: "Consultar precio",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/48d7ad69-c21d-467b-b479-8fa1abebd4bd.png"
  },
  {
    id: "podologia",
    name: "Podología",
    description: "Cuidado integral de pies con tratamientos especializados",
    duration: "45 min",
    price: "Consultar precio",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/223c113b-f2b6-4081-8f42-68a30c388dc4.png"
  },
  {
    id: "masajes",
    name: "Masajes",
    description: "Masajes relajantes y terapéuticos para tu bienestar",
    duration: "60 min",
    price: "Consultar precio",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b71bf76-c362-4023-a8be-540a66877fe5.png"
  }
];

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBooking = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleConfirmBooking = (serviceName: string) => {
    const nameInput = document.getElementById('booking-name') as HTMLInputElement;
    const phoneInput = document.getElementById('booking-phone') as HTMLInputElement;
    const notesInput = document.getElementById('booking-notes') as HTMLTextAreaElement;
    
    if (!nameInput?.value || !phoneInput?.value || !selectedDate || !selectedTime) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    const message = `¡Hola! Quiero reservar un turno para ${serviceName}
    
📅 Fecha: ${selectedDate.toLocaleDateString('es-AR')}
🕐 Hora: ${selectedTime}
👤 Nombre: ${nameInput.value}
📞 Teléfono: ${phoneInput.value}
${notesInput?.value ? `📝 Notas: ${notesInput.value}` : ''}

¡Gracias!`;

    const whatsappUrl = `https://wa.me/541171168201?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h1 className="font-playfair text-2xl font-bold text-gray-800">Caricias al alma</h1>
                <p className="text-sm text-pink-600">Centro de Estética</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-pink-600 transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-pink-600 transition-colors">Servicios</a>
              <a href="#contacto" className="text-gray-700 hover:text-pink-600 transition-colors">Contacto</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-3">
                <a href="#inicio" className="text-gray-700 hover:text-pink-600 transition-colors">Inicio</a>
                <a href="#servicios" className="text-gray-700 hover:text-pink-600 transition-colors">Servicios</a>
                <a href="#contacto" className="text-gray-700 hover:text-pink-600 transition-colors">Contacto</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Caricias al alma
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Tu centro de estética donde la belleza y el bienestar se encuentran
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Ofrecemos servicios profesionales de manicura, peluquería, podología y masajes 
              en un ambiente relajante y acogedor en Villa Ballester.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 text-lg"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conoce nuestros servicios
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Nuestros Servicios
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra amplia gama de servicios de belleza y bienestar, 
              diseñados para hacerte sentir especial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-pink-100">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{service.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                      {service.duration}
                    </Badge>
                    <span className="text-sm font-medium text-gray-600">{service.price}</span>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                        onClick={() => handleBooking(service.id)}
                      >
                        Reservar turno
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Reservar turno - {service.name}</DialogTitle>
                        <DialogDescription>
                          Selecciona la fecha y hora para tu cita
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <div>
                          <Label className="text-sm font-medium mb-2 block">Selecciona una fecha</Label>
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="rounded-md border border-pink-200"
                            disabled={(date) => date < new Date()}
                          />
                        </div>

                        <div>
                          <Label className="text-sm font-medium mb-2 block">Horario disponible</Label>
                          <Select value={selectedTime} onValueChange={setSelectedTime}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un horario" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="booking-name">Nombre completo</Label>
                            <Input id="booking-name" placeholder="Tu nombre completo" required />
                          </div>
                          <div>
                            <Label htmlFor="booking-phone">Teléfono</Label>
                            <Input id="booking-phone" placeholder="Tu número de teléfono" required />
                          </div>
                          <div>
                            <Label htmlFor="booking-notes">Notas adicionales (opcional)</Label>
                            <Textarea id="booking-notes" placeholder="Alguna preferencia o comentario especial" />
                          </div>
                        </div>

                        <Button 
                          className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                          onClick={() => handleConfirmBooking(service.name)}
                        >
                          Confirmar reserva por WhatsApp
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Contacto
            </h3>
            <p className="text-lg text-gray-600">
              Estamos aquí para atenderte. Contáctanos para más información o reservas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-semibold text-gray-800 mb-6">Información de contacto</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 font-semibold">📞</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Teléfono</p>
                      <a href="https://wa.me/541171168201" className="text-pink-600 hover:text-pink-700 font-medium">
                        1171168201
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 font-semibold">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Dirección</p>
                      <p className="text-gray-600">Profesor Simon 1540<br />Villa Ballester</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 font-semibold">🕒</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Horarios</p>
                      <p className="text-gray-600">Lun - Vie: 9:00 - 18:00<br />Sáb: 9:00 - 15:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-pink-100">
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <CardDescription>
                    ¿Tienes alguna pregunta? Escríbenos y te responderemos pronto.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Nombre</Label>
                    <Input id="contact-name" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Teléfono</Label>
                    <Input id="contact-phone" placeholder="Tu teléfono" />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Mensaje</Label>
                    <Textarea id="contact-message" placeholder="Tu mensaje" rows={4} />
                  </div>
                  <Button 
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                    onClick={() => {
                      const nameInput = document.getElementById('contact-name') as HTMLInputElement;
                      const phoneInput = document.getElementById('contact-phone') as HTMLInputElement;
                      const messageInput = document.getElementById('contact-message') as HTMLTextAreaElement;
                      
                      if (!nameInput?.value || !messageInput?.value) {
                        alert('Por favor completa tu nombre y mensaje');
                        return;
                      }

                      const message = `¡Hola! Soy ${nameInput.value}
                      
${phoneInput?.value ? `📞 Mi teléfono: ${phoneInput.value}` : ''}

💬 Mensaje: ${messageInput.value}

¡Gracias!`;

                      const whatsappUrl = `https://wa.me/541171168201?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    Enviar por WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-pink-100">
                <CardHeader>
                  <CardTitle>Nuestra ubicación</CardTitle>
                  <CardDescription>
                    Encuéntranos en Villa Ballester
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.8234567890123!2d-58.5567890!3d-34.5567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0123456789a%3A0x1234567890abcdef!2sProfesor%20Simon%201540%2C%20Villa%20Ballester%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de Caricias al alma"
                    ></iframe>
                  </div>
                  <div className="mt-4 text-center">
                    <a
                      href="https://maps.google.com/?q=Profesor+Simon+1540,+Villa+Ballester"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">C</span>
                </div>
                <h4 className="font-playfair text-xl font-bold">Caricias al alma</h4>
              </div>
              <p className="text-gray-300">
                Tu centro de estética de confianza en Villa Ballester. 
                Cuidamos tu belleza con profesionalismo y dedicación.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Servicios</h5>
              <ul className="space-y-2 text-gray-300">
                <li>Manicura</li>
                <li>Peluquería</li>
                <li>Podología</li>
                <li>Masajes</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contacto</h5>
              <div className="space-y-2 text-gray-300">
                <p>📞 1171168201</p>
                <p>📍 Profesor Simon 1540, Villa Ballester</p>
                <p>🕒 Lun - Vie: 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Caricias al alma. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
