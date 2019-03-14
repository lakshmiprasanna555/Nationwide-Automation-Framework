$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/User/eclipse-workspace/BDD/Nationwide_Automation_Framework/src/main/java/Features/Find-Mortgage-Rate.feature");
formatter.feature({
  "line": 1,
  "name": "Find a mortgage rate",
  "description": "",
  "id": "find-a-mortgage-rate",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Navigate user to \u0027Nationwide mortgage Page\u0027 as a New User",
  "description": "",
  "id": "find-a-mortgage-rate;navigate-user-to-\u0027nationwide-mortgage-page\u0027-as-a-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User opens the url https://www.nationwide.co.uk",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User navigates to Mortgage rates for \u0027New mortgage customer\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "\u0027Search for a Nationwide mortgage\u0027 Page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.user_opens_the_url_https_www_nationwide_co_uk()"
});
formatter.result({
  "duration": 6136286409,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.user_navigates_to_Mortgage_rates_for_New_mortgage_customer()"
});
formatter.result({
  "duration": 2786794058,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.search_for_a_Nationwide_mortgage_Page_should_be_displayed()"
});
formatter.result({
  "duration": 173653,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Find a mortgage rate for New User",
  "description": "",
  "id": "find-a-mortgage-rate;find-a-mortgage-rate-for-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "when user is on the \u0027Search for a Nationwide mortgage\u0027 Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user selects No for Do you have a Nationwide mortgage option",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I m changing lender\u0027 Option for \u0027What type of mortgage are you looking for?\u0027 menu",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user enters \u0027Property value \u003d £300,000\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user enters \u0027Mortgage amount \u003d £150,000\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user enters \u0027Term \u003d 30 years\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Clicks on Find a Mortgage Rate button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user applies the first filter by \u0027Mortgage type \u003d Fixed\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user selects the second filter by \u0027Deal period \u003d 2 yr Fixed, 3 yr Fixed, 5 yr Fixed, 10 yr Fixed\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "And the user applies the third filter by \u0027Product fee \u003d With Fee\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "System returns the products matching the filter criterion",
  "keyword": "Then "
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.when_user_is_on_the_Search_for_a_Nationwide_mortgage_Page()"
});
formatter.result({
  "duration": 161280,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.the_user_selects_No_for_Do_you_have_a_Nationwide_mortgage_option()"
});
formatter.result({
  "duration": 307053916,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.i_m_changing_lender_Option_for_What_type_of_mortgage_are_you_looking_for_menu()"
});
formatter.result({
  "duration": 117979834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 35
    },
    {
      "val": "000",
      "offset": 39
    }
  ],
  "location": "FindAMortgageRateStepDefinition.the_user_enters_Property_value_£(int,int)"
});
formatter.result({
  "duration": 144841937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "150",
      "offset": 36
    },
    {
      "val": "000",
      "offset": 40
    }
  ],
  "location": "FindAMortgageRateStepDefinition.the_user_enters_Mortgage_amount_£(int,int)"
});
formatter.result({
  "duration": 107852465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 24
    }
  ],
  "location": "FindAMortgageRateStepDefinition.the_user_enters_Term_years(int)"
});
formatter.result({
  "duration": 81040282,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.clicks_on_Find_a_Mortgage_Rate_button()"
});
formatter.result({
  "duration": 160315017,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.the_user_applies_the_first_filter_by_Mortgage_type_Fixed()"
});
formatter.result({
  "duration": 2358954973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 53
    },
    {
      "val": "3",
      "offset": 65
    },
    {
      "val": "5",
      "offset": 77
    },
    {
      "val": "10",
      "offset": 89
    }
  ],
  "location": "FindAMortgageRateStepDefinition.the_user_selects_the_second_filter_by_Deal_period_yr_Fixed_yr_Fixed_yr_Fixed_yr_Fixed(int,int,int,int)"
});
formatter.result({
  "duration": 428444099,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.and_the_user_applies_the_third_filter_by_Product_fee_With_Fee()"
});
formatter.result({
  "duration": 752636375,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.system_returns_the_products_matching_the_filter_criterion()"
});
formatter.result({
  "duration": 471317735,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d72.0.3626.121)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027LAPTOP-55QQK7EU\u0027, ip: \u0027192.168.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.37.544315 (730aa6a5fdba15..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 72.0.3626.121, webStorageEnabled: true}\nSession ID: 2eb6cf87e0afce8451a2d079360c6038\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:160)\r\n\tat StepDefinitions.FindAMortgageRateStepDefinition.system_returns_the_products_matching_the_filter_criterion(FindAMortgageRateStepDefinition.java:226)\r\n\tat ✽.Then System returns the products matching the filter criterion(C:/Users/User/eclipse-workspace/BDD/Nationwide_Automation_Framework/src/main/java/Features/Find-Mortgage-Rate.feature:20)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 23,
  "name": "Initiate Remortgage Application as a New User",
  "description": "",
  "id": "find-a-mortgage-rate;initiate-remortgage-application-as-a-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "the list of mortgages matching the filter criterion are available",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "the user clicks on \u0027More info and apply\u0027 for the \u00275 yr Fixed\u0027 product",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the user clicks on \u0027Apply\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the system displays \u0027Start your remortgage application\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.the_list_of_mortgages_matching_the_filter_criterion_are_available()"
});
formatter.result({
  "duration": 127468055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "FindAMortgageRateStepDefinition.the_user_clicks_on_More_info_and_apply_for_the_yr_Fixed_product(int)"
});
formatter.result({
  "duration": 206135643,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.the_user_clicks_on_Apply_button()"
});
formatter.result({
  "duration": 1420316945,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.the_system_displays_Start_your_remortgage_application_page()"
});
formatter.result({
  "duration": 803138819,
  "status": "passed"
});
});