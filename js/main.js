// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {

    // HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
    // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
    let openWindow = document.getElementById('btnAddEmployee');
    openWindow.addEventListener('click', () => window.open('add-employee.html', 'popup', 'width=400, height=400'));
    
});



