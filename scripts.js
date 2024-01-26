document.querySelectorAll('.upper-left li').forEach(item => {
    const img = item.querySelector('.img-icon');
    const normalSrc = img.getAttribute('data-normal');
    const hoverSrc = img.getAttribute('data-hover');
  
    item.addEventListener('mouseenter', () => {
      img.classList.add('fade');
      setTimeout(() => {
        img.src = hoverSrc;
        img.classList.remove('fade');
      }, 300); // This should match the transition duration
    });
  
    item.addEventListener('mouseleave', () => {
      img.classList.add('fade');
      setTimeout(() => {
        img.src = normalSrc;
        img.classList.remove('fade');
      }, 300); // This should match the transition duration
    });
  });