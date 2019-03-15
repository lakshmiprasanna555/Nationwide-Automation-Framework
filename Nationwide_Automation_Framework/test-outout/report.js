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
  "duration": 7119126715,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.user_navigates_to_Mortgage_rates_for_New_mortgage_customer()"
});
formatter.result({
  "duration": 2434228850,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.search_for_a_Nationwide_mortgage_Page_should_be_displayed()"
});
formatter.result({
  "duration": 280746,
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
  "duration": 158721,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.the_user_selects_No_for_Do_you_have_a_Nationwide_mortgage_option()"
});
formatter.result({
  "duration": 255117871,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.i_m_changing_lender_Option_for_What_type_of_mortgage_are_you_looking_for_menu()"
});
formatter.result({
  "duration": 127409602,
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
  "duration": 131670299,
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
  "duration": 85304393,
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
  "duration": 65351735,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.clicks_on_Find_a_Mortgage_Rate_button()"
});
formatter.result({
  "duration": 142892495,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.the_user_applies_the_first_filter_by_Mortgage_type_Fixed()"
});
formatter.result({
  "duration": 2369250022,
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
  "duration": 395517778,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.and_the_user_applies_the_third_filter_by_Product_fee_With_Fee()"
});
formatter.result({
  "duration": 280851866,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.system_returns_the_products_matching_the_filter_criterion()"
});
formatter.result({
  "duration": 1065411469,
  "status": "passed"
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
  "duration": 82665030,
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
  "duration": 164678967,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.the_user_clicks_on_Apply_button()"
});
formatter.result({
  "duration": 2209077512,
  "status": "passed"
});
formatter.match({
  "location": "FindAMortgageRateStepDefinition.the_system_displays_Start_your_remortgage_application_page()"
});
formatter.result({
  "duration": 767752335,
  "status": "passed"
});
});