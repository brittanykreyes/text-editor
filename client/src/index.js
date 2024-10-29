import { initDb, saveContent, getContent } from './db.js';

const editor = document.getElementById('editor');

initDb().then(() => {
    getContent().then(content => {
        editor.value = content || '';
    });

    editor.addEventListener('blur', () => {
        saveContent(editor.value);
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Service Worker registered', reg))
            .catch(err => console.error('Service Worker registration failed', err));
    });
}
