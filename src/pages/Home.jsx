import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, BookOpen, Users, Award, Star, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { courses } from '@/data/courses';

const Home = () => {
  const featuredCourses = courses.slice(0, 3);

  const stats = [
    { icon: Users, label: 'Estudiantes Activos', value: '15,000+' },
    { icon: BookOpen, label: 'Cursos Disponibles', value: '50+' },
    { icon: Award, label: 'Certificaciones', value: '12,000+' },
    { icon: Star, label: 'Calificación Promedio', value: '4.8/5' }
  ];

  const benefits = [
    'Acceso de por vida a todos los materiales',
    'Certificación oficial al completar',
    'Soporte 24/7 de instructores expertos',
    'Proyectos prácticos con casos reales',
    'Comunidad activa de estudiantes',
    'Actualizaciones constantes del contenido'
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>IngeniaCursos - Aprende Ingeniería Online</title>
        <meta name="description" content="La mejor plataforma de cursos de ingeniería online. Aprende con expertos, obtén certificaciones y avanza en tu carrera profesional." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Domina la
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Ingeniería
                </span>
                del Futuro
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90">
                Aprende con los mejores instructores, obtén certificaciones reconocidas y acelera tu carrera profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/cursos">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4">
                    Explorar Cursos
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4"
                  onClick={() => {
                    const video = document.getElementById('demo-video');
                    if (video) video.play();
                  }}
                >
                  <Play className="mr-2 w-5 h-5" />
                  Ver Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="floating-animation">
                <img  
                  alt="Estudiantes de ingeniería trabajando con tecnología avanzada"
                  className="rounded-2xl shadow-2xl w-full"
                 src="https://images.unsplash.com/photo-1592303637753-ce1e6b8a0ffb" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Cursos Destacados
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Descubre nuestros cursos más populares, diseñados por expertos de la industria
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-2xl overflow-hidden card-hover"
              >
                <div className="relative">
                  <img  
                    alt={`Curso de ${course.title}`}
                    className="w-full h-48 object-cover"
                   src="https://images.unsplash.com/photo-1596496181861-5fc5346995ba" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {course.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-white/80 mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{course.rating}</span>
                      <span className="text-white/60">({course.students})</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">${course.price}</div>
                      <div className="text-sm text-white/60 line-through">${course.originalPrice}</div>
                    </div>
                  </div>
                  
                  <Link to={`/curso/${course.id}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      Ver Curso
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/cursos">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Ver Todos los Cursos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                ¿Por qué elegir IngeniaCursos?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Ofrecemos la mejor experiencia de aprendizaje online con beneficios únicos que te ayudarán a destacar en tu carrera.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img  
                alt="Estudiante exitoso celebrando su certificación en ingeniería"
                className="rounded-2xl shadow-2xl w-full"
               src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comienza tu Transformación Profesional Hoy
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Únete a miles de ingenieros que ya han transformado sus carreras con nuestros cursos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registro">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4">
                  Registrarse Gratis
                </Button>
              </Link>
              <Link to="/cursos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4">
                  Explorar Cursos
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;