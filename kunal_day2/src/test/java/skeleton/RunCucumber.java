package skeleton;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"pretty","html:src/reports/cucumber-reports",
		        "json:src/reports/cucumber-reports/report1.json",
		        "junit:src/reports/cucumber-reports/report2.xml"},monochrome=true,tags= {"@valid"})
public class RunCucumber {

}
