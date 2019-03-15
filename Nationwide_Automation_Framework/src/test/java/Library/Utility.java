package Library;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class Utility {
	
	
	
	
	 public static void captureScreenShot(WebDriver driver, String screenshotname){
			// Take screenshot and store as a file format    
		 try {  
			  TakesScreenshot ts=(TakesScreenshot)driver;
			 File src=ts.getScreenshotAs(OutputType.FILE);
					 ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);           
			
			// now copy the  screenshot to desired location using copyFile method
			 
			FileUtils.copyFile(src, new File("C:\\Users\\User\\git\\repository\\Nationwide_Automation_Framework\\Screenshots"+screenshotname+".png")); 
			 System.out.println("Screenshot Taken");
			} catch (IOException e)
			 
			{
			  System.out.println("Exception while taking Screenshot"+e.getMessage()); 

}
}}