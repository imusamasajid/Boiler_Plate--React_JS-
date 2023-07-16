import React from "react";

import { Footer, SlidePanel } from "../components";

export default function Charts() {
  return (
    <div className="app">
      <SlidePanel />
      <div className="app-wrapper">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
            <h1 className="app-page-title">Charts</h1>
            <div className="app-card shadow-sm mb-4 border-left-decoration">
              <div className="inner">
                <div className="app-card-body p-4">
                  <div className="row gx-5 gy-3">
                    <div className="col-12 col-lg-9">
                      <div>
                        You can use
                        <a href="https://www.chartjs.org/" target="_blank">
                          Chart.js
                        </a>
                        to create charts for your app. To configure the charts
                        on this page you can edit the relevant JavaScript file:
                        <code>assets/js/charts-demo.js</code>
                      </div>
                    </div>
                    <div className="col-12 col-lg-3">
                      <a
                        className="btn app-btn-primary"
                        href="https://www.chartjs.org/docs/latest/"
                        target="_blank"
                      >
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          className="bi bi-arrow-up-right-square me-2"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRole="evenodd"
                            d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                          />
                          <path
                            fillRole="evenodd"
                            d="M5.172 10.828a.5.5 0 0 0 .707 0l4.096-4.096V9.5a.5.5 0 1 0 1 0V5.525a.5.5 0 0 0-.5-.5H6.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
                          />
                        </svg>
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 mb-4">
              <div className="col-12 col-lg-6">
                <div className="app-card app-card-chart h-100 shadow-sm">
                  <div className="app-card-header p-3 border-0">
                    <h4 className="app-card-title">Area Line Chart Demo</h4>
                  </div>
                  <div className="app-card-body p-4">
                    <div className="chart-container">
                      <canvas id="chart-line"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="app-card app-card-chart h-100 shadow-sm">
                  <div className="app-card-header p-3 border-0">
                    <h4 className="app-card-title">Bar Chart Demo</h4>
                  </div>
                  <div className="app-card-body p-4">
                    <div className="chart-container">
                      <canvas id="chart-bar"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="app-card app-card-chart h-100 shadow-sm">
                  <div className="app-card-header p-3 border-0">
                    <h4 className="app-card-title">Pie Chart Demo</h4>
                  </div>
                  <div className="app-card-body p-4">
                    <div className="chart-container">
                      <canvas id="chart-pie"></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="app-card app-card-chart h-100 shadow-sm">
                  <div className="app-card-header p-3 border-0">
                    <h4 className="app-card-title">Doughnut Chart Demo</h4>
                  </div>
                  <div className="app-card-body p-4">
                    <div className="chart-container">
                      <canvas id="chart-doughnut"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
