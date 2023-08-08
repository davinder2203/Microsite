document.addEventListener('DOMContentLoaded', function () {
    createGlobalHeader(); // Calling the function to create the global header
    createGlobalFooter(); // Calling the function to create the global footer
  });
  

//   declaring function for the global header
  function createGlobalHeader() {
    const header = document.createElement('header');
    header.classList.add('global-header');
  
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');
  
    const logo = document.createElement('div');
    logo.classList.add('logo');
    const logoImage = document.createElement('img');
    logoImage.src = './images/nintendo.jpg';
    logoImage.alt = 'Your Logo';
    logo.appendChild(logoImage);
  
    const nav = document.createElement('nav');
    const navLinks = document.createElement('ul');
    navLinks.classList.add('nav-links');
    const navItems = [
      { title: 'Home', link: 'index.html' },
      { title: 'About', link: 'about.html' },
      { title: 'Product', link: 'product.html' },
      { title: 'Contact', link: 'contact.html' },
    ];
  
    navItems.forEach(item => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = item.title;
      listItem.appendChild(link);
      navLinks.appendChild(listItem);
    });
  
    
    nav.appendChild(navLinks);
    headerContainer.appendChild(logo);
    headerContainer.appendChild(nav);
    header.appendChild(headerContainer);
  
    const globalHeader = document.getElementById('global-header');
    globalHeader.appendChild(header);
  }
  
//   declaring global footer
  function createGlobalFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('global-footer');
  
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');
  
    const copyrightText = document.createElement('p');
    copyrightText.textContent = `1993 Nintendo. All rights reserved.`;
  
    footerContainer.appendChild(copyrightText);
    footer.appendChild(footerContainer);
  
    const globalFooter = document.getElementById('global-footer');
    globalFooter.appendChild(footer);
  }