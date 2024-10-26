function addComment(postId) {
  const article = document.getElementById(postId);
  const name = article.querySelector('.name').value;
  const message = article.querySelector('.message').value;
  const commentSection = article.querySelector('.comment-section');

  if (name && message) {
      const comment = document.createElement('div');
      comment.classList.add('comment');
      comment.innerHTML = `<strong>${name}:</strong> <p>${message}</p>`;
      
      // Add a fade-in effect for new comments
      comment.style.opacity = '0';
      comment.style.transition = 'opacity 0.5s';
      commentSection.appendChild(comment);
      
      setTimeout(() => {
          comment.style.opacity = '1';
      }, 10);

      // Clear input fields
      article.querySelector('.name').value = '';
      article.querySelector('.message').value = '';
  } else {
      alert("Please enter your name and comment!");
  }
}
