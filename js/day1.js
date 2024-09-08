//redirecting to each stage
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const stageId = button.id;
        window.location.href = `/templates/day1/day1-${stageId}.html`;
    });
})