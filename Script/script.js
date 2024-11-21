async function fetchRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];

    document.getElementById('userAvatar').src = user.picture.large;
    document.getElementById('userName').textContent = `${user.name.first} ${user.name.last}`;
}

// Fetch 
fetchRandomUser();


async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response Data:', data);
        const user = data.results[0];
        console.log('User Name:', `${user.name.first} ${user.name.last}`);
        console.log('User Email:', user.email);
        console.log('User Picture:', user.picture.large);
        document.getElementById('userAvatar').src = user.picture.large;
        document.getElementById('userName').textContent = `${user.name.first} ${user.name.last}`;
    } catch (error) {
        console.error('Error fetching random user:', error);
        document.getElementById('userName').textContent = 'Failed to fetch user';
    }
}

fetchRandomUser();

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.img-item');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index <  0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.img-content').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

showSlide(currentIndex);
