import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  Star, Clock, Users, BookOpen, CheckCircle, Play, 
  Award, Download, MessageCircle, ArrowLeft 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { courses } from '@/data/courses';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Curso no encontrado</h2>
          <Link to="/cursos">
            <Button>Volver a Cursos</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    if (!user) {
      toast({
        title: "Inicia sesión requerida",
        description: "Debes iniciar sesión para inscribirte en un curso",
      });
      navigate('/login');
      return;
    }

    navigate(`/checkout/${course.id}`);
  };

  const isEnrolled = user?.enrolledCourses?.includes(course.id);

  return (
    <div className="pt-20 min-h-screen">
      <Helmet>
        <title>{course.title} - IngeniaCursos</title>
        <meta name="description" content={course.longDescription} />
      </Helmet>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/cursos" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a Cursos
        </Link>
      </div>

      {/* Course Header */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {course.category}
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {course.level}
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {course.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-6">
                {course.longDescription}
              </p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-white/70">({course.students} estudiantes)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>
              
              <div className="text-white/90 mb-2">Instructor:</div>
              <div className="text-2xl font-semibold">{course.instructor}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8 sticky top-24">
                <img  
                  alt={`Vista previa del curso ${course.title}`}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                 src="https://images.unsplash.com/photo-1596496181861-5fc5346995ba" />
                
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="text-4xl font-bold text-white">${course.price}</div>
                    {course.originalPrice > course.price && (
                      <div className="text-xl text-white/60 line-through">${course.originalPrice}</div>
                    )}
                  </div>
                  <div className="text-green-400 font-semibold">
                    Ahorra ${course.originalPrice - course.price}
                  </div>
                </div>
                
                {isEnrolled ? (
                  <Button 
                    className="w-full mb-4 bg-green-600 hover:bg-green-700"
                    onClick={() => toast({
                      title: "Ya estás inscrito",
                      description: "Puedes acceder al curso desde tu dashboard",
                    })}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Ya Inscrito
                  </Button>
                ) : (
                  <Button 
                    onClick={handleEnroll}
                    className="w-full mb-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg py-3"
                  >
                    Inscribirse Ahora
                  </Button>
                )}
                
                <div className="space-y-3 text-white/90">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Acceso de por vida</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-green-400" />
                    <span>Certificación incluida</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Download className="w-4 h-4 text-green-400" />
                    <span>Materiales descargables</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                    <span>Soporte 24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* What You'll Learn */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass-effect rounded-2xl p-8 mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Lo que aprenderás</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Course Modules */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass-effect rounded-2xl p-8 mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Contenido del Curso</h2>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{module}</h3>
                      </div>
                      <Play className="w-5 h-5 text-white/60" />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Instructor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass-effect rounded-2xl p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Tu Instructor</h2>
                <div className="flex items-start space-x-6">
                  <img  
                    alt={`Foto del instructor ${course.instructor}`}
                    className="w-20 h-20 rounded-full object-cover"
                   src="https://images.unsplash.com/photo-1652693534401-1ee129305fff" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{course.instructor}</h3>
                    <p className="text-white/80 mb-4">
                      Ingeniero con más de 15 años de experiencia en la industria y 8 años enseñando. 
                      Especialista en {course.category.toLowerCase()} con certificaciones internacionales.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-white/70">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>5,000+ estudiantes</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>4.9 calificación</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Related Courses */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Cursos Relacionados</h3>
                <div className="space-y-4">
                  {courses
                    .filter(c => c.category === course.category && c.id !== course.id)
                    .slice(0, 3)
                    .map((relatedCourse) => (
                      <Link
                        key={relatedCourse.id}
                        to={`/curso/${relatedCourse.id}`}
                        className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <h4 className="text-white font-semibold text-sm mb-1">
                          {relatedCourse.title}
                        </h4>
                        <div className="flex items-center justify-between">
                          <span className="text-white/70 text-xs">{relatedCourse.duration}</span>
                          <span className="text-white font-semibold">${relatedCourse.price}</span>
                        </div>
                      </Link>
                    ))}
                </div>
              </motion.div>

              {/* Course Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="glass-effect rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Estadísticas</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/70">Estudiantes</span>
                    <span className="text-white font-semibold">{course.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Calificación</span>
                    <span className="text-white font-semibold">{course.rating}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Duración</span>
                    <span className="text-white font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Nivel</span>
                    <span className="text-white font-semibold">{course.level}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;