# Assignment 3: Bug Reporting & Exploratory Testing
**Domain:** Quality Assurance (Manual + Automation)  
**Author:** Muhammad Faizan Anwar  

## Objective
This folder contains the deliverables for Assignment 3 of the 10Shine QA Internship Program. The objective was to perform exploratory testing, identify functional and UI defects on sample web applications, and document them in an industry-standard bug reporting format.

## Targets Tested
To demonstrate comprehensive QA capabilities, testing was conducted across two distinct web applications, uncovering a total of 10 high-impact bugs:

1. **TutorialsNinja (E-commerce):** Focus was placed on business logic, cart calculation, and product options. 
2. **Altoro Mutual (Banking):** Focus was placed on authentication, access control, and input validation logic.

### Common Bug Themes Discovered
Across both platforms, several critical patterns of failure were identified:
* **Missing Server-Side Validation:** Both applications trusted client-side inputs too heavily, allowing negative integers to bypass logic (e.g., negative shopping cart quantities and negative bank transfers).
* **Unsanitized Inputs:** Lack of HTML encoding allowed inputs to break UI layouts and structure.
* **Access & State Control Failures:** Sessions failing to invalidate properly, and IDOR vulnerabilities allowing unauthorized access to cross-user data.

## 📂 Repository Contents

### Primary Documents
* **`Bug_Report_Faizan_Anwar.xlsx`**
  The master defect log containing 10 meticulously documented bugs, including Steps to Reproduce, Test Data, Expected vs. Actual Results, Severity, and Priority mappings.
* **`Release_Notes_v1.1.0.docx`**
  A mock outward-facing Release Notes document summarizing the security patches and functional fixes for the discovered vulnerabilities.

### Visual Evidence (Screenshots)
* **`BUG-TN-*` (TutorialsNinja)**
  * `BUG-TN-001_negative_qty_input.png` *(Cart validation failure)*
  * `BUG-TN-002_empty_dropdown_options.png` *(Missing product variants)*
  * `BUG-TN-003_past_delivery_date.png` *(Calendar validation failure)*
  * `BUG-TN-004_negative_cart_total.png` *(Negative subtotal logic break)*
  * `BUG-TN-005_hardcoded_min_qty_error.png` *(Quantity error handling)*
  * `BUG-TN-006_search_dos_crash.png` *(Server crash on oversized input)*
* **`BUG-AM-*` (Altoro Mutual)**
  * `BUG-AM-001_sql_login_bypass.png` *(Authentication bypass)*
  * `BUG-AM-002_search_html_injection.png` *(UI rendering distortion)*
  * `BUG-AM-003_invalid_email_format.png` *(Form validation failure)*
  * `BUG-AM-004_idor_account_access.png` *(Unauthorized data access via URL manipulation)*