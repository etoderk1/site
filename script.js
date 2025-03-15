// Управление окнами
document.querySelectorAll('.minecraft-close').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.minecraft-window').style.display = 'none';
    });
});

document.querySelectorAll('.minecraft-minimize').forEach(button => {
    button.addEventListener('click', () => {
        const windowContent = button.closest('.minecraft-window').querySelector('.minecraft-window-content');
        windowContent.style.display = windowContent.style.display === 'none' ? 'block' : 'none';
    });
});

document.querySelectorAll('.minecraft-maximize').forEach(button => {
    button.addEventListener('click', () => {
        const window = button.closest('.minecraft-window');
        window.style.width = window.style.width === '90%' ? '300px' : '90%';
    });
});

// Экран входа
const entryScreen = document.getElementById('entry-screen');
const entryButton = document.getElementById('entry-button');

entryButton.addEventListener('click', () => {
    entryScreen.classList.add('hidden');
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

// Перемещение окон (если нужно)
document.querySelectorAll('.minecraft-window').forEach(window => {
    const header = window.querySelector('.minecraft-window-header');
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - window.getBoundingClientRect().left;
        offsetY = e.clientY - window.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            window.style.left = `${e.clientX - offsetX}px`;
            window.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});