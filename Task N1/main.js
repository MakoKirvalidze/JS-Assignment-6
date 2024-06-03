

    const dialog = document.getElementById('myDialog');
    const openBtn = document.getElementById('openDialog');
    const closeBtn = document.getElementById('closeDialog');

    openBtn.addEventListener('click', () => {
      dialog.showModal();
    });

    closeBtn.addEventListener('click', () => {
      dialog.close();
    });



