
/*
A Selenium Automation with node.js and javascript binding. 
*/

var webdriver = require('Selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();

		driver.get("http://www.ebay.com");
        driver.findElement(By.xpath(".//*[@id='gh-ac']")).sendKeys("elephant handicraft");
        driver.findElement(By.xpath(".//*[@id='gh-btn']")).click();
        driver.close;
