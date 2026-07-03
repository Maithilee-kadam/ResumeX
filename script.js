document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm");

    // Map form IDs directly to preview element IDs
    const fieldMap = {
    "inputName": "viewName",
    "inputTitle": "viewTitle",
    "inputEmail": "viewEmail",
    "inputPhone": "viewPhone",
    "inputSummary": "viewSummary",
    "inputExperience": "viewExperience",
    "inputEducation": "viewEducation",
    "inputProjects": "viewProjects",
    "inputCertifications": "viewCertifications",
};

    // Live update fields text elements
    form.addEventListener("input", (e) => {
        const targetId = e.target.id;
        
        if (fieldMap[targetId]) {
            const previewEl = document.getElementById(fieldMap[targetId]);
            const sectionEl = previewEl.closest('.resume-section');
            
            // Format newlines to linebreaks for textareas
if (e.target.tagName === "TEXTAREA") {
    const text = e.target.value.trim();
    previewEl.innerHTML = text.replace(/\n/g, "<br>");
} else {
    previewEl.textContent = e.target.value.trim();
}

            // Hide section if input data is cleared out completely
            if(sectionEl) {
                sectionEl.style.display = e.target.value.trim() === "" ? "none" : "block";
            }
        }



        // Live update custom skills tags array separation
        if (targetId === "inputSkills") {
            const skillsContainer = document.getElementById("viewSkills");
            const sectionSkills = document.getElementById("secSkills");
            const cleanSkills = e.target.value.split(",")
                                              .map(s => s.trim())
                                              .filter(s => s !== "");

            skillsContainer.innerHTML = "";
            sectionSkills.style.display = cleanSkills.length === 0 ? "none" : "block";

            cleanSkills.forEach(skill => {
                const tag = document.createElement("span");
                tag.textContent = skill;
                skillsContainer.appendChild(tag);
            });
        }
    });
});
