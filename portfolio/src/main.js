import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mob-nav.css';
import '../styles/utils.css';

import mobNav from './utils/mob-nav'
import darkMode  from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading';

mobNav();
darkMode();
lazyLoading();