const Page = require('./page');
const RetirementCalc = require('../testData/RetirmentCalc.json');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RetireCalc extends Page {
    /**
     * define selectors using getter methods
     */
    get retireCalcPageLoad () {
        return $('#dsgint-nav-menu-item-1.1');
    }
    get pageTitlePageLoad () {
        return $('#calculator-intro-section');
    }
    get currentAge () {
        return $('#current-age');
    }
    get retirementAge () {
        return $('#retirement-age');
    }
    get currentAnnualIncome () {
        return $('#current-income');
    }
    get spouseAnnualIncome () {
        return $('#spouse-income');
    }
    get currentTotalSaving () {
        return $('#current-total-savings');
    }
    get currentRetireContrib () {
        return $('#current-annual-savings');
    }
    get annualRetirementContributionIncrease () {
        return $('//input[@id= "savings-increase-rate"]');
    }
    get ssnInputYes () {
        return $('//label[@for= "yes-social-benefits"]');
    }
    get ssnInputNo () {
        return $('//label[@for= "no-social-benefits"]');
    }
    get relationShipLabel () {
        return $('#marital-status-label');
    }
    get marriedCheck () {
        return $('//label[@for= "married"]');
    }
    get singleCheck () {
        return $('//label[@for= "single"]');
    }
    get ssnOverrideAmt () {
        return $('//input[@id= "social-security-override"]');
    }
    get getDefaultValue () {
        return $('//a[contains(text(),"Adjust default values")]');
    }
    get defaultValuesWindow () {
        return $('#default-values-modal-title');
    }
    get additionAmt () {
        return $('//input[@id= "additional-income"]');
    }
    get yearsofRetirementNeedsLast () {
        return $('//input[@id= "retirement-duration"]');
    }
    get postRetireYes () {
        return $('//label[@for= "include-inflation"]');
    }
    get postRetireNo () {
        return $('//label[@for= "exclude-inflation"]');
    }
    get expectedInflationRate () {
        return $('//input[@id= "expected-inflation-rate"]');
    }
    get percenFinalAnnualIncomeDesired () {
        return $('//input[@id= "retirement-annual-income"]');
    }
    get preRetireInvestmentReturn () {
        return $('//input[@id= "pre-retirement-roi"]');
    }
    get postRetirInveReturn () {
        return $('//input[@id= "post-retirement-roi"]');
    }
    get saveChangesButton () {
        return $('//button[contains(text(),"Save changes")]');
    }
    get submitButton () {
        return $('//button[@data-tag-id="submit"]');
    }
    get resultText () {
        return $('//div[@id="calculator-results-container"]/h3');
    }
    get errorText () {
        return $('p#calculator-input-alert-desc');
    }
    get reportContent () {
        return $('p#result-message');
    }
    get socialSecurityAsText () {
        return $('//label[@for="social-security-override"]');
    }
    get maritalStatusAsText () {
        return $('//legend[@id="marital-status-label"]');
    }
    get clearForm () {
        return $('//button[text()="Clear form"]');
    }

    async clearTheEntireForm () {
        this.clearForm.waitForClickable()
        this.clearForm.click()
    }
    async enterCurrentAge (age) {
        try {
            await browser.keys('Enter')
            await this.pageTitlePageLoad.waitForDisplayed();
            await this.pageTitlePageLoad.click();
            // Check Current Age
            if (age>0) {
                 console.log("Valid Current Age : "+age);
                 await this.currentAge.waitForDisplayed();
                 await this.currentAge.setValue(age);
             }
             else{
                 throw("Invalid Current Age : "+age)
             } 
             var text = await this.currentAge.getValue();
             console.log("Valid Current Age!"+age)
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async enterRetirementAge (age) {
        try{
            // Check Retirement Age
            if (age>0) {
                console.log("Valid Retirement Age!");
                await this.retirementAge.waitForClickable({timeout: 15000});
                await this.retirementAge.click();
                await this.retirementAge.setValue(age);
            }else{
                console.log("Invalid Retirement Age : "+age);
            }
            var text = await this.retirementAge.getValue();
            console.log("Valid Retirement Age!"+age)
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
     }

    async enterCurrentAnnualIncome (income) {
        try {
            if (income > 0) {
                console.log("Current Income should be greater than 0: "+income);
                await browser.pause(300)
                await this.currentAnnualIncome.waitForClickable({timeout: 15000});
                await this.currentAnnualIncome.click();
                await this.currentAnnualIncome.clearValue();
                await this.currentAnnualIncome.setValue(income); 
            } else {
                console.log("Invalid Current Income : "+income);
            }
            
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async enterSpouseAnnualIncome (income) {
        try{
            // Check Spouse Income
            if (income > 0) {
                console.log("Spouse Income should be greater than 0 : "+income);
                await this.spouseAnnualIncome.waitForClickable({timeout: 15000});
                await this.spouseAnnualIncome.click();
                await this.spouseAnnualIncome.clearValue();
                await browser.pause(300)
                await this.spouseAnnualIncome.setValue(income);
            } else {
                console.log("Invalid Spouse Income : "+income);
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterCurrentRetirementSavings (saving) {
        try{
            // Check Current Retirement Saving
            if (saving > 0) {
                console.log("Current Retirement Saving should be greater than 0: ",saving);
                await browser.pause(200)
                await this.currentTotalSaving.waitForClickable({timeout: 15000});
                await this.currentTotalSaving.click();
                await this.currentTotalSaving.clearValue();
                await browser.pause(200)
                await this.currentTotalSaving.setValue(saving);
            } else {
                console.log("Invalid Current Retirement Saving : "+saving);
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterCurrentRetirementContribution (saving) {
        try {
            // Check Current Retirement Contribution
            if (saving > 0) {
                await browser.pause(200)
                console.log("Current Retirement Contribution should be greater than 0:",saving);
                await this.currentRetireContrib.waitForClickable({timeout: 15000});
                await this.currentRetireContrib.click();
                await this.currentRetireContrib.setValue(saving);
            } else {
                console.log("Invalid Current Retirement Contribution : "+saving);
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterAnnualRetirementContributionIncrease (saving) {
        try {
            // Check Rate of increase in your savings each year
            if (saving > 0) {
                console.log("Rate of increase in your savings each year should be greater than 0: ",saving);
                await this.annualRetirementContributionIncrease.waitForClickable({timeout: 15000});
                await this.annualRetirementContributionIncrease.click();
                await this.annualRetirementContributionIncrease.setValue(saving);
              }  else {
                    console.log("Invalid Rate of increase in your savings each year : "+saving);
                }   
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
        
    }
    async enterSocialSecurityIncome (ssn) {
        try {
            ssn = ssn.toLowerCase();
            // Check Social Security benifits
            console.log("Relationship Status: "+ssn);
            if (ssn.includes("y")) {
                 console.log("Social Security benifits is selected as Yes!");
                 await this.ssnInputYes.waitForClickable({timeout: 15000});
                 await this.ssnInputYes.click();
             }
             else if (ssn.includes("n")) {
                console.log("Social Security benifits is not selected as No!");
                await this.ssnInputNo.waitForClickable({timeout: 15000});
                await this.ssnInputNo.click();
            }else {
                 throw("Invalid input for Social Security benifit : "+ ssn);
             } 
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterRelationshipStatus (status) {
        try {
            await this.relationShipLabel.scrollIntoView();
            status = status.toLowerCase();
            console.log("Initial Relationship Status: "+status);
            // Check Relationship Status
            if (status.includes("s")) {
                 console.log("Relationship Status is Single!");
                 await this.singleCheck.waitForClickable({timeout:10000});
                 await this.singleCheck.click();
             }
             else if (status.includes("m")) {
                console.log("Relationship Status is Married!");
                await this.marriedCheck.waitForClickable({timeout:10000});
                await this.marriedCheck.click();
            }else {
                 throw("Invalid input for Relationship Status : "+ status);
             } 
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterSocialSecurityOverride (override) {
        try {
            // Check Social Security Override Amount
            if (override > 0) {
                console.log("Social Security Override Amount should be greater than 0: "+override);
                await this.ssnOverrideAmt.waitForClickable({timeout: 15000});
                await this.ssnOverrideAmt.click();
                await this.ssnOverrideAmt.setValue(override);
            } else {
                console.log("Invalid Social Security Override Amount : "+override);
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async defaultCalcValues () {
        try {
            // Click on Default Value
            await this.getDefaultValue.waitForClickable({timeout: 15000});
            await this.getDefaultValue.click();
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterAdditionalIncome (override) {
        try {
            // Check Additional Income 
            if (override > 0) {
                console.log("Additional Income should be greater than 0!");
                await browser.pause(200)
                await this.additionAmt.waitForClickable({timeout: 15000});
                await this.additionAmt.click();
                // await this.additionAmt.clearValue();
                await this.additionAmt.setValue(override);
                await browser.pause(2000)
            } else {
                console.log("Invalid Additional Income : "+override);
            }
            console.log(await this.additionAmt.getValue()); 
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterYearsofRetirementNeedsLast (year) {
        try {
            // Check Years do you plan to depend on retirement income
            if (year > 0) {
                console.log("Years do you plan to depend on retirement income should be greater than 0!");
                await this.yearsofRetirementNeedsLast.waitForClickable({timeout: 15000});
                await this.yearsofRetirementNeedsLast.click();
                await this.yearsofRetirementNeedsLast.setValue(year);
            } else {
                console.log("Invalid Years do you plan to depend on retirement income : "+year);
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterPostRetireIncomeIncWithInflation (status) {
        try {  
            status = status.toLowerCase();
            // Check Post-retirement income
            if (status.includes("y")) {
                 console.log("Post-retirement income increase with inflation!");
                 await this.postRetireYes.waitForClickable({timeout: 15000});
                 await this.postRetireYes.click();
             }
             else if (status.includes("n")) {
                console.log("Post-retirement income doesn't increase with inflation!");
                await this.postRetireNo.waitForClickable({timeout: 15000});
                await this.postRetireNo.click();
            }else {
                 throw("Invalid input for post-retirement income increase with inflation : "+ ssn);
             } 
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterExpectedInflationRate (year) {
        try {
            // Check Inflation Rate
            if (year > 0) {
                console.log("Inflation Rate should be greater than 0!");
                await this.expectedInflationRate.waitForClickable({timeout: 15000});
                await this.expectedInflationRate.click();
                await this.expectedInflationRate.setValue(year);
            } else {
                console.log("Invalid Inflation Rate : "+year);
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterPercenFinalAnnualIncomeDesired (year) {
        try {
            // Check Final annual income do you want available in each year of your retirement
            if (year > 0) {
                console.log("Final annual income do you want available in each year of your retirement should be greater than 0!");
                await this.percenFinalAnnualIncomeDesired.waitForClickable({timeout: 15000});
                await this.percenFinalAnnualIncomeDesired.click();
                await this.percenFinalAnnualIncomeDesired.setValue(year);
            } else {
                console.log("Invalid Final annual income do you want available in each year of your retirement : "+year);
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterPreRetireInvestmentReturn (rate) {
        try {
            // Check Pre-retirement investment return
            if (rate > 0) {
                console.log("Pre-retirement investment return should be greater than 0!");
                await this.preRetireInvestmentReturn.waitForClickable({timeout: 15000});
                await this.preRetireInvestmentReturn.click();
                await this.preRetireInvestmentReturn.setValue(rate);
            } else {
                console.log("Invalid Pre-retirement investment return : "+rate);
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterPostRetirInveReturn (rate) {
        try {
            // Check Post-retirement investment return
            if (rate > 0) {
                console.log("Post-retirement investment return should be greater than 0!");
                await this.postRetirInveReturn.waitForClickable({timeout:15000});
                await this.postRetirInveReturn.click();
                await this.postRetirInveReturn.setValue(rate);
            } else {
                console.log("Post-retirement investment return : "+rate);
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async saveButtonClick () {
        try {
            await browser.takeScreenshot();
            await browser.saveScreenshot('./src/screenshots/RetrimentCalculator.png')
            console.log("Save Button");
            // Click on Save button
            await this.saveChangesButton.waitForClickable({timeout: 15000});
            await this.saveChangesButton.click();
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async submitButtonClick () {
        try {
                console.log("Submit Button");
                // Click on Submit button
                await this.submitButton.waitForClickable();
                await this.submitButton.click();
                await browser.takeScreenshot();
                await browser.saveScreenshot('./src/screenshots/Submit.png')
            
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async verifyReport () {
        try {
            var text = ''
            await browser.pause(2000)
            await this.resultText.waitForDisplayed({timeout: 40000})
            
            await browser.takeScreenshot()
            await browser.saveScreenshot('./src/screenshots/RetirementReport.png')   

            if (await this.resultText.isDisplayed()) {
                text = await this.resultText.getText();
                if (text.includes("Result")) {
                    // Verify the content of report
                    console.log(text);
                    text = await this.reportContent.getText();
                    text = text.toLowerCase();
                    console.log(text);
                return text
                }else{
                    throw("Success Text is not Displayed!")
                }
            } 
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async verifyErrorReport () {
        try {
            var text = ''
            if (await this.errorText.isDisplayed()) {
                text = await this.errorText.getText() 
            }else{
                throw("Error Text is not Displayed!")
            }
        
        await browser.takeScreenshot()
        await browser.saveScreenshot('./src/screenshots/RetirementErrorReport.png')  
        return text 
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async socialSecurityAsNo () {
        try {
            await this.ssnInputNo.waitForClickable({timeout:10000});
            await this.ssnInputNo.click();
            if (!(await this.socialSecurityAsText.isDisplayed())) {
                var ssnOverrideStatus = await this.socialSecurityAsText.isDisplayed()
                var maritalStatus = await this.maritalStatusAsText.isDisplayed()
                console.log(ssnOverrideStatus +" : "+maritalStatus);
                if (!ssnOverrideStatus && !maritalStatus) {
                    console.log("Social Security Benifits is selected as No");
                } else {
                    throw("Social Security Benifits is selected as Yes")
                }
            }
            await browser.saveScreenshot('./src/screenshots/SSN_No.png')  
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async socialSecurityAsYes () {
        try {
            await this.ssnInputYes.waitForDisplayed();
            await this.ssnInputYes.click();
            await this.socialSecurityAsText.waitForDisplayed();
            var ssnOverrideStatus = await this.socialSecurityAsText.isDisplayed();
            var maritalStatus = await this.maritalStatusAsText.isDisplayed();

            if (ssnOverrideStatus && maritalStatus) {
                console.log("Social Security Benifits is selected as Yes");
            } else {
                throw("Social Security Benifits is selected as No")
            }
            await browser.saveScreenshot('./src/screenshots/SSN_Yes.png')
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async verifyDefaultValues (yearsofRetirementNeedsLast) {
        try {
            var text;
            await this.defaultCalcValues();
            await this.defaultValuesWindow.waitForDisplayed({timeout:30000});
            // Years for Retirement
            await this.yearsofRetirementNeedsLast.waitForDisplayed({timeout:30000});
            text = await this.yearsofRetirementNeedsLast.getValue();
            console.log(text+"  :  "+yearsofRetirementNeedsLast);
            await browser.saveScreenshot('./src/screenshots/verifyDefaultvalues.png')
            return text
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    
}

module.exports = new RetireCalc();
