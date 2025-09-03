let currentStep = 'start';
let selectedEvent = '';
let selectedSeats = [];

function showStep(stepId) {
    document.querySelectorAll('.step').forEach(el => el.style.display = 'none');
    document.getElementById(stepId).style.display = 'block';
}

function nextStep(stepId) {
    document.getElementById(currentStep).classList.remove('active');
    currentStep = stepId;
    document.getElementById(stepId).classList.add('active');
    showStep(stepId);
}

function prevStep() {
    // Simple back function based on current step
    const steps = ['start', 'home', 'login', 'events', 'select-seats', 'cart', 'payment', 'payment-success', 'ticket', 'email', 'end'];
    let currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
        nextStep(steps[currentIndex - 1]);
    }
}

function selectEvent(event) {
    selectedEvent = event;
    document.getElementById('selected-event').textContent = event;
    document.getElementById('ticket-event').textContent = event;
    document.getElementById('view-events-btn').style.display = 'block';
}

function toggleSeat(seat) {
    if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        selectedSeats = selectedSeats.filter(s => s !== seat.textContent);
    } else {
        seat.classList.add('selected');
        selectedSeats.push(seat.textContent);
    }
    document.getElementById('cart-seats').textContent = selectedSeats.join(', ');
    document.getElementById('ticket-seats').textContent = selectedSeats.join(', ');
}

function resetFlow() {
    selectedEvent = '';
    selectedSeats = [];
    nextStep('start');
}

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulated login
    alert('Logged in successfully!');
    nextStep('events');
});

document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulated payment success
    alert('Payment successful!');
    nextStep('payment-success');
});

// Add email sending simulation if needed
document.querySelector('#email .btn-primary').addEventListener('click', function() {
    const email = document.getElementById('email-input').value;
    if (email) {
        alert('Confirmation email sent to ' + email);
        nextStep('end');
    } else {
        alert('Please enter your email.');
    }
});
</content>
</create_file>
