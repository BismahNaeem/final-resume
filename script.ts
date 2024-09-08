// Function to handle form submission and generate the resume
function generateResume(event: Event): void {
    event.preventDefault(); // Prevent the default form submission

    // Get user input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Create resume content
    const resumeContent = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Experience:</strong> ${experience}</p>
    `;

    // Display resume content
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    resumeOutput.innerHTML = resumeContent;

    // Show the edit, save, and generate URL buttons
    document.getElementById('editResumeButton')!.style.display = 'inline';
    document.getElementById('saveResumeButton')!.style.display = 'inline';
    document.getElementById('generateURLButton')!.style.display = 'inline';
}

// Function to enable editing mode
function enableEditing(): void {
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    resumeOutput.contentEditable = 'true'; // Make the resume editable
    resumeOutput.style.border = '1px solid #ccc'; // Add border to indicate edit mode
    resumeOutput.focus(); // Focus on the resume to start editing
}

// Function to save changes and disable editing mode
function saveChanges(): void {
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
    resumeOutput.contentEditable = 'false'; // Make the resume non-editable
    resumeOutput.style.border = 'none'; // Remove border when not in edit mode
}

// Function to generate a unique URL
function generateURL(): void {
    const uniqueURL = `http://example.com/resume/${Math.random().toString(36).substr(2, 9)}`;
    const uniqueURLElement = document.getElementById('uniqueURL') as HTMLDivElement;
    uniqueURLElement.innerHTML = `Unique URL: <a href="${uniqueURL}" target="_blank">${uniqueURL}</a>`;
}

// Function to initialize event listeners
function setupEventListeners(): void {
    const form = document.getElementById('resumeForm');
    const editButton = document.getElementById('editResumeButton');
    const saveButton = document.getElementById('saveResumeButton');
    const generateURLButton = document.getElementById('generateURLButton');

    // Check if elements exist before attaching event listeners
    if (form) form.addEventListener('submit', generateResume);
    if (editButton) editButton.addEventListener('click', enableEditing);
    if (saveButton) saveButton.addEventListener('click', saveChanges);
    if (generateURLButton) generateURLButton.addEventListener('click', generateURL);
}

// Initialize event listeners when the page loads
setupEventListeners();