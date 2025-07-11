import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { courses } from '@/data/courses';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';
import CourseSummary from '@/components/checkout/CourseSummary';
import PaymentMethodSelection from '@/components/checkout/PaymentMethodSelection';
import OnlinePaymentForm from '@/components/checkout/OnlinePaymentForm';
import DepositInstructions from '@/components/checkout/DepositInstructions';

const Checkout = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user, enrollInCourse } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: user?.email || '',
    name: user?.name || '',
    phone: user?.phone || '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Curso no encontrado</h2>
          <Button onClick={() => navigate('/cursos')}>
            Volver a Cursos
          </Button>
        </div>
      </div>
    );
  }

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const success = enrollInCourse(course.id);
      
      if (success) {
        toast({
          title: "¡Pago exitoso!",
          description: `Te has inscrito correctamente en ${course.title}`,
        });
        navigate('/dashboard');
      } else {
        toast({
          title: "Error",
          description: "Ya estás inscrito en este curso",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error en el pago",
        description: "Ocurrió un error procesando tu pago. Intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      <Helmet>
        <title>Checkout - {course.title} - IngeniaCursos</title>
        <meta name="description" content={`Completa tu inscripción al curso ${course.title} de forma segura y rápida.`} />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          <CourseSummary course={course} />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Información de Pago</h2>
            
            <PaymentMethodSelection 
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />

            {paymentMethod === 'online' ? (
              <OnlinePaymentForm
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                loading={loading}
                coursePrice={course.price}
              />
            ) : (
              <DepositInstructions course={course} />
            )}

            <div className="glass-effect rounded-xl p-4">
              <div className="flex items-center space-x-2 text-green-400 mb-2">
                <Lock className="w-4 h-4" />
                <span className="text-sm font-semibold">Pago 100% Seguro</span>
              </div>
              <p className="text-white/70 text-xs">
                Tu información está protegida con encriptación SSL de 256 bits. 
                No almacenamos datos de tarjetas de crédito.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;