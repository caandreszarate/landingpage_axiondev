import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[200px] py-16 text-center">
          <p className="text-neutral-400 text-sm">
            Something went wrong loading this section.{' '}
            <button
              onClick={() => this.setState({ hasError: false })}
              className="text-indigo-400 underline hover:text-indigo-300 transition-colors"
            >
              Try again
            </button>
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
