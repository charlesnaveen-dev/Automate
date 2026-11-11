import React, { useState, useEffect, useCallback } from 'react';
import { RouterContext, useRouter } from './RouterContext';

export function RouterProvider({ children, initialPath }) {
  const [currentPath, setCurrentPath] = useState(() => {
    if (initialPath) {
      return initialPath.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
    }
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/\/+$/, '') || '/';
      return path;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/+$/, '') || '/';
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to, { replace = false } = {}) => {
    if (typeof window === 'undefined') return;

    if (to.startsWith('#')) {
      const el = document.getElementById(to.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const cleanPath = to.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';

    if (replace) {
      window.history.replaceState({}, '', to);
    } else {
      window.history.pushState({}, '', to);
    }
    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function Link({ to, children, className = '', onClick, replace = false, activeClassName = '', ...rest }) {
  const { currentPath, navigate } = useRouter();

  if (!to) {
    return <span className={className} {...rest}>{children}</span>;
  }

  const isExternal = to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:') || to.startsWith('tel:');

  if (isExternal) {
    return (
      <a href={to} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  const cleanTarget = to.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
  const isActive = currentPath === cleanTarget && cleanTarget !== '';
  const combinedClass = [className, isActive && activeClassName].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && e.button === 0 && !e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      navigate(to, { replace });
    }
  };

  return (
    <a href={to} className={combinedClass} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
