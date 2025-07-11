import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail, User, Phone } from 'lucide-react';

const OnlinePaymentForm = ({ formData, handleInputChange, handleSubmit, loading, coursePrice }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="glass-effect rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Información de Contacto</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-white mb-2 block">
              Nombre Completo
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/60"
                placeholder="Tu nombre completo"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email" className="text-white mb-2 block">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/60"
                placeholder="tu@email.com"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <Label htmlFor="phone" className="text-white mb-2 block">
            Teléfono
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/60"
              placeholder="+1 234 567 8900"
            />
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <Lock className="w-5 h-5 mr-2" />
          Información de Tarjeta
        </h3>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="cardName" className="text-white mb-2 block">
              Nombre en la Tarjeta
            </Label>
            <Input
              id="cardName"
              name="cardName"
              type="text"
              required
              value={formData.cardName}
              onChange={handleInputChange}
              className="bg-white/10 border-white/20 text-white placeholder-white/60"
              placeholder="Nombre como aparece en la tarjeta"
            />
          </div>
          
          <div>
            <Label htmlFor="cardNumber" className="text-white mb-2 block">
              Número de Tarjeta
            </Label>
            <Input
              id="cardNumber"
              name="cardNumber"
              type="text"
              required
              value={formData.cardNumber}
              onChange={handleInputChange}
              className="bg-white/10 border-white/20 text-white placeholder-white/60"
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate" className="text-white mb-2 block">
                Fecha de Vencimiento
              </Label>
              <Input
                id="expiryDate"
                name="expiryDate"
                type="text"
                required
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder-white/60"
                placeholder="MM/AA"
                maxLength={5}
              />
            </div>
            
            <div>
              <Label htmlFor="cvv" className="text-white mb-2 block">
                CVV
              </Label>
              <Input
                id="cvv"
                name="cvv"
                type="text"
                required
                value={formData.cvv}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white placeholder-white/60"
                placeholder="123"
                maxLength={4}
              />
            </div>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg py-4"
      >
        {loading ? 'Procesando Pago...' : `Pagar $${coursePrice}`}
      </Button>
    </form>
  );
};

export default OnlinePaymentForm;