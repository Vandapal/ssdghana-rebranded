'use client'
import React, {Component, ErrorInfo, ReactNode} from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean,
  errorMessage: string 
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {hasError: false, errorMessage: ''}
  }

  static getDerivedStateFromError(error: Error) {
    return {hasError: true, errorMessage: error.message}
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('Error returned from error boundary', error.message, errorInfo.digest)
  }

  render(): ReactNode {
    if(this.state.hasError) {
      return <h1>An error occurred {this.state.errorMessage}</h1>
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary