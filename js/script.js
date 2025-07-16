document.addEventListener('DOMContentLoaded', () => {
    // Datos de los cursos (simulando una base de datos o API)
    const coursesData = {
        'desarrollo-web': {
            title: 'Desarrollo Web Full Stack',
            content: [
                'Fundamentos de HTML5, CSS3 y JavaScript.',
                'Desarrollo Front-end con ReactJS/Angular/Vue.js.',
                'Desarrollo Back-end con Node.js y Express/Python y Django/Flask.',
                'Bases de Datos relacionales (SQL) y no relacionales (MongoDB).',
                'Despliegue y Mantenimiento de Aplicaciones Web.'
            ],
            duration: '6 meses',
            cost: 'S/ 2500'
        },
        'ciencia-datos': {
            title: 'Ciencia de Datos con Python',
            content: [
                'Introducción a Python para Ciencia de Datos.',
                'Manipulación y Análisis de Datos con Pandas y NumPy.',
                'Visualización de Datos con Matplotlib y Seaborn.',
                'Aprendizaje Automático (Machine Learning) con Scikit-learn.',
                'Conceptos de Big Data y herramientas (Spark, Hadoop).'
            ],
            duration: '5 meses',
            cost: 'S/ 2200'
        },
        'ciberseguridad': {
            title: 'Ciberseguridad y Ethical Hacking',
            content: [
                'Fundamentos de Redes y Sistemas Operativos.',
                'Análisis de Vulnerabilidades y Gestión de Riesgos.',
                'Hacking Ético y Pruebas de Penetración (Kali Linux).',
                'Seguridad de Aplicaciones Web y Móviles.',
                'Criptografía y Forensia Digital.'
            ],
            duration: '4 meses',
            cost: 'S/ 2000'
        },
        'bases-datos': {
            title: 'Administración de Bases de Datos SQL',
            content: [
                'Diseño de Bases de Datos Relacionales.',
                'Programación en SQL (Consultas, Vistas, Procedimientos Almacenados).',
                'Administración de Servidores de Bases de Datos (SQL Server, MySQL, PostgreSQL).',
                'Optimización de Rendimiento y Tuning.',
                'Seguridad y Respaldo de Bases de Datos.'
            ],
            duration: '3 meses',
            cost: 'S/ 1500'
        },
        'cloud-computing': {
            title: 'Cloud Computing con AWS',
            content: [
                'Introducción a la Nube y AWS Core Services (EC2, S3, VPC).',
                'Despliegue de Aplicaciones en AWS.',
                'Gestión de Bases de Datos en la Nube (RDS, DynamoDB).',
                'Servicios Serverless (Lambda, API Gateway).',
                'Seguridad y Monitoreo en AWS.'
            ],
            duration: '4 meses',
            cost: 'S/ 2300'
        },
        'desarrollo-movil': {
            title: 'Desarrollo Móvil con React Native',
            content: [
                'Introducción a React Native y JavaScript ES6+.',
                'Componentes Nativos y Navegación.',
                'Manejo de Estado con Redux/Context API.',
                'Integración con APIs Externas.',
                'Despliegue en App Store y Google Play.'
            ],
            duration: '5 meses',
            cost: 'S/ 2400'
        }
    };

    const courseModal = document.getElementById('course-modal');
    const closeButton = document.querySelector('.close-button');
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    // Función para abrir el modal
    const openModal = (courseKey) => {
        const course = coursesData[courseKey];
        if (course) {
            document.getElementById('modal-course-title').textContent = course.title;
            
            const contentList = document.getElementById('modal-course-content');
            contentList.innerHTML = ''; // Limpiar contenido anterior
            course.content.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                contentList.appendChild(li);
            });

            document.getElementById('modal-course-duration').textContent = course.duration;
            document.getElementById('modal-course-cost').textContent = course.cost;
            
            courseModal.style.display = 'flex'; // Mostrar el modal
            setTimeout(() => { // Añadir clase para animaciones CSS
                courseModal.classList.add('show');
            }, 10); // Pequeño retraso para que la transición funcione
        }
    };

    // Función para cerrar el modal
    const closeModal = () => {
        courseModal.classList.remove('show');
        setTimeout(() => { // Esperar a que termine la animación de salida
            courseModal.style.display = 'none';
        }, 400); // Coincidir con la duración de la animación en CSS
    };

    // Event listeners para los botones "Ver Detalles"
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const courseCard = event.target.closest('.course-card');
            const courseKey = courseCard.dataset.course;
            openModal(courseKey);
        });
    });

    // Event listener para cerrar el modal al hacer click en la "x"
    closeButton.addEventListener('click', closeModal);

    // Event listener para cerrar el modal al hacer click fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === courseModal) {
            closeModal();
        }
    });

    // Navegación con scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});