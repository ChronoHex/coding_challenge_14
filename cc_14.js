// task 2
function addTicket(customerName, issueDescription, priorityLevel) {
    const ticketContainer = document.getElementById('ticketContainer');

    // making a div for tickets
    const ticket = document.createElement('div');
    ticket.setAttribute('class', 'ticket');

    // section for customer's name
    const nameHeading = document.createElement('h2');
    nameHeading.textContent = customerName;

    // section for issue description
    const issueText= document.createElement('p');
    issueText.textContent = issueDescription;

    // section for priority level
    const priorityState = document.createElement('span');
    priorityState.textContent = `Priority: ${priorityLevel}`;
    priorityState.setAttribute('class', priorityLevel.toLowerCase());

    // making a button to resolve ticket issue
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button');

    // task 4
    resolveButton.addEventListener('click', function(event) {
        ticketContainer.removeChild(ticket); // removing ticket from container
        event.stopPropagation();
    })

    // section for appending elements to ticket
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueText);
    ticket.appendChild(priorityState);
    ticket.appendChild(resolveButton);
    ticketContainer.appendChild(ticket); // appending ticket to container

    
    // task 5
    ticket.addEventListener('dblclick', function() {
        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.value = nameHeading.textContent;

        const issueInput = document.createElement('input');
        issueInput.setAttribute('type', 'text');
        issueInput.value = issueInput.textContent;

        const priorityInput = document.createElement('input');
        priorityInput.setAttribute('type', 'text');
        priorityInput.value = priorityState.textContent.split(": ")[1]; // trying to get current priority

        // making save button
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        // clearing current content
        ticket.innerHTML = '';

        // appending again just in case
        ticket.appendChild(nameInput);
        ticket.appendChild(issueInput);
        ticket.appendChild(priorityInput);
        ticket.appendChild(saveButton);

        // save button listener
        saveButton.addEventListener('click', function() {
            // updating new values
            nameHeading.textContent = nameInput.value;
            issueText.textContent = issueInput.value;
            priorityState.textContent = `Priority: ${priorityInput.value}`;
            priorityState.setAttribute('class', priorityInput.value.toLowerCase());

            // reverting back fields to static text
            ticket.innerHTML = '';
            ticket.appendChild(nameHeading);
            ticket.appendChild(issueText);
            ticket.appendChild(priorityState);
            ticket.appendChild(resolveButton);
        });
    });
}

// Task 3 
// making a function to highlight tickets
function highlightHighPriorityTickets() {
    const highlightHighPriorityTickets = document.querySelectorAll('.high');
    const highPriorityArray = Array.from(highlightHighPriorityTickets);

    highPriorityArray.forEach(ticket => {
        ticket.style.backgroundColor = 'lightblue'; // setting a highlight color
        ticket.style.border = '2px solid green'; // added a border
    });
}

highlightHighPriorityTickets()

// attaching an event listener to ticketContainer
const ticketContainer = document.getElementById('ticketContainer');
ticketContainer.addEventListener('click', function() {
    console.log('A ticket was clicked')
});

// examples;

addTicket('Victor Handson', 'Cannot delete account', 'High');
addTicket('Gerald Jackson', 'Page not showing', 'Low');