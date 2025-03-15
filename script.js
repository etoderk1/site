// Управление окнами
document.querySelectorAll('.windows-close').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.windows-window').style.display = 'none';
    });
});

document.querySelectorAll('.windows-minimize').forEach(button => {
    button.addEventListener('click', () => {
        const windowContent = button.closest('.windows-window').querySelector('.windows-window-content');
        windowContent.style.display = windowContent.style.display === 'none' ? 'block' : 'none';
    });
});

document.querySelectorAll('.windows-maximize').forEach(button => {
    button.addEventListener('click', () => {
        const window = button.closest('.windows-window');
        window.style.width = window.style.width === '90%' ? '300px' : '90%';
    });
});

// Фоновая музыка
const backgroundMusic = document.getElementById('background-music');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.getElementById('volume-icon');

backgroundMusic.volume = volumeSlider.value / 100; // Устанавливаем начальную громкость

volumeSlider.addEventListener('input', () => {
    backgroundMusic.volume = volumeSlider.value / 100;

    // Меняем иконку в зависимости от громкости
    if (volumeSlider.value == 0) {
        volumeIcon.className = 'fas fa-volume-mute';
    } else if (volumeSlider.value < 50) {
        volumeIcon.className = 'fas fa-volume-down';
    } else {
        volumeIcon.className = 'fas fa-volume-up';
    }
});

// Градиентный след за курсором
const cursorGradient = document.querySelector('.cursor-gradient');

document.addEventListener('mousemove', (e) => {
    cursorGradient.style.left = `${e.clientX}px`;
    cursorGradient.style.top = `${e.clientY}px`;
});

// Экран входа
const entryScreen = document.getElementById('entry-screen');
const entryButton = document.getElementById('entry-button');

entryButton.addEventListener('click', () => {
    entryScreen.classList.add('hidden');
    backgroundMusic.play().catch(error => {
        console.error('Ошибка воспроизведения аудио:', error);
    });
});

// Копирование IP
const copyIpButton = document.getElementById('copy-ip-button');
copyIpButton.addEventListener('click', () => {
    const ip = 'play.spinbox.fun';
    navigator.clipboard.writeText(ip).then(() => {
        alert('IP скопирован: ' + ip);
    }).catch(() => {
        alert('Не удалось скопировать IP');
    });
});