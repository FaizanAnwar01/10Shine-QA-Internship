# Assignment 4: API Testing & Automation with Postman
**Domain:** Quality Assurance (Manual + Automation)  
**Author:** Muhammad Faizan Anwar  

## Objective
This folder contains the deliverables for Assignment 4 of the 10Shine QA Internship Program. The objective was to design, automate, and execute a comprehensive API testing suite using Postman. The collection demonstrates proficiency in HTTP methods, variable management, data generation, API chaining, and automated assertions using the Chai framework.

## Target API
Testing was conducted against the free public REST API: `https://api.restful-api.dev/objects`

### Key Concepts Demonstrated
The Postman collection strictly follows an automated execution chain to test the entire lifecycle of a data object:
* **All Standard HTTP Methods:** Includes `POST` (Create), `GET` (Read), `PUT` (Update), `PATCH` (Partial Update), and `DELETE` (Remove).
* **Dynamic Data Generation:** Utilizes Postman's built-in dynamic variables (e.g., `{{$randomProductName}}`) within pre-request scripts to generate unique payload data per run.
* **API Chaining:** Parses the JSON response of the `POST` request to extract the generated Object ID, saving it as a collection variable to dynamically route subsequent `GET`, `PUT`, `PATCH`, and `DELETE` requests.
* **Automated Assertions (Chai):** Includes status code validation, JSON body value matching, string inclusion checks, and an **intentionally failing test case** (verifying 201 Created vs 200 OK) to demonstrate failure handling and reporting.

## 📂 Repository Contents

* **`10Shine_API_Testing_Collection.json`**
  The raw Postman Collection file. This can be imported directly into any Postman workspace to view the pre-request scripts, test assertions, and to execute the automated chain.
* **`Assignment4_API_Testing_Report_Faizan.docx`**
  The formal test execution report containing visual evidence (screenshots) of the passed/failed assertions, console logs, and the structured logic for each of the 5 API requests.