import HomePage from 'pages/home/HomePage';
import AboutPage from 'pages/about/AboutPage';
import NotFoundPage from 'pages/notFound/NotFoundPage';
import WelcomePage from 'pages/welcome/WelcomePage';
import SignUpPage from 'pages/signUp/SignUpPage';
import ConfirmationSent from 'pages/confirmationSent/ConfirmationSent';
import DashboardPage from 'pages/DashboardPage';
import NewTargetPage from 'pages/NewTargetPage';

import routes from 'constants/routes';

export default [
  { path: routes.home, component: HomePage, exact: true },
  { path: routes.signUp, component: SignUpPage },
  { path: routes.about, component: AboutPage },
  { path: routes.welcome, component: WelcomePage, private: true },
  { path: routes.confirmationSent, component: ConfirmationSent },
  { path: routes.dashboard, component: DashboardPage, private: true },
  { path: routes.newTarget, component: NewTargetPage, private: true },
  { component: NotFoundPage }
];
