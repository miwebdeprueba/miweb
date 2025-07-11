import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const DepositInstructions = ({ course }) => {
  const handleDepositPayment = () => {
    toast({
      title: "🚧 Esta funcionalidad no está implementada aún—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };

  return (
    <div className="glass-effect rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-4">Instrucciones para Depósito Bancario</h3>
      <div className="space-y-4 text-white/90">
        <p>Para completar tu inscripción mediante depósito bancario, sigue estos pasos:</p>
        
        <div className="bg-white/5 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Datos Bancarios:</h4>
          <div className="space-y-1 text-sm">
            <p><strong>Banco:</strong> Banco Nacional</p>
            <p><strong>Cuenta:</strong> 1234-5678-9012-3456</p>
            <p><strong>Titular:</strong> IngeniaCursos S.A.</p>
            <p><strong>Monto:</strong> ${course.price}</p>
          </div>
        </div>
        
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Realiza el depósito por el monto exacto de ${course.price}</li>
          <li>Envía el comprobante de depósito a pagos@ingeniacursos.com</li>
          <li>Incluye tu nombre completo y el curso seleccionado</li>
          <li>Recibirás confirmación en 24-48 horas hábiles</li>
        </ol>
      </div>
      
      <Button
        onClick={handleDepositPayment}
        className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
      >
        Confirmar Método de Depósito
      </Button>
    </div>
  );
};

export default DepositInstructions;