package skeleton;

import com.java.Person;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class ShoutStpdef {
	Person sean;
	Person lucia;
	
	@Given("Sean is {int} metres away \\{from} Lucia")
	public void sean_is_metres_away_from_Lucia(int distance) {
	    // Write code here that turns the phrase above into concrete actions
		sean=new Person();
		sean.setDistance(distance);
		
	    
	}

	@When("sean shouts {string}")
	public void sean_shouts(String message) {
	    // Write code here that turns the phrase above into concrete actions
		sean.setMessage(message);
		
	    
	}

	@Then("Lucia hears/(can not hear) the message")
	public void lucia_hears_the_message() {
	    // Write code here that turns the phrase above into concrete actions
		String message=sean.getMessage();
		Assert.assertEquals("free coffee", message);
	   
	}
	

}
