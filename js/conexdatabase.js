const db = firebase.firestore();

const taskForm = document.getElementById('task-form');

const saveTask = (email) =>
    db.collection('suscripciones').doc().set({
    email,
    
});

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = taskForm['task-email'];

    await saveTask(email.value);
    
    taskForm.reset();
    title.focus();
})