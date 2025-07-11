import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  BookOpen, User, Settings, Award, Clock, 
  Play, CheckCircle, Star, TrendingUp 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { courses } from '@/data/courses';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const Dashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('courses');

  if (!user) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Acceso denegado</h2>
          <p className="mb-4">Debes iniciar sesión para acceder al dashboard</p>
          <Link to="/login">
            <Button>Iniciar Sesión</Button>
          </Link>
        </div>
      </div>
    );
  }

  const enrolledCourses = courses.filter(course => 
    user.enrolledCourses?.includes(course.id)
  );

  const stats = [
    { icon: BookOpen, label: 'Cursos Inscritos', value: enrolledCourses.length },
    { icon: CheckCircle, label: 'Cursos Completados', value: 0 },
    { icon: Clock, label: 'Horas de Estudio', value: enrolledCourses.length * 40 },
    { icon: Award, label: 'Certificaciones', value: 0 }
  ];

  const tabs = [
    { id: 'courses', label: 'Mis Cursos', icon: BookOpen },
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'certificates', label: 'Certificados', icon: Award },
    { id: 'settings', label: 'Configuración', icon: Settings }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <Helmet>
        <title>Dashboard - IngeniaCursos</title>
        <meta name="description" content="Gestiona tus cursos, revisa tu progreso y accede a tus certificaciones en tu dashboard personal." />
      </Helmet>

      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-4xl font-bold mb-2">¡Hola, {user.name}!</h1>
            <p className="text-xl text-white/90">Bienvenido de vuelta a tu espacio de aprendizaje</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-effect rounded-xl p-6 sticky top-24">
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {activeTab === 'courses' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-white">Mis Cursos</h2>
                    <Link to="/cursos">
                      <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                        Explorar Más Cursos
                      </Button>
                    </Link>
                  </div>

                  {enrolledCourses.length === 0 ? (
                    <div className="glass-effect rounded-xl p-12 text-center">
                      <BookOpen className="w-16 h-16 text-white/40 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        No tienes cursos inscritos
                      </h3>
                      <p className="text-white/70 mb-6">
                        Explora nuestro catálogo y comienza tu viaje de aprendizaje
                      </p>
                      <Link to="/cursos">
                        <Button className="bg-gradient-to-r from-blue-500 to-purple-600">
                          Ver Cursos Disponibles
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                      {enrolledCourses.map((course) => (
                        <div key={course.id} className="glass-effect rounded-xl overflow-hidden">
                          <img  
                            alt={`Curso de ${course.title}`}
                            className="w-full h-40 object-cover"
                           src="https://images.unsplash.com/photo-1677696795233-5ef097695f12" />
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                            <p className="text-white/70 mb-4 text-sm">{course.description}</p>
                            
                            <div className="mb-4">
                              <div className="flex justify-between text-sm text-white/70 mb-1">
                                <span>Progreso</span>
                                <span>0%</span>
                              </div>
                              <div className="w-full bg-white/20 rounded-full h-2">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-0"></div>
                              </div>
                            </div>
                            
                            <Button 
                              className="w-full bg-gradient-to-r from-blue-500 to-purple-600"
                              onClick={() => toast({
                                title: "🚧 Esta funcionalidad no está implementada aún—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀"
                              })}
                            >
                              <Play className="w-4 h-4 mr-2" />
                              Continuar Curso
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold text-white">Mi Perfil</h2>
                  
                  <div className="glass-effect rounded-xl p-8">
                    <div className="flex items-start space-x-6 mb-8">
                      <img  
                        alt={`Foto de perfil de ${user.name}`}
                        className="w-24 h-24 rounded-full object-cover"
                       src="https://images.unsplash.com/photo-1652693534401-1ee129305fff" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{user.name}</h3>
                        <p className="text-white/70 mb-4">{user.email}</p>
                        <div className="flex items-center space-x-4 text-sm text-white/60">
                          <span>Miembro desde: {new Date(user.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Información Personal</h4>
                        <div className="space-y-3">
                          <div>
                            <span className="text-white/70 text-sm">Nombre:</span>
                            <p className="text-white">{user.name}</p>
                          </div>
                          <div>
                            <span className="text-white/70 text-sm">Email:</span>
                            <p className="text-white">{user.email}</p>
                          </div>
                          <div>
                            <span className="text-white/70 text-sm">Teléfono:</span>
                            <p className="text-white">{user.phone || 'No especificado'}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Estadísticas</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-white/70">Cursos inscritos:</span>
                            <span className="text-white font-semibold">{enrolledCourses.length}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/70">Horas de estudio:</span>
                            <span className="text-white font-semibold">{enrolledCourses.length * 40}h</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/70">Certificados:</span>
                            <span className="text-white font-semibold">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'certificates' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold text-white">Mis Certificados</h2>
                  
                  <div className="glass-effect rounded-xl p-12 text-center">
                    <Award className="w-16 h-16 text-white/40 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      No tienes certificados aún
                    </h3>
                    <p className="text-white/70 mb-6">
                      Completa tus cursos para obtener certificaciones oficiales
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-blue-500 to-purple-600"
                      onClick={() => toast({
                        title: "🚧 Esta funcionalidad no está implementada aún—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo prompt! 🚀"
                      })}
                    >
                      Ver Progreso de Cursos
                    </Button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold text-white">Configuración</h2>
                  
                  <div className="glass-effect rounded-xl p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Notificaciones</h3>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span className="text-white/90">Notificaciones por email</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span className="text-white/90">Recordatorios de cursos</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded" />
                            <span className="text-white/90">Ofertas y promociones</span>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Privacidad</h3>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded" defaultChecked />
                            <span className="text-white/90">Perfil público</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded" />
                            <span className="text-white/90">Mostrar progreso a otros estudiantes</span>
                          </label>
                        </div>
                      </div>
                      
                      <Button 
                        className="bg-gradient-to-r from-blue-500 to-purple-600"
                        onClick={() => toast({
                          title: "Configuración guardada",
                          description: "Tus preferencias han sido actualizadas",
                        })}
                      >
                        Guardar Cambios
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;