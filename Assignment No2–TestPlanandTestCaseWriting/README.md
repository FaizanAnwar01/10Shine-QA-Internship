# Assignment 2: Test Plan and Test Case Writing
**Project:** Online Book Store (MVP)
**Domain:** Quality Assurance (Manual + Automation)
**Author:** Muhammad Faizan Anwar

##  Objective
This folder contains the deliverables for Assignment 2 of the 10Pearls 10Shine Internship Program. The objective of this phase was to translate the BDD/Gherkin acceptance criteria (from Assignment 1) into formal, executable Test Cases, manage them using the **Testworthy** platform, and execute a simulated Test Run for Sprint 1.

##  Repository Contents

* **`Assignment2_Faizan_OnlineBookStore.docx`**
  The comprehensive final report detailing the project configuration, Agile structuring (Milestones & Suites), test planning, and visual evidence (screenshots) of the execution phase.
* **`Assignment2_TestCases.docx`**
  The documented test cases derived from the user stories, categorized by priority and testing type.
* **`Test_Run_Summary_Report_TestWorthy.pdf`**
  The formal Test Run execution report generated directly from Testworthy, showcasing the Pass/Fail/Blocked statuses of the simulated MVP testing cycle.
* **`Milestone_Summary_Report_TestWorthy.pdf`**
  The generated report proving the proper configuration of the Agile "Sprint 1" milestone within the test management tool.
* **`Testworthy_TestCasesRun.json`**
  The raw data export of the test run for automated bot evaluation and data portability.

##  Testing Highlights & Strategy

To ensure robust test coverage and push beyond basic functional testing, the following strategies were implemented:
* **Agile Hierarchy:** Test cases were strictly organized using Testworthy's `Suite > Section > Case` hierarchy to match the project's Epics and User Stories.
* **Negative Testing:** Included edge cases such as invalid email formats, expired magic links, and intentional network timeouts to verify system resilience.
* **Security Testing Focus:** Based on technical sync-up discussions, specific security cases were added, including **Rate Limiting (TC-AUTH-03)** and an explicit **SQL Injection attempt on the login endpoint** to ensure input sanitization.
* **Realistic Execution:** The test run was executed realistically, marking specific tests as "Failed" with actionable bug descriptions (e.g., OTP retry limits bypassing) rather than a simple 100% pass rate. 

##  Tools Used
* **Testworthy** (Test Management, Planning, & Execution)
* **GitHub** (Version Control & Artifact Submission)
