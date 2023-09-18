
document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.querySelector('.profile-pic');
    
    // Animation for the profile picture on page load
    profilePic.style.transform = 'scale(0)';
    setTimeout(() => {
        profilePic.style.transition = 'transform 0.5s ease-out';
        profilePic.style.transform = 'scale(1)';
    }, 100);
});
