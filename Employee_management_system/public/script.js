function saveEmployee(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('employeeForm'));
    const data = Object.fromEntries(formData.entries());

    fetch('http://localhost:5000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(() => {
        window.location.href = 'view-employee.html'; // Redirect to the view page
    })
    .catch(error => console.error('Error saving employee:', error));
}

document.getElementById('employeeForm').addEventListener('submit', saveEmployee);
