// Add some JavaScript functionality here, if needed
console.log("JavaScript is working!");

document.getElementById('learn-more-btn').addEventListener('click', function() {
    var moreContent = document.getElementById('more-content');
    if (!moreContent.classList.contains('expanded')) {
        moreContent.classList.add('expanded');
        this.textContent = 'Less';
    } else {
        moreContent.classList.remove('expanded');
        this.textContent = 'Learn More';
    }
});








document.getElementById('learn-more-btn').addEventListener('click', function() {
    var moreContent = document.getElementById('more-content');
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        this.textContent = 'Less';
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'Learn More';
    }
});

