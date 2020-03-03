import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/about/AboutPage';
import ContactPage from '../pages/contact/ContactPage';
import NotFoundPage from '../pages/notFound/NotFoundPage';
import WelcomePage from '../pages/welcome/Welcome'

export default [
  { path: '/', component: HomePage, exact: true },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/welcome', component: WelcomePage },
  { component: NotFoundPage }
];
