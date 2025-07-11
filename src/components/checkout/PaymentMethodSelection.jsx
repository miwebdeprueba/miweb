import React from 'react';
import { CreditCard, Building2 } from 'lucide-react';

const PaymentMethodSelection = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="glass-effect rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-4">Método de Pago</h3>
      <div className="space-y-3">
        <label className="flex items-center space-x-3 p-3 border border-white/20 rounded-lg cursor-pointer hover:bg-white/5">
          <input
            type="radio"
            name="paymentMethod"
            value="online"
            checked={paymentMethod === 'online'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="text-blue-500"
          />
          <CreditCard className="w-5 h-5 text-white" />
          <span className="text-white">Pago Online (Tarjeta de Crédito/Débito)</span>
        </label>
        
        <label className="flex items-center space-x-3 p-3 border border-white/20 rounded-lg cursor-pointer hover:bg-white/5">
          <input
            type="radio"
            name="paymentMethod"
            value="deposit"
            checked={paymentMethod === 'deposit'}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="text-blue-500"
          />
          <Building2 className="w-5 h-5 text-white" />
          <span className="text-white">Depósito Bancario</span>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethodSelection;