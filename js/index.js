//intro video
document.getElementById('introVideo').addEventListener('ended', () => {
    document.getElementById('videoContainer').style.display = 'none';
    
    let content=document.getElementById('content');
    content.classList.add('show');
});

//redirecting to each days
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const dayId = button.id;
        window.location.href = '/templates/${dayId}/${dayId}.html';
    });
});
