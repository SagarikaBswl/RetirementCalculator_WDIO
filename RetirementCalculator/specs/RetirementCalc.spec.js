const LoginPage = require('../pageobjects/login.page');
const RetireCalc = require('../pageobjects/RetireCalc.page');
const RetirementCalc = require('../testData/RetirmentCalc.json');
// import RetirementCalc from '../testData/RetirmentCalc.json'
// import RetireCalc from '../pageobjects/RetireCalc.page'
// import LoginPage from '../pageobjects/login.page'

describe('Retirement Calculator Scenarios', () => {

    

    describe('TC001 : Verify if User should be able to submit form with all required fields filled', () => {
        var testData = RetirementCalc.TC001_RequiredFieldInput
        var msg = ''
        describe('Enter All the Required Fields in Retirement Calculator String', () => {
            it('Launch URL', async () => {
                console.log("Launch Retirement Calculator Link");
                var url = RetirementCalc.RetirementCalcLink;
                await LoginPage.openUrl(url);
            })
            it('Enter Valid Current Age', async () => {
                await RetireCalc.enterCurrentAge(testData.CurrentAge);
            });
            it('Enter invalid Reirement Age', async () => {
                await RetireCalc.enterRetirementAge(testData.RetirementAge);
            });
            it('Enter Valid Current Annual Income', async () => {
                await RetireCalc.enterCurrentAnnualIncome(testData.CurrentAnnualIncome);
            }); 
            it('Enter Valid Current Retirement Saving', async () => {
                await RetireCalc.enterCurrentRetirementSavings(testData.CurrentRetirementSavings);
            });
            it('Enter Valid Currently saving each year for retirement', async () => {
                await RetireCalc.enterCurrentRetirementContribution(testData.CurrentRetirementContribution);
            });
            it('Enter Valid Rate of increase in your savings each year', async () => {
                await RetireCalc.enterAnnualRetirementContributionIncrease(testData.AnnualRetirementContributionIncrease);
            });
            it('Enter Valid Social Security benifits', async () => {
                await RetireCalc.enterSocialSecurityIncome(testData.SocialSecurityIncome);
            });
            it('Enter Valid Relationship Status', async () => {
                await RetireCalc.enterRelationshipStatus(testData.RelationshipStatus);
            });
            it('Hit Submit Button', async () => {
                await RetireCalc.submitButtonClick();
            });
        });
        describe('Check Report', () => {
            it('Verify Results', async () => {
                await RetireCalc.verifyReport();
            });
        });
    });
    describe('TC002 : Verify if User is able to submit form with all fields filled in ', () => {
        var testData = RetirementCalc.TC002_AllFieldInput
        var updateTestData = RetirementCalc.TC004_UpdateDefaultFields
       describe('Enter Valid Inputs in Retirement Calculator String', () => {
            it('Launch URL', async () => {
                console.log("Launch Retirement Calculator Link");
                var url = RetirementCalc.RetirementCalcLink;
                await LoginPage.openUrl(url);
            })
            it('Enter Valid Current Age ', async () => {
                await RetireCalc.enterCurrentAge(testData.CurrentAge);
            });
            it('Enter Valid Reirement Age', async () => {
                await RetireCalc.enterRetirementAge(testData.RetirementAge);
            });
            it('Enter Valid Current Annual Income', async () => {
                await RetireCalc.enterCurrentAnnualIncome(testData.CurrentAnnualIncome);
            });
            it('Enter Valid Spouse Annual Income', async () => {
                await RetireCalc.enterSpouseAnnualIncome(testData.SpouseAnnualIncome);
            });
            it('Enter Valid Current Retirement Saving', async () => {
                await RetireCalc.enterCurrentRetirementSavings(testData.CurrentRetirementSavings);
            });
            it('Enter Valid Currently saving each year for retirement', async () => {
                await RetireCalc.enterCurrentRetirementContribution(testData.CurrentRetirementContribution);
            });
            it('Enter Valid Rate of increase in your savings each year', async () => {
                await RetireCalc.enterAnnualRetirementContributionIncrease(testData.AnnualRetirementContributionIncrease);
            });
            it('Enter Valid Social Security benifits', async () => {
                await RetireCalc.enterSocialSecurityIncome(testData.SocialSecurityIncome);
            });
            it('Enter Valid Relationship Status', async () => {
                await RetireCalc.enterRelationshipStatus(testData.RelationshipStatus);
            });
            it('Enter Valid Social Security Override Amount', async () => {
                await RetireCalc.enterSocialSecurityOverride(testData.SocialSecurityOverride);
            });
            it('Open Default calculator values', async () => {
                await RetireCalc.defaultCalcValues();
            });
            it('Enter Valid Additional Income', async () => {
                await RetireCalc.enterAdditionalIncome(testData.AdditionalIncome);
            });
            it('Enter Valid Years do you plan to depend on retirement income', async () => {
                await RetireCalc.enterYearsofRetirementNeedsLast(testData.YearsofRetirementNeedsLast);
            }); 
            it('Enter Valid post-retirement income increase with inflation', async () => {
                await RetireCalc.enterPostRetireIncomeIncWithInflation(testData.PostRetireIncomeIncWithInflation);
            }); 
            it('Enter Valid Expected inflation rate', async () => {
                await RetireCalc.enterExpectedInflationRate(testData.ExpectedInflationRate);
            });
            it('Enter Valid Final annual income do you want available in each year of your retirement', async () => {
                await RetireCalc.enterPercenFinalAnnualIncomeDesired(testData.PercenFinalAnnualIncomeDesired);
            });
            it('Enter Valid Pre-retirement investment returnnt', async () => {
                await RetireCalc.enterPreRetireInvestmentReturn(testData.PreRetireInvestmentReturn);
            });
            it('Enter Valid Post-retirement investment return', async () => {
                await RetireCalc.enterPostRetirInveReturn(testData.PostRetirInveReturn);
            });
            it('Hit Save and Submit Button', async () => {
                await RetireCalc.saveButtonClick();
                await RetireCalc.submitButtonClick();
            });
        });
        describe('Check Report', () => {
            it('Verify Results', async () => {
                await RetireCalc.verifyReport();
            });
        });
    });
    describe('TC003 : Verify if Additional Social Security fields should display/hide based on Social Security benefits toggle', () => {
        // describe('Check If Additional Social Security fields should display/hide based on Social Security benefits toggle', () => {
        it('Launch URL', async () => {
            console.log("Launch Retirement Calculator Link");
            var url = RetirementCalc.RetirementCalcLink;
            await LoginPage.openUrl(url);
        })
        it('Social Security benefits is selected as Yes', async () => {
            await RetireCalc.socialSecurityAsYes()
        });
        it('Social Security benefits is selected as No', async () => {
            await RetireCalc.socialSecurityAsNo()
        });
    });
    describe('TC004 : Verify if User should be able to update default calculator values ', () => {
        var testData = RetirementCalc.TC004_UpdateDefaultFields
        it('Launch URL', async () => {
            console.log("Launch Retirement Calculator Link");
            var url = RetirementCalc.RetirementCalcLink;
            await LoginPage.openUrl(url);
        })
        it('Open Default calculator values', async () => {
            await RetireCalc.defaultCalcValues();
        });
        it('Enter Valid Additional Income', async () => {
            await RetireCalc.enterAdditionalIncome(testData.AdditionalIncome);
        });
        it('Enter Valid Years do you plan to depend on retirement income', async () => {
            await RetireCalc.enterYearsofRetirementNeedsLast(testData.YearsofRetirementNeedsLast);
        }); 
        it('Enter Valid post-retirement income increase with inflation', async () => {
            await RetireCalc.enterPostRetireIncomeIncWithInflation(testData.PostRetireIncomeIncWithInflation);
        }); 
        it('Enter Valid Expected inflation rate', async () => {
            await RetireCalc.enterExpectedInflationRate(testData.ExpectedInflationRate);
        });
        it('Enter Valid Final annual income do you want available in each year of your retirement', async () => {
            await RetireCalc.enterPercenFinalAnnualIncomeDesired(testData.PercenFinalAnnualIncomeDesired);
        });
        it('Enter Valid Pre-retirement investment returnnt', async () => {
            await RetireCalc.enterPreRetireInvestmentReturn(testData.PreRetireInvestmentReturn);
        });
        it('Enter Valid Post-retirement investment return', async () => {
            await RetireCalc.enterPostRetirInveReturn(testData.PostRetirInveReturn);
        });
        it('Hit Save', async () => {
            await RetireCalc.saveButtonClick();
        });
        it('Open Default calculator values', async () => {
            await RetireCalc.defaultCalcValues();
        });
        it('Enter Valid Additional Income', async () => {
            await RetireCalc.enterAdditionalIncome(testData.UpdateAdditionalIncome);
        });
        it('Enter Valid Years do you plan to depend on retirement income', async () => {
            await RetireCalc.enterYearsofRetirementNeedsLast(testData.UpdateYearsofRetirementNeedsLast);
        });
        it('Hit Save', async () => {
            await RetireCalc.saveButtonClick();
        });
        it('Verify if the Values are actually saved', async () => {
            await RetireCalc.verifyDefaultValues( testData.UpdateYearsofRetirementNeedsLast);
        });
    });
});

