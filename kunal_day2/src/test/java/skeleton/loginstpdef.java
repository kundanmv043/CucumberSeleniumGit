package skeleton;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import Pages.LoginPage;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import junit.framework.Assert;

public class loginstpdef {
	
	WebDriver driver;
	
	public loginstpdef(SharedDriver driver) {
		super();
		this.driver=driver;
	}
	@Before
	public void beforeScenario(Scenario scenario) {
		//System.setProperty("webdriver.chrome.driver", "C:\\Users\\a07208trng_b4a.04.28\\Downloads\\chromedriver_win32\\chromedriver.exe");
		//driver = new ChromeDriver();
		PageFactory.initElements(driver,LoginPage.class);
	}
	
	@After
	public void afterScenario(Scenario scenario)
	{
		//driver.close();
	}
	@Given("the url of the login page")
	public void the_url_of_the_login_page() {
	    // Write code here that turns the phrase above into concrete actions
		
		driver.get("http://demowebshop.tricentis.com/login");
		Assert.assertTrue(driver.getTitle().contains("Login"));
		
	   
	}

	@When("admin user enters {word} as username")
	public void admin_user_enters_abc_gmail_com_as_username(String username) {
	   
	    //driver.findElement(By.id("Email")).sendKeys(username);
		LoginPage.UserName.sendKeys(username);
		
	}

	@When("admin user enters {word} as passsword")
	public void admin_user_enters_abc_as_passsword(String password) {
		//driver.findElement(By.id("Password")).sendKeys(password);
		LoginPage.Password.sendKeys(password);
	}

	@Then("{word} user")
	public void admin_user(String result) {
		if(result.equals("valid"))
		{
			//driver.findElement(By.cssSelector("input[value=Log in']")).click();
			LoginPage.Login.click();
			Assert.assertNotNull(driver.findElement(By.linkText("Log out")));
		}
	    
	    
	}
}
