document.getElementById('formulario-noticia').addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const texto = document.getElementById('texto').value;

    const noticia = document.createElement('div');
    noticia.classList.add('noticia');
    
    const h3 = document.createElement('h3');
    h3.textContent = titulo;
    
    const p = document.createElement('p');
    p.textContent = texto;

    noticia.appendChild(h3);
    noticia.appendChild(p);

    document.getElementById('contenedor-noticias').appendChild(noticia);

    document.getElementById('formulario-noticia').reset();
});
