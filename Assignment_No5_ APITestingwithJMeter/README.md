# Assignment 5: Comprehensive API Automation & Performance Testing
**Domain:** Quality Assurance (Manual + Automation)  
**Author:** Muhammad Faizan Anwar  
**Framework:** Apache JMeter 5.6

## Project Objective
This repository contains the deliverables for Assignment 5 of the 10Shine QA Internship Program. The objective was to design, automate, and execute a data-driven API testing suite. This project bridges the gap between functional API testing and non-functional performance engineering by automating a complete CRUD (Create, Read, Update, Delete) lifecycle and subjecting the system to a localized stress test.

## Advanced QA Methodology & Architecture
To ensure scalability, stability, and true database validation without triggering public API rate limits (429 errors), a localized DevOps testing approach was utilized:

* **Local Sandbox Deployment:** A local Node.js `json-server` was deployed at `localhost:3000` to act as the target REST API. This bypassed external rate limits and prevented the false positives associated with mock APIs, allowing JMeter to physically write, update, and delete real data in a local `db.json` file.
* **Data-Driven Execution:** Dynamic test data was injected into POST requests via an external CSV file, simulating real-world variations in payload inputs.
* **API Chaining:** A JSON Extractor was implemented on the POST request to dynamically capture the newly generated object ID (`$.id`), passing it sequentially to the downstream `GET`, `PATCH`, and `DELETE` HTTP Samplers.
* **Automated Assertions:** Strict Response Assertions (201, 200, 404) and Duration Assertions were applied to validate both HTTP status codes and SLA performance thresholds.

## Repository Contents

* **`10Shine_JMeter_Faizan.jmx`**
  The master Apache JMeter Test Plan containing the globally configured HTTP Request Defaults, Header Managers, the functional CRUD Thread Group, and the concurrent Stress Test Thread Group.
* **`test_data.csv`**
  The external dataset utilized by the `CSV Data Set Config` element to dynamically populate the POST request payloads.
* **`Aggregate_Report.csv`**
  The exported metrics from the performance load test, demonstrating the system's throughput, average response times, and 0.00% error rate under concurrent load.
* **`Raw_Test_Results.csv`**
  The raw JMeter execution log containing precise timestamps, latency, and status codes for every individual request processed during the test run.
* **`Assignment5_JMeter_Report_Faizan.docx`**
  The formal test execution report detailing the architectural setup, assertion logic, and visual evidence (screenshots) of the successful functional and performance validations.