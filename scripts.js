function generateRandomParagraph() {
    const paragraphs = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Integer nec odio. Praesent libero.',
        'Sed cursus ante dapibus diam. Sed nisi.',
        'Nulla quis sem at nibh elementum imperdiet.',
        'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
    ];

    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    return paragraphs[randomIndex];
}

document.getElementById('random-paragraph').textContent = generateRandomParagraph();