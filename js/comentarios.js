// ============================================
// SISTEMA DE COMENTARIOS BÁSICO
// ============================================

// Seleccionar elementos del DOM
const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');
let comments = [];  // Array para almacenar comentarios temporalmente

// Función para obtener la fecha/hora actual formateada
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.getDate();
    const month = now.getMonth() + 1;
    return `${hours}:${minutes} - ${day}/${month}`;
}

// Función para mostrar todos los comentarios
function renderComments() {
    if (!commentsList) return;
    
    if (comments.length === 0) {
        // Mostrar mensaje si no hay comentarios
        commentsList.innerHTML = `
            <div class="comment-item glass empty-message">
                <p style="text-align: center; color: #8892a0;">✨ No hay comentarios aún. ¡Sé el primero en comentar! ✨</p>
            </div>
        `;
        return;
    }

    // Generar HTML para cada comentario
    commentsList.innerHTML = comments.map((comment, index) => `
        <div class="comment-item glass" data-comment-id="${index}">
            <div class="comment-header">
                <div class="user-avatar-placeholder">${escapeHtml(comment.name.charAt(0).toUpperCase())}</div>
                <strong>${escapeHtml(comment.name)}</strong>
                <span class="comment-date">${comment.time}</span>
                <button class="delete-btn" onclick="deleteComment(${index})">🗑️ Eliminar</button>
            </div>
            <p>${escapeHtml(comment.message)}</p>
        </div>
    `).join('');
}

// Función para escapar caracteres especiales (evita inyección HTML)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Función para agregar un nuevo comentario
function addComment(name, message) {
    // Validar que no estén vacíos
    if (!name.trim() || !message.trim()) {
        alert('Por favor, completa tu nombre y mensaje.');
        return false;
    }
    
    // Crear objeto comentario
    const newComment = {
        name: name.trim(),
        message: message.trim(),
        time: getCurrentTime()
    };
    
    // Agregar al principio del array (los más nuevos primero)
    comments.unshift(newComment);
    
    // Actualizar la vista
    renderComments();
    
    return true;
}

// Función para eliminar un comentario por su índice
function deleteComment(index) {
    if (confirm('¿Estás seguro de que quieres eliminar este comentario?')) {
        comments.splice(index, 1);  // Eliminar del array
        renderComments();           // Actualizar la vista
    }
}

// Hacer deleteComment accesible globalmente (para el onclick)
window.deleteComment = deleteComment;

// Manejar el envío del formulario
if (commentForm) {
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();  // Evitar que recargue la página
        
        const nameInput = document.getElementById('commentName');
        const messageInput = document.getElementById('commentMessage');
        
        // Agregar comentario
        const success = addComment(nameInput.value, messageInput.value);
        
        if (success) {
            // Limpiar el formulario
            nameInput.value = '';
            messageInput.value = '';
        }
    });
}

// Inicializar con comentarios de ejemplo
function initComments() {
    if (comments.length === 0) {
        comments.push({
            name: 'Entrenador_Said',
            message: '¡Increíble la nueva actualización de las fichas técnicas! Gold Ship se ve genial.',
            time: getCurrentTime()
        });
        comments.push({
            name: 'Liss_Academy',
            message: '¿Alguien sabe cuándo sale el próximo evento de Trackblazer?',
            time: getCurrentTime()
        });
        renderComments();
    }
}

// Esperar a que el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComments);
} else {
    initComments();
}