const iconLinks = document.querySelectorAll('.icon-link');

iconLinks.forEach(iconLink => {
  const initialLikeCount = Math.floor(Math.random() * 100) + 1;
  
  iconLink.querySelector('.icon-container .like-count').innerText = initialLikeCount;

  iconLink.addEventListener('click', function(event) {

    let likeCount = parseInt(this.querySelector('.icon-container .like-count').innerText.trim());

    if (this.classList.contains('liked')) {
      likeCount--;
      this.classList.remove('liked');
      
    } else {
      likeCount++;
      this.classList.add('liked');
    }

    this.querySelector('.icon-container .like-count').innerText = likeCount;
  });
});
