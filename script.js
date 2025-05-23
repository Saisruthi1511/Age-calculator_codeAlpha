document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
});
