function solve() {
    const rightAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
    let correctCount = 0;
    let currentStep = 0;


    const sections = document.querySelectorAll('section');
    const resultSection = document.getElementById('results');
    const resultMessage = resultSection.querySelector('h1');

    document.querySelectorAll('.quiz-answer').forEach(answer => {
        answer.addEventListener('click', (event) => {
            const selectedAnswer = event.target.textContent;

        
            if (selectedAnswer === rightAnswers[currentStep]) {
                correctCount++;
            }

            sections[currentStep].style.display = 'none';
            currentStep++;

            if (currentStep < sections.length) {
                sections[currentStep].style.display = 'block';
            } else {
                displayResults(correctCount);
            }
        });
    });

    function displayResults(correctCount) {
        resultSection.style.display = 'block';

        if (correctCount === rightAnswers.length) {
            resultMessage.textContent = "You are recognized as top JavaScript fan!";
        } else {
            resultMessage.textContent = `You have ${correctCount} right answers`;
        }
    }

    sections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = '';
        }
    });

    resultSection.style.display = 'none';
}
