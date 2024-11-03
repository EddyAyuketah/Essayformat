// script.js

function formatEssay() {
    const formatStyle = document.getElementById('format-style').value;
    const essayText = document.getElementById('essay-input').value.trim();

    let formattedEssay = '';

    if (formatStyle === 'apa') {
        formattedEssay = formatAPA(essayText);
    } else if (formatStyle === 'mla') {
        formattedEssay = formatMLA(essayText);
    } else if (formatStyle === 'chicago') {
        formattedEssay = formatChicago(essayText);
    }

    document.getElementById('formatted-output').innerHTML = formattedEssay;
}

function formatAPA(text) {
    const title = "Title of Your Essay";

    return `
        <div style="text-align: center;">
            <h3>${title}</h3>
            <p>Your Name</p>
            <p>Institution Name</p>
        </div>
        <br>
        <h3>Abstract</h3>
        <p style="text-indent: 50px; line-height: 1.5;">${text.substring(0, 200)}...</p>
        <hr>
        <h3>Main Content</h3>
        <p style="text-indent: 50px; line-height: 1.5;">${text}</p>
    `;
}

function formatMLA(text) {
    return `
        <div style="text-align: left;">
            <p>Your Name</p>
            <p>Instructor's Name</p>
            <p>Course Title</p>
            <p>${new Date().toLocaleDateString()}</p>
        </div>
        <h3 style="text-align: center; font-style: italic;">Title of Your Essay</h3>
        <p style="text-indent: 50px; line-height: 1.5;">${text}</p>
    `;
}

function formatChicago(text) {
    const title = "Title of Your Essay";

    return `
        <div style="text-align: center;">
            <h3 style="text-decoration: underline;">${title}</h3>
            <p>By Your Name</p>
        </div>
        <p style="text-indent: 50px; line-height: 1.5;">${text}</p>
    `;
}

function downloadFormattedEssay() {
    const formattedContent = document.getElementById('formatted-output').innerText;
    
    // Create a blob with the formatted content
    const blob = new Blob([formattedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link and trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Formatted_Essay.txt';
    document.body.appendChild(link);
    link.click();
    
    // Cleanup the temporary link
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
