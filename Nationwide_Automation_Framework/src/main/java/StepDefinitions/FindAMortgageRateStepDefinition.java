
package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;



import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FindAMortgageRateStepDefinition {

	public static WebDriver driver;
	static Actions action;
	public MortgagePage mortgage;

	@Given("^User opens the url https://www.nationwide.co.uk$")
	public void user_opens_the_url_https_www_nationwide_co_uk() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\User\\eclipse-workspace\\BDD\\Nationwide_Automation_Framework\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.nationwide.co.uk");
		String title = driver.getTitle();
		Assert.assertEquals("Nationwide Building Society | building society, nationwide", title);
	}

	@When("^User navigates to Mortgage rates for 'New mortgage customer'$")
	public MortgagePage user_navigates_to_Mortgage_rates_for_New_mortgage_customer() {

		action = new Actions(driver);
		WebElement element = driver
				.findElement(By.xpath("//a[@data-nbs-analytics-options=\"navigation:'BH|GH|Level1|Mortgages'\"]"));
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		action.moveToElement(element).build().perform();
		System.out.println("Got mortgagerate");

		WebDriverWait wait1 = new WebDriverWait(driver, 10);
		WebElement element1 = driver.findElement(By.xpath(
				"//a[@data-nbs-analytics-options=\"navigation:'BH|GH|Level1|Mortgages|New mortgage customers|Mortgage rates'\"]"));
		wait1.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(
				"//a[@data-nbs-analytics-options=\"navigation:'BH|GH|Level1|Mortgages|New mortgage customers|Mortgage rates'\"]")));
		// wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='buttonGlbl']")));
		element1.click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		System.out.println("Mortgagesrates tab displayed");
		return new MortgagePage();

	}

	@Then("^'Search for a Nationwide mortgage' Page should be displayed$")
	public void search_for_a_Nationwide_mortgage_Page_should_be_displayed() {
		mortgage = new MortgagePage();
		// String title1= mortgage.gettitle();
		// Assert.assertSame("Our Mortgage Rates | Nationwide", title1);
		// Assert.assertEquals("Our Mortgage Rates | Nationwide", title1);
		mortgage.toString().contains("Search for a Nationwide mortgage");

		System.out.println(" Nationwide mortgage' Page should be displayed");

	}

	@Given("^when user is on the 'Search for a Nationwide mortgage' Page$")
	public void when_user_is_on_the_Search_for_a_Nationwide_mortgage_Page() throws Throwable {
		System.out.println("user is on the 'Search for a Nationwide mortgage");
	}

	@When("^the user selects No for Do you have a Nationwide mortgage option$")
	public void the_user_selects_No_for_Do_you_have_a_Nationwide_mortgage_option() {
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().setScriptTimeout(20, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//span[contains(text(),'No')]")).click();
		System.out.println("user clicks No");

	}

	@When("^I m changing lender' Option for 'What type of mortgage are you looking for\\?' menu$")
	public void i_m_changing_lender_Option_for_What_type_of_mortgage_are_you_looking_for_menu() throws Throwable {
		driver.findElement(By.xpath("//span[contains(text(),\"I'm changing lender\")]")).click();
		System.out.println("changed lender' Option");
	}

	@When("^the user enters 'Property value = £(\\d+),(\\d+)'$")
	public void the_user_enters_Property_value_£(int arg1, int arg2) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@id='SearchPropertyValue']")).sendKeys("300000");
		System.out.println("entered Property value");
	}

	@When("^the user enters 'Mortgage amount = £(\\d+),(\\d+)'$")
	public void the_user_enters_Mortgage_amount_£(int arg1, int arg2) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@id='SearchMortgageAmount']")).sendKeys("150000");
		System.out.println("user entered 'Mortgage amount");

	}

	@When("^the user enters 'Term = (\\d+) years'$")
	public void the_user_enters_Term_years(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@id='SearchMortgageTerm']")).sendKeys("30");
		System.out.println("user entered Term");

	}

	@When("^Clicks on Find a Mortgage Rate button$")
	public void clicks_on_Find_a_Mortgage_Rate_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//button[@id='myButton']")).click();
		System.out.println("Clicked on Find a Mortgage Rate button");

	}

	@When("^the user applies the first filter by 'Mortgage type = Fixed'$")
	public void the_user_applies_the_first_filter_by_Mortgage_type_Fixed() {

		// Mortgage Type - Fixed Rate
		WebDriverWait wait10 = new WebDriverWait(driver, 45);
		wait10.until(ExpectedConditions.visibilityOfElementLocated(
		By.xpath("//div[@class = 'inner']/div/div/div/div[@id='fixed']/span[@class='tick']")));

		WebElement element = driver.findElement(By.xpath("//div[@class = 'inner']/div/div/div/div[@id='fixed']/span[@class='tick']"));
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("arguments[0].click();", element);
	}

	@When("^the user selects the second filter by 'Deal period = (\\d+) yr Fixed, (\\d+) yr Fixed, (\\d+) yr Fixed, (\\d+) yr Fixed'$")
	public void the_user_selects_the_second_filter_by_Deal_period_yr_Fixed_yr_Fixed_yr_Fixed_yr_Fixed(int arg1,
			int arg2, int arg3, int arg4) {

		// 2 years
		WebDriverWait wait11 = new WebDriverWait(driver, 45);
		wait11.until(ExpectedConditions.visibilityOfElementLocated(
				By.xpath("//div[@class = 'inner']/div/div/div/div[@id='deal-two']/span[@class='tick']")));

		WebElement element1 = driver
				.findElement(By.xpath("//div[@class = 'inner']/div/div/div/div[@id='deal-two']/span[@class='tick']"));
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("arguments[0].click();", element1);

		// 3 years
		WebDriverWait wait12 = new WebDriverWait(driver, 45);
		wait12.until(ExpectedConditions.visibilityOfElementLocated(
				By.xpath("//div[@class = 'inner']/div/div/div/div[@id='deal-three']/span[@class='tick']")));

		WebElement element2 = driver
				.findElement(By.xpath("//div[@class = 'inner']/div/div/div/div[@id='deal-three']/span[@class='tick']"));
		JavascriptExecutor jse2 = (JavascriptExecutor) driver;
		jse2.executeScript("arguments[0].click();", element2);

		// 5 years
		WebDriverWait wait13 = new WebDriverWait(driver, 45);
		wait13.until(ExpectedConditions.visibilityOfElementLocated(
				By.xpath("//div[@class = 'inner']/div/div/div/div[@id='deal-five']/span[@class='tick']")));

		WebElement element3 = driver
				.findElement(By.xpath("//div[@class = 'inner']/div/div/div/div[@id='deal-five']/span[@class='tick']"));
		JavascriptExecutor jse3 = (JavascriptExecutor) driver;
		jse3.executeScript("arguments[0].click();", element3);

		// 10 years
		WebDriverWait wait14 = new WebDriverWait(driver, 45);
		wait14.until(ExpectedConditions.visibilityOfElementLocated(
				By.xpath("//div[@class = 'inner']/div/div/div/div[@id='deal-ten']/span[@class='tick']")));

		WebElement element4 = driver
				.findElement(By.xpath("//div[@class = 'inner']/div/div/div/div[@id='deal-ten']/span[@class='tick']"));
		JavascriptExecutor jse4 = (JavascriptExecutor) driver;
		jse4.executeScript("arguments[0].click();", element4);
	}

	@When("^And the user applies the third filter by 'Product fee = With Fee'$")
	public void and_the_user_applies_the_third_filter_by_Product_fee_With_Fee() {

		// Product Fee-With Fee
		WebDriverWait wait15 = new WebDriverWait(driver, 45);
		wait15.until(ExpectedConditions.visibilityOfElementLocated(
				By.xpath("//div[@class = 'inner']/div/div/div/div[@id='product-fee-fee']/span[@class='tick']")));

		WebElement element5 = driver.findElement(
				By.xpath("//div[@class = 'inner']/div/div/div/div[@id='product-fee-fee']/span[@class='tick']"));
		JavascriptExecutor jse5 = (JavascriptExecutor) driver;
		jse5.executeScript("arguments[0].click();", element5);
	}

	@Then("^System returns the products matching the filter criterion$")
	public void system_returns_the_products_matching_the_filter_criterion() {

		// Assertion for 2 yr Fixed
		WebDriverWait wait16 = new WebDriverWait(driver, 60);
		wait16.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(".//tr[contains(@data-product-code, '131128')]")));
		WebElement element6 = driver.findElement(By.xpath(".//tr[contains(@data-product-code, '131128')]"));
		// element6.click();
		String name1 = element6.getText();
		String prdType1 = (name1.substring(0, 10));
		System.out.println("The Product Type is" + name1.substring(0, 10));
		Assert.assertEquals("2 yr Fixed", prdType1);

		// Assertion for 3 yr Fixed
		WebDriverWait wait17 = new WebDriverWait(driver, 60);
		wait17.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(".//tr[contains(@data-product-code, '131193')]")));
		WebElement element7 = driver.findElement(By.xpath(".//tr[contains(@data-product-code, '131193')]"));
		//element7.click();
		String name2 = element7.getText();
		String prdType2 = (name2.substring(0, 10));
		System.out.println("The Product Type is" + name2.substring(0, 10));
		Assert.assertEquals("3 yr Fixed", prdType2);

		//Assertion for 5 yr Fixed 
		WebDriverWait wait18= new WebDriverWait(driver, 60);
		wait18.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(".//tr[contains(@data-product-code, '131258')]")));
		WebElement element8= driver.findElement(By.xpath(".//tr[contains(@data-product-code, '131258')]")); 
		//element8.click();
		String name3 = element8.getText();
		String prdType3 =(name3.substring(0,10)); 
		System.out.println("The Product Type is" + name3.substring(0,10)); 
		Assert.assertEquals("5 yr Fixed", prdType3);
		  
		//Assertion for 10 yr Fixed 
		WebDriverWait wait19= new WebDriverWait(driver, 60);
		wait19.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(".//tr[contains(@data-product-code, '130509')]")));
		WebElement element9 = driver.findElement(By.xpath(".//tr[contains(@data-product-code, '130509')]")); 
		//element9.click();
		String name4 = element9.getText(); 
		String prdType4 = (name4.substring(0,11)); 
		System.out.println("The Product Type is" + name4.substring(0,13)); 
		Assert.assertEquals("10 yr Fixed", prdType4); }
//Scenario: Initiate Remortgage Application as a New User                     
	  @Given("^the list of mortgages matching the filter criterion are available$")
	  public void the_list_of_mortgages_matching_the_filter_criterion_are_available() {
			//Assertion for 5 yr Fixed new WebDriverWait(driver, 45); WebElement element8
			WebDriverWait wait18= new WebDriverWait(driver, 60);
			wait18.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(".//tr[contains(@data-product-code, '131258')]")));
			WebElement element8= driver.findElement(By.xpath(".//tr[contains(@data-product-code, '131258')]")); 
			//element8.click();
			String name3 = element8.getText();
			String prdType3 =(name3.substring(0,10)); 
			System.out.println("The Product Type is" + name3.substring(0,10)); 
			Assert.assertEquals("5 yr Fixed", prdType3);
	  }
	  
	  @When("^the user clicks on 'More info and apply' for the '(\\d+) yr Fixed' product$")
	  public void the_user_clicks_on_More_info_and_apply_for_the_yr_Fixed_product(int arg1)  {
		  WebDriverWait wait19= new WebDriverWait(driver, 30);
			wait19.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//tr[@data-product-code='131258']//span[@class='iconText closed']")));
		  driver.findElement(By.xpath("//tr[@data-product-code='131258']//span[@class='iconText closed']")).click();	 
	  }

	  @When("^the user clicks on 'Apply' button$")
	  public void the_user_clicks_on_Apply_button()  {
		
			WebDriverWait wait20= new WebDriverWait(driver, 30);
			wait20.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//td[@id='prod131258']//a[@class='button ngbaButton'][contains(text(),'Apply')]")));
		  //((JavascriptExecutor)driver).executeScript("window.scrollTo(0,document.body.scrollHeight);");
			  driver.findElement(By.xpath("//td[@id='prod131258']//a[@class='button ngbaButton'][contains(text(),'Apply')]")).click();
			  
	  }
	  
	  @Then("^the system displays 'Start your remortgage application' page$")
	  public void the_system_displays_Start_your_remortgage_application_page()  {
		  
		  
		  WebElement element21 = driver.findElement(By.xpath("//h1[contains(@class,'center')]"));
		  String heading1 = element21.getText();
		  Assert.assertEquals("Start your remortgage application", heading1);
	     
	  }
	   
	
	
}

