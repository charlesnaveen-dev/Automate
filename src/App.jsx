import React from 'react';
import { RouterProvider } from './router/Router';
import { useRouter } from './router/RouterContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import HomePage from './pages/HomePage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import AiAgentsPage from './pages/AiAgentsPage';
import WorkflowAutomationPage from './pages/WorkflowAutomationPage';
import VoiceAiPage from './pages/VoiceAiPage';
import CustomAiPage from './pages/CustomAiPage';
import UseCasesPage from './pages/UseCasesPage';
import IndustriesPage from './pages/IndustriesPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import BlueprintsPage from './pages/BlueprintsPage';
import IntegrationsPage from './pages/IntegrationsPage';
import EngagementPage from './pages/EngagementPage';
import SecurityPage from './pages/SecurityPage';
import FaqPage from './pages/FaqPage';
import StartProjectPage from './pages/StartProjectPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function NotFoundPage() {
  return (
    <div className="not-found-page" style={{ padding: '120px 24px', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '640px', margin: '0 auto' }}>
        <span style={{ fontFamily: 'monospace', fontSize: '1rem', color: 'var(--accent-purple, #6366f1)', fontWeight: 700 }}>
          ERROR 404
        </span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '16px 0 12px 0', color: 'var(--text-primary)' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
          The requested page does not exist or has been moved. You can return to our homepage or explore our core automation capabilities.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="md" href="/">
            Return Home
          </Button>
          <Button variant="secondary" size="md" href="/capabilities">
            View Capabilities
          </Button>
        </div>
      </div>
    </div>
  );
}

function RouteSwitcher() {
  const { currentPath } = useRouter();
  useScrollReveal(currentPath);

  let PageComponent = null;

  switch (currentPath) {
    case '/':
      PageComponent = HomePage;
      break;
    case '/capabilities':
      PageComponent = CapabilitiesPage;
      break;
    case '/capabilities/ai-agents':
      PageComponent = AiAgentsPage;
      break;
    case '/capabilities/workflow-automation':
      PageComponent = WorkflowAutomationPage;
      break;
    case '/capabilities/voice-ai':
      PageComponent = VoiceAiPage;
      break;
    case '/capabilities/custom-ai-solutions':
    case '/capabilities/custom-ai':
      PageComponent = CustomAiPage;
      break;
    case '/use-cases':
      PageComponent = UseCasesPage;
      break;
    case '/industries':
      PageComponent = IndustriesPage;
      break;
    case '/process':
      PageComponent = ProcessPage;
      break;
    case '/about':
      PageComponent = AboutPage;
      break;
    case '/blueprints':
      PageComponent = BlueprintsPage;
      break;
    case '/integrations':
      PageComponent = IntegrationsPage;
      break;
    case '/engagement':
      PageComponent = EngagementPage;
      break;
    case '/security':
      PageComponent = SecurityPage;
      break;
    case '/faq':
      PageComponent = FaqPage;
      break;
    case '/start-project':
      PageComponent = StartProjectPage;
      break;
    case '/contact':
      PageComponent = ContactPage;
      break;
    case '/privacy':
      PageComponent = PrivacyPage;
      break;
    case '/terms':
      PageComponent = TermsPage;
      break;
    default:
      PageComponent = NotFoundPage;
      break;
  }

  return <PageComponent />;
}

export default function App() {
  return (
    <RouterProvider>
      <div className="app-container">
        <Header />
        <main id="main-content">
          <RouteSwitcher />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}
