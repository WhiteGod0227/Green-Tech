// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    // Password Toggle
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.classList.toggle('fa-eye');
            togglePassword.classList.toggle('fa-eye-slash');
        });
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const role = document.getElementById('role').value;
        const username = document.getElementById('username').value;
        const password = passwordInput.value;

        // Add loading state
        const loginBtn = document.querySelector('.login-btn');
        const originalText = loginBtn.innerHTML;
        loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
        loginBtn.disabled = true;

        // Simulate API call with timeout
        setTimeout(() => {
            if (role === "admin") {
                window.location.href = "dashboard.html";
            } else {
                alert("Login successful for " + role);
                loginBtn.innerHTML = originalText;
                loginBtn.disabled = false;
            }
        }, 1500);
    });
}
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});

// Add hover effect for icons or interactive elements
document.querySelectorAll('button, .sidebar-link, a, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});
// Charts
const wasteChart = document.getElementById('wasteChart');
if (wasteChart) {
    new Chart(wasteChart, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Waste Collected (kg)',
                data: [500, 700, 600, 800, 750],
                backgroundColor: '#10B981'
            }]
        },
        options: { responsive: true }
    });
}

const truckChart = document.getElementById('truckChart');
if (truckChart) {
    new Chart(truckChart, {
        type: 'pie',
        data: {
            labels: ['Active', 'Idle', 'Maintenance'],
            datasets: [{
                label: 'Trucks Status',
                data: [120, 20, 10],
                backgroundColor: ['#10B981', '#FACC15', '#EF4444']
            }]
        },
        options: { responsive: true }
    });
}