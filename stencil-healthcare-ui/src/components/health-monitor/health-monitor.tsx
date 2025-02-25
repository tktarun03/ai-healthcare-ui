import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'health-monitor',
  styleUrl: 'health-monitor.css',
  shadow: true
})
export class HealthMonitor {
  @State() healthStatus: string = "Analyzing patient vitals...";

  analyzeHealth() {
    const reports = [
      "❤️ Heart Rate: Normal - 72 BPM",
      "⚕️ Blood Pressure: 120/80 - Healthy range",
      "🌡️ Body Temperature: 98.6°F - No fever detected",
      "🔬 AI Diagnostic: Mild dehydration detected - Drink more water",
      "🛑 Alert: High Blood Sugar Levels - Consult physician"
    ];
    this.healthStatus = reports[Math.floor(Math.random() * reports.length)];
  }

  render() {
    return (
      <div class="health-box">
        <h2>AI Healthcare Monitoring Dashboard</h2>
        <button onClick={() => this.analyzeHealth()}>Analyze Vitals</button>
        <p>{this.healthStatus}</p>
      </div>
    );
  }
}
