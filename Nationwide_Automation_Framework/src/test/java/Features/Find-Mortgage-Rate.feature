Feature: Find a mortgage rate

Scenario: Navigate user to 'Nationwide mortgage Page' as a New User
Given User opens the url https://www.nationwide.co.uk
When User navigates to Mortgage rates for 'New mortgage customer'
Then 'Search for a Nationwide mortgage' Page should be displayed


Scenario: Find a mortgage rate for New User
Given when user is on the 'Search for a Nationwide mortgage' Page
When the user selects No for Do you have a Nationwide mortgage option
And I m changing lender' Option for 'What type of mortgage are you looking for?' menu
And the user enters 'Property value = £300,000'
And the user enters 'Mortgage amount = £150,000'
And the user enters 'Term = 30 years'
And Clicks on Find a Mortgage Rate button
And the user applies the first filter by 'Mortgage type = Fixed' 
And the user selects the second filter by 'Deal period = 2 yr Fixed, 3 yr Fixed, 5 yr Fixed, 10 yr Fixed'
And And the user applies the third filter by 'Product fee = With Fee'
Then System returns the products matching the filter criterion


Scenario: Initiate Remortgage Application as a New User
Given the list of mortgages matching the filter criterion are available
When the user clicks on 'More info and apply' for the '5 yr Fixed' product
And the user clicks on 'Apply' button 
Then the system displays 'Start your remortgage application' page









 