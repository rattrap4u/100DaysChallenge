document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        // Close all other accordion items
        document.querySelectorAll('.accordion-content').forEach(content => {
            if (content !== this.nextElementSibling) {
                content.style.maxHeight = null;
            }
        });

        // Toggle the clicked accordion item
        const content = this.nextElementSibling;
        this.classList.toggle('active');
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});