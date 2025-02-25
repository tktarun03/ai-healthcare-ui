import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Healthcare Monitoring UI Dashboard</h1>
    <div class="dashboard">
      <health-monitor></health-monitor>
      <wasm-health-analysis></wasm-health-analysis>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }