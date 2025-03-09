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

    // section for appending elements to ticket
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueText);
    ticket.appendChild(priorityState);
    ticket.appendChild(resolveButton);
    ticketContainer.appendChild(ticket); // appending ticket to container
}

// Task 3 
// making a function to highlight tickets
function highlightHighPriorityTickets() {
    const highlightHighPriorityTickets = document.querySelectorAll('.high');
    const highPriorityArray = Array.from(highlightHighPriorityTickets);

    highPriorityArray.forEach(ticket => {
        ticket.computedStyleMap.backgroundColor = 'lightblue' // setting a highlight color
        ticket.style.border = '2px green'; // added a border
    });
}

highlightHighPriorityTickets()

// examples
addTicket('Victor Handson', 'Cannot delete account', 'High');
addTicket('Gerald Jackson', 'Page not showing', 'Low');


