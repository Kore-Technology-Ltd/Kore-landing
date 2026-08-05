import React, { Component, type ErrorInfo, type ReactNode } from 'react'
import { trackError } from './analyticsHelpers'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class AnalyticsErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[Analytics ErrorBoundary] Caught error:', error, errorInfo)
    trackError({
      message: error.message || 'React Component Rendering Error',
      stack: error.stack || '',
      error_type: 'react_error_boundary',
      component_stack: errorInfo.componentStack || ''
    })
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div
          style={{
            padding: '40px 20px',
            textAlign: 'center',
            backgroundColor: '#fff8f6',
            color: '#b91c1c',
            fontFamily: 'Outfit, sans-serif'
          }}
        >
          <h2>Something went wrong loading this section.</h2>
          <p style={{ color: '#4b5563', marginTop: '8px' }}>
            Our team has been automatically notified. Please refresh the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: '16px',
              padding: '10px 20px',
              backgroundColor: '#194332',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
