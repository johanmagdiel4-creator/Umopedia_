//SCRIPT PARA SCROLL SUAVE, ÍCONOS ACTIVOS Y FLECHAS DEL CARRUSEL
        // ============================================
        // SCROLL SUAVE PARA LOS ÍCONOS DE NAVEGACIÓN
        // ============================================
        const navIcons = document.querySelectorAll('.nav-icon');
        
        navIcons.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                // [FIX v1.3] Solo bloquea la navegación si es un enlace interno (#)
                // Links externos como foro.html ahora funcionan correctamente
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // ============================================
        // SCROLL SUAVE PARA EL BOTÓN "EXPLORAR ESTRELLAS"
        // ============================================
        const exploreBtn = document.querySelector('.btn-primary');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        }

        // ============================================
        // MARCAR ÍCONO ACTIVO SEGÚN SECCIÓN VISIBLE
        // ============================================
        // [FIX v1.3] Eliminado 'comentarios': fue movido a foro.html
        const sections = ['personajes', 'noticias'];
        const navIconsList = document.querySelectorAll('.nav-icon');

        function setActiveIcon() {
            let current = '';
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 100) {
                        current = section;
                        break;
                    }
                }
            }

            navIconsList.forEach(icon => {
                const iconSection = icon.getAttribute('data-section');
                if (iconSection === current) {
                    icon.classList.add('active');
                } else {
                    icon.classList.remove('active');
                }
            });
        }

        window.addEventListener('scroll', setActiveIcon);
        window.addEventListener('load', setActiveIcon);