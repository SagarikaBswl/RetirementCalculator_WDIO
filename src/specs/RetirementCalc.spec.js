const LoginPage = require('../pageobjects/login.page');
const RetireCalc = require('../pageobjects/RetireCalc.page');
const RetirementCalc = require('../testData/RetirmentCalc.json');

describe('Retirement Calculator Scenarios', () => {
    var msg = ''
    it('TC001 : Verify if User should be able to submit form with all required fields filled', async () => {
        var testData = RetirementCalc.TC001_RequiredFieldInput
                // Launch URL
                console.log("Launch Retirement Calculator Link");
                var url = RetirementCalc.RetirementCalcLink;
                msg = await LoginPage.openUrl(url);
                expect(msg).toContain('Securian Financial')
                // Enter Valid Current Age
                await RetireCalc.enterCurrentAge(testData.CurrentAge);
                // Enter Invalid Retieremnt Age
                await RetireCalc.enterRetirementAge(testData.RetirementAge);
                // Enter Valid Current Annual Income
                await RetireCalc.enterCurrentAnnualIncome(testData.CurrentAnnualIncome);
                // Enter Valid Current Retirement Saving
                await RetireCalc.enterCurrentRetirementSavings(testData.CurrentRetirementSavings);
                // Enter Valid Currently saving each year for retirement
                await RetireCalc.enterCurrentRetirementContribution(testData.CurrentRetirementContribution);
                // Enter Valid Rate of increase in your savings each year
                await RetireCalc.enterAnnualRetirementContributionIncrease(testData.AnnualRetirementContributionIncrease);
                // Enter Valid Social Security benifits
                await RetireCalc.enterSocialSecurityIncome(testData.SocialSecurityIncome);
                // Enter Valid Relationship Status
                await RetireCalc.enterRelationshipStatus(testData.RelationshipStatus);
                // Hit Submit Button
                await RetireCalc.submitButtonClick();
                // Verify Results
                msg = await RetireCalc.verifyErrorReport();
                expect(msg).toContain("Please fill")
     });
    it('TC002 : Verify if User is able to submit form with all fields filled in ', async () => {
        var testData = RetirementCalc.TC002_AllFieldInput
                // Launch URL
                console.log("Launch Retirement Calculator Link");
                var url = RetirementCalc.RetirementCalcLink;
                msg = await LoginPage.openUrl(url);
                expect(msg).toContain("Securian Financial")

                // Enter Valid Current Age
                await RetireCalc.enterCurrentAge(testData.CurrentAge);
                // Enter Valid Retieremnt Age
                await RetireCalc.enterRetirementAge(testData.RetirementAge);
                // Enter Valid Current Annual Income
                await RetireCalc.enterCurrentAnnualIncome(testData.CurrentAnnualIncome);
                // Enter Valid Spouse Annual Income
                await RetireCalc.enterSpouseAnnualIncome(testData.SpouseAnnualIncome);
                // Enter Valid Current Retirement Saving
                await RetireCalc.enterCurrentRetirementSavings(testData.CurrentRetirementSavings);
                // Enter Valid Currently saving each year for retirement
                await RetireCalc.enterCurrentRetirementContribution(testData.CurrentRetirementContribution);
                // Enter Valid Rate of increase in your savings each year
                await RetireCalc.enterAnnualRetirementContributionIncrease(testData.AnnualRetirementContributionIncrease);
                // Enter Valid Social Security benifits
                await RetireCalc.enterSocialSecurityIncome(testData.SocialSecurityIncome);
                // Enter Valid Relationship Status
                await RetireCalc.enterRelationshipStatus(testData.RelationshipStatus);
                // Enter Valid Social Security Override Amount
                await RetireCalc.enterSocialSecurityOverride(testData.SocialSecurityOverride);

                // Open Default calculator values', async () => {
                await RetireCalc.defaultCalcValues();
                await expect(RetireCalc.defaultValuesWindow).toBeExisting();
                 
                await expect(RetireCalc.defaultValuesWindow).toHaveTextContaining('Default calculator');
                // Enter Valid Additional Income
                await RetireCalc.enterAdditionalIncome(testData.AdditionalIncome);
                // Enter Valid Years do you plan to depend on retirement income
                await RetireCalc.enterYearsofRetirementNeedsLast(testData.YearsofRetirementNeedsLast);
                // Enter Valid post-retirement income increase with inflation
                await RetireCalc.enterPostRetireIncomeIncWithInflation(testData.PostRetireIncomeIncWithInflation);
                // Enter Valid Expected inflation rate
                await RetireCalc.enterExpectedInflationRate(testData.ExpectedInflationRate);
                // Enter Valid Final annual income do you want available in each year of your retirement
                await RetireCalc.enterPercenFinalAnnualIncomeDesired(testData.PercenFinalAnnualIncomeDesired);
                // Enter Valid Pre-retirement investment return
                await RetireCalc.enterPreRetireInvestmentReturn(testData.PreRetireInvestmentReturn);
                // Enter Valid Post-retirement investment return
                await RetireCalc.enterPostRetirInveReturn(testData.PostRetirInveReturn);

                // Hit Save Button
                await RetireCalc.saveButtonClick();
                // Hit Submit Button
                await RetireCalc.submitButtonClick();
                // Verify Results
                msg = await RetireCalc.verifyReport();
                expect(msg).toContain("congrat")
    });
    it('TC003 : Verify if Additional Social Security fields should display/hide based on Social Security benefits toggle', async () => {
            // Launch URL
            console.log("Launch Retirement Calculator Link");
            var url = RetirementCalc.RetirementCalcLink;
            msg = await LoginPage.openUrl(url);
            expect(msg).toContain("Securian Financial")

            // Social Security benefits is selected as Yes
            msg = await RetireCalc.socialSecurityAsYes()

            // Social Security benefits is selected as No
            msg = await RetireCalc.socialSecurityAsNo()
       
    });
    it('TC004 : Verify if User should be able to update default calculator values ',async () => {
        var testData = RetirementCalc.TC004_UpdateDefaultFields
        // Launch URL
        console.log("Launch Retirement Calculator Link");
        var url = RetirementCalc.RetirementCalcLink;
        msg = await LoginPage.openUrl(url);
        expect(msg).toContain("Securian Financial")

        
        // Open Default calculator values', async () => {
        await RetireCalc.defaultCalcValues();
        await expect(RetireCalc.defaultValuesWindow).toBeExisting();
         await expect(RetireCalc.defaultValuesWindow).toHaveTextContaining('Default calculator');
        // Enter Valid Additional Income
        await RetireCalc.enterAdditionalIncome(testData.AdditionalIncome);
        // Enter Valid Years do you plan to depend on retirement income
        await RetireCalc.enterYearsofRetirementNeedsLast(testData.YearsofRetirementNeedsLast);
        // Enter Valid post-retirement income increase with inflation
        await RetireCalc.enterPostRetireIncomeIncWithInflation(testData.PostRetireIncomeIncWithInflation);
        // Enter Valid Expected inflation rate
        await RetireCalc.enterExpectedInflationRate(testData.ExpectedInflationRate);
        // Enter Valid Final annual income do you want available in each year of your retirement
        await RetireCalc.enterPercenFinalAnnualIncomeDesired(testData.PercenFinalAnnualIncomeDesired);
        // Enter Valid Pre-retirement investment return
        await RetireCalc.enterPreRetireInvestmentReturn(testData.PreRetireInvestmentReturn);
        // Enter Valid Post-retirement investment return
        await RetireCalc.enterPostRetirInveReturn(testData.PostRetirInveReturn);

        // Hit Save Button
        await RetireCalc.saveButtonClick();
            
        // Open Default calculator values
        await RetireCalc.defaultCalcValues();
        // Enter Valid Years do you plan to depend on retirement income
        await RetireCalc.enterYearsofRetirementNeedsLast(testData.UpdateYearsofRetirementNeedsLast);
        // Hit Save Button
        await RetireCalc.saveButtonClick();

        // Verify if the Values are actually saved
        msg = await RetireCalc.verifyDefaultValues( testData.UpdateYearsofRetirementNeedsLast);
        expect(parseFloat(msg)).toEqual(parseFloat(testData.UpdateYearsofRetirementNeedsLast));
        console.log( "years of Retirement Needs to last is Saved!");
    });
});

