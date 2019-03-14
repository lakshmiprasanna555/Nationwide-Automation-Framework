package com.AbstractSubmission.action;
import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



	@RunWith(Cucumber.class)
	@CucumberOptions(
			//features = "/Users/NaveenKhunteta/Documents/workspace/FreeCrmBDDFramework/src/main/java/Features/taggedhooks.feature", //the path of the feature files
			features = "C:\\Users\\User\\eclipse-workspace\\BDD\\Nationwide_Automation_Framework\\src\\main\\java\\Features\\Find-Mortgage-Rate.feature",
			glue={"StepDefinitions"},//the path of the step definition files
			plugin= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml","com.cucumber.listener.ExtentCucumberFormatter:target/html/ExtentReport.html"},
			
			monochrome = true, //display the console output in a proper readable format
			strict = true, //it will check if any step is not defined in step definition file
			dryRun = false //to check the mapping is proper between feature file and step def file
		//tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"}			
			)
	 
	public class TestRunner {
		@AfterClass
		public static void setup()
		{
		Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
		//Reporter.setSystemInfo("Test User", System.getProperty("user.name"));
		Reporter.setSystemInfo("MICROSOFT WINDOWS 10 HOME", "LAPTOP-55QQK7EU");
		Reporter.setSystemInfo("Application Name", "Test App ");
		Reporter.setSystemInfo("Operating System Type", System.getProperty("os.name").toString());
		Reporter.setSystemInfo("Environment", "Production");
		Reporter.setTestRunnerOutput("Test Execution Cucumber Report");
		}

	}
