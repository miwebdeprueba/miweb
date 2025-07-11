import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const CourseSummary = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold text-white">Resumen del Pedido</h1>
      
      <div className="glass-effect rounded-xl p-6">
        <div className="flex space-x-4 mb-6">
          <img 
            alt={`Curso de ${course.title}`}
            className="w-20 h-20 rounded-lg object-cover"
           src="https://images.unsplash.com/photo-1601651514327-8702c4f2ade0" />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">{course.title}</h3>
            <p className="text-white/70 text-sm mb-2">{course.instructor}</p>
            <div className="flex items-center space-x-2 text-sm text-white/60">
              <span>{course.duration}</span>
              <span>•</span>
              <span>{course.level}</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/70">Precio del curso:</span>
            <span className="text-white line-through">${course.originalPrice}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/70">Descuento:</span>
            <span className="text-green-400">-${course.originalPrice - course.price}</span>
          </div>
          <div className="border-t border-white/20 pt-2 mt-2">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-white">Total:</span>
              <span className="text-2xl font-bold text-white">${course.price}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-effect rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Lo que incluye:</h3>
        <div className="space-y-2">
          {course.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-white/90 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CourseSummary;