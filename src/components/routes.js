import HomePage from 'pages/home/HomePage';
import AboutPage from 'pages/about/AboutPage';
import ContactPage from 'pages/contact/ContactPage';
import NotFoundPage from 'pages/notFound/NotFoundPage';
import WelcomePage from 'pages/welcome/Welcome';
import SignUpPage from 'pages/signUp/SignUpPage';
import ConfirmationSent from 'pages/confirmationSent/ConfirmationSent';

import routes from 'constants/routes';

export default [
  { path: routes.home, component: HomePage, exact: true },
  { path: routes.signUp, component: SignUpPage },
  { path: routes.about, component: AboutPage },
  { path: routes.contact, component: ContactPage },
  { path: routes.welcome, component: WelcomePage, private: true },
  { path: routes.confirmationSent, component: ConfirmationSent },
  { component: NotFoundPage }
];
