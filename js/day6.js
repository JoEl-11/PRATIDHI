//redirecting to each stage
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const stageId = button.id;
        window.location.href = `/templates/day6/day6-${stageId}.html`;
    });
})