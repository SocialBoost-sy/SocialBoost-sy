// Tips Array
const tips = [
    "Engage with your followers regularly.",
    "Post high-quality, consistent content.",
    "Use trending hashtags relevant to your niche.",
    "Collaborate with other creators in your niche.",
    "Post at optimal times for your audience.",
    "Analyze your performance and adjust strategies accordingly.",
    "Create shareable content that provides value.",
    "Interact with comments and messages promptly.",
    "Experiment with different content formats (e.g., videos, polls).",
    "Monitor competitor accounts to find new strategies."
];

// DOM Elements
const tipList = document.getElementById('tipList');
const generateTip = document.getElementById('generateTip');
const randomTip = document.getElementById('randomTip');
const saveTip = document.getElementById('saveTip');
const loginForm = document.getElementById('loginForm');
const loginStatus = document.getElementById('loginStatus');

// Generate Tip List
tips.forEach(tip => {
    const tipItem = document.createElement('div');
    tipItem.className = 'tip-item';
    tipItem.textContent = tip;
    tipList.appendChild(tipItem);
});

// Generate Random Tip
generateTip.addEventListener('click', () => {
    const tip = tips[Math.floor(Math.random() * tips.length)];
    randomTip.textContent = `?? ${tip}`;
});

// Save Tip Locally
saveTip.addEventListener('click', () => {
    if (randomTip.textContent) {
        const savedTips = JSON.parse(localStorage.getItem('savedTips')) || [];
        savedTips.push(randomTip.textContent);
        localStorage.setItem('savedTips', JSON.stringify(savedTips));
        alert('Tip saved!');
    } else {
        alert('Generate a tip first!');
    }
});

// Login Functionality
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === '1234') {
        loginStatus.textContent = 'Login successful!';
        loginStatus.style.color = 'green';
    } else {
        loginStatus.textContent = 'Invalid credentials. Try again.';
        loginStatus.style.color = 'red';
    }
});

// Analytics Chart
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Followers', 'Likes', 'Shares', 'Comments'],
        datasets: [{
            label: 'Engagement Metrics',
            data: [50, 100, 75, 30],
            backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#FF5722']
        }]
    }
});