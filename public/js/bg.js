
function generateParticles(n) {
    let value = `${getRandom(2560)}px ${getRandom(2560)}px #98141d`;
    for (let i = 2; i <= n; i++) {
      // Alternate between red and green
      const color = i % 2 === 0 ? '#98141d' : '#006233';
      value += `, ${getRandom(2560)}px ${getRandom(2560)}px ${color}`;
    }
    return value;
  }

  function generateStars(n) {
    let value = `${getRandom(2560)}px ${getRandom(2560)}px #fff`;
    for (let i = 2; i <= n; i++) {
      value += `, ${getRandom(2560)}px ${getRandom(2560)}px #fff`;
    }
    return value;
  }

  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  function initSectionBG(sectionId) {
    const particlesSmall = generateParticles(300);
    const particlesMedium = generateParticles(150);
    const particlesLarge = generateParticles(75);
    
    // Initialize particles for the section
    const particles1 = document.getElementById(`particles1-${sectionId}`);
    const particles2 = document.getElementById(`particles2-${sectionId}`);
    const particles3 = document.getElementById(`particles3-${sectionId}`);

    if (particles1) {
      particles1.style.cssText = `
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow: ${particlesSmall};
      animation: animStar 50s linear infinite;
      `;
    }

    if (particles2) {
      particles2.style.cssText = `
      width: 1.5px;
      height: 1.5px;
      border-radius: 50%;
      box-shadow: ${particlesMedium};
      animation: animateParticle 100s linear infinite;
      `;
    }

    if (particles3) {
      particles3.style.cssText = `
      width: 2px;
      height: 2px;
      border-radius: 50%;
      box-shadow: ${particlesLarge};
      animation: animateParticle 150s linear infinite;
      `;
    }

    // Initialize stars for the section
    const starsSmall = generateStars(300);
    const starsMedium = generateStars(150);
    const starsLarge = generateStars(75);
    const stars1 = document.getElementById(`stars1-${sectionId}`);
    const stars2 = document.getElementById(`stars2-${sectionId}`);
    const stars3 = document.getElementById(`stars3-${sectionId}`);

    if (stars1) {
      stars1.style.cssText = `
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow: ${starsSmall};
      animation: animStar 50s linear infinite;
      `;
    }

    if (stars2) {
      stars2.style.cssText = `
      width: 1.5px;
      height: 1.5px;
      border-radius: 50%;
      box-shadow: ${starsMedium};
      animation: animateParticle 100s linear infinite;
      `;
    }

    if (stars3) {
      stars3.style.cssText = `
      width: 2px;
      height: 2px;
      border-radius: 50%;
      box-shadow: ${starsLarge};
      animation: animateParticle 150s linear infinite;
      `;
    }
  }

  function initBG() {
    // Initialize hero section (original)
    const particlesSmall = generateParticles(1000);
    const particlesMedium = generateParticles(500);
    const particlesLarge = generateParticles(250);
    const particles1 = document.getElementById('particles1');
    const particles2 = document.getElementById('particles2');
    const particles3 = document.getElementById('particles3');

    if (particles1) {
      particles1.style.cssText = `
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow: ${particlesSmall};
      animation: animStar 50s linear infinite;
      `;
    }

    if (particles2) {
      particles2.style.cssText = `
      width: 1.5px;
      height: 1.5px;
      border-radius: 50%;
      box-shadow: ${particlesMedium};
      animation: animateParticle 100s linear infinite;
      `;
    }

    if (particles3) {
      particles3.style.cssText = `
      width: 2px;
      height: 2px;
      border-radius: 50%;
      box-shadow: ${particlesLarge};
      animation: animateParticle 150s linear infinite;
      `;
    }

    const starsSmall = generateStars(1000);
    const starsMedium = generateStars(500);
    const starsLarge = generateStars(250);
    const stars1 = document.getElementById('stars1');
    const stars2 = document.getElementById('stars2');
    const stars3 = document.getElementById('stars3');

    if (stars1) {
      stars1.style.cssText = `
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow: ${starsSmall};
      animation: animStar 50s linear infinite;
      `;
    }

    if (stars2) {
      stars2.style.cssText = `
      width: 1.5px;
      height: 1.5px;
      border-radius: 50%;
      box-shadow: ${starsMedium};
      animation: animateParticle 100s linear infinite;
      `;
    }

    if (stars3) {
      stars3.style.cssText = `
      width: 2px;
      height: 2px;
      border-radius: 50%;
      box-shadow: ${starsLarge};
      animation: animateParticle 150s linear infinite;
      `;
    }

    // Initialize additional sections
    initSectionBG('mission');
    initSectionBG('testimonials');
  }

  document.addEventListener('astro:after-swap', initBG);
  initBG();