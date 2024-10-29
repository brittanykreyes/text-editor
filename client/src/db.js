import { openDB } from 'idb';

const dbPromise = openDB('text-editor', 1, {
    upgrade(db) {
        db.createObjectStore('notes');
    },
});

export async function initDb() {
    await dbPromise;
}

export async function saveContent(content) {
    const db = await dbPromise;
    await db.put('notes', content, 'editorContent');
}

export async function getContent() {
    const db = await dbPromise;
    return await db.get('notes', 'editorContent');
}
