import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    isError: false,
  };

  static getDerivedStateFromError(error) {
    // Mengembalikan objek untuk memperbarui state
    return { isError: true };
  }

  render() {
    if (this.state.isError) {
      // Menampilkan fallback UI ketika terjadi error
      return <div>Something went wrong</div>;
    }

    // Jika tidak ada error, render children
    return this.props.children;
  }
}

export default ErrorBoundary;
